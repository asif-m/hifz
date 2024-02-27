import { IReciterTimeStamp } from "~/models/ayah-info-interface"

export function extractSilenceRegions(audioData:Float32Array, duration:number):Array<IReciterTimeStamp> {
  const minValue = 0.01
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
          start: scale * start,
          end: scale * end,
        })
      }
    }
  }

  // Merge silent regions that are close together
  const mergedRegions = []
  let lastRegion = null
  for (let i = 0; i < silentRegions.length; i++) {
    if (lastRegion && silentRegions[i].start - lastRegion.end < mergeDuration) {
      lastRegion.end = silentRegions[i].end
    } else {
      lastRegion = silentRegions[i]
      mergedRegions.push(lastRegion)
    }
  }

  // Find regions that are not silent
  const regions = []
  let lastEnd = 0
  for (let i = 0; i < mergedRegions.length; i++) {
    regions.push({
      start: lastEnd,
      end: mergedRegions[i].start,
    })
    lastEnd = mergedRegions[i].end
  }

  return regions
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
    return {region: closestRegion, middle:(closestRegion.timestampFrom+closestRegion.timestampTo)/2}
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