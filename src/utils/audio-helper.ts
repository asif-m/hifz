import { IReciterTimeStamp } from "~/models/ayah-info-interface"

export function extractSilenceRegions(audioData:Float32Array, duration:number):Array<IReciterTimeStamp> {
  const minValue = 0.1
  const minSilenceDuration = 0.1
  const mergeDuration = 0.2
  const scale = duration / audioData.length
  const silentRegions = []

  // Find all silent regions longer than minSilenceDuration
  let start = 0
  let end = 0
  let isSilent = false
  for (let i = 0; i < audioData.length; i++) {
    if (audioData[i] < minValue) {
      if (!isSilent) {
        start = i
        isSilent = true
      }
    } else if (isSilent) {
      end = i
      isSilent = false
      if (scale * (end - start) > minSilenceDuration) {
        silentRegions.push({
          timestampFrom: scale * start,
          timestampTo: scale * end,
        })
      }
    }
  }

  // Merge silent regions that are close together
  const mergedRegions = []
  let lastRegion = null
  for (let i = 0; i < silentRegions.length; i++) {
    if (lastRegion && silentRegions[i].timestampFrom - lastRegion.timestampTo < mergeDuration) {
      lastRegion.timestampTo = silentRegions[i].timestampTo
    } else {
      lastRegion = silentRegions[i]
      mergedRegions.push(lastRegion)
    }
  }
  return mergedRegions
}

  export function findClosestSilentRegion(silentRegions:Array<IReciterTimeStamp>, timeStamp: number){
    let closestRegion = silentRegions[0];
    let prevDistance = distanceFromRegion(silentRegions[0],timeStamp);
    for(let i=1;i<silentRegions.length;i++){
      const currDistance = distanceFromRegion(silentRegions[i],timeStamp)
      if(prevDistance>currDistance){
        prevDistance = currDistance;
        closestRegion = silentRegions[i];
      }
    }
    const middle = parseFloat(((closestRegion.timestampFrom+closestRegion.timestampTo)/2).toFixed(1));
    return {region: closestRegion, middle}
  }

  function distanceFromRegion(region: IReciterTimeStamp, timeStamp:number){
    if(timeStamp > region.timestampTo){
      return (timeStamp - region.timestampTo);
    }
    if(timeStamp<region.timestampFrom){
      return (region.timestampFrom - timeStamp)
    }
    return Math.abs(region.timestampFrom - timeStamp);
  }