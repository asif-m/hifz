import { IReciterTimeStampSilenceRegion } from "~/models/ayah-info-interface";
import { parseFloatToFloatFixed } from "./param-convertor";

export function getSilenceRegions(
  audioData: Float32Array,
  duration: number,
): Array<IReciterTimeStampSilenceRegion> {
  const minValue = 0.1;
  const minSilenceDuration = 0.2;
  const mergeDuration = 0.2;
  const scale = duration / audioData.length;
  const silentRegions: Array<IReciterTimeStampSilenceRegion> = [];

  // Find all silent regions longer than minSilenceDuration
  let start = 0;
  let end = 0;
  let isSilent = false;
  for (let i = 0; i < audioData.length; i++) {
    if (audioData[i] < minValue) {
      if (!isSilent) {
        start = i;
        isSilent = true;
      }
    } else if (isSilent) {
      end = i;
      isSilent = false;
      if (scale * (end - start) > minSilenceDuration) {
        const timestampFrom = scale * start;
        const timestampTo = scale * end;
        const middle = parseFloatToFloatFixed(
          Math.ceil(((timestampFrom + timestampTo) / 2) * 100) / 100,
        );
        silentRegions.push({
          timestampFrom,
          timestampTo,
          middle,
        });
      }
    }
  }

  // Merge silent regions that are close together
  const mergedRegions: Array<IReciterTimeStampSilenceRegion> = [];
  let lastRegion = null;
  for (let i = 0; i < silentRegions.length; i++) {
    if (
      lastRegion &&
      silentRegions[i].timestampFrom - lastRegion.timestampTo < mergeDuration
    ) {
      lastRegion.timestampTo = silentRegions[i].timestampTo;
    } else {
      lastRegion = silentRegions[i];
      mergedRegions.push(lastRegion);
    }
  }
  return mergedRegions;
}

export function getClosestSilentRegionMidPointWithinBandwidth(
  silentRegions: Array<IReciterTimeStampSilenceRegion>,
  timeStamp: number,
  bandWidth: number = 1.0,
) {
  const { middle } = findClosestSilentRegion(silentRegions, timeStamp);
  if (Math.abs(middle - timeStamp) <= bandWidth) {
    return middle;
  }
  return timeStamp;
}

export function findClosestSilentRegion(
  silentRegions: Array<IReciterTimeStampSilenceRegion>,
  timeStamp: number,
): IReciterTimeStampSilenceRegion {
  let left = 0;
  let right = silentRegions.length - 1;
  let closestRegion = silentRegions[0];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midRegion = silentRegions[mid];

    const distanceToMid = distanceFromRegion(midRegion, timeStamp);

    if (distanceToMid === 0) {
      // If timestamp is within the current region, it's the closest
      return midRegion;
    }

    const distanceToClosest = distanceFromRegion(closestRegion, timeStamp);

    if (distanceToMid < distanceToClosest) {
      closestRegion = midRegion;
    }

    if (timeStamp < midRegion.timestampFrom) {
      // If timestamp is before the current region, update right
      right = mid - 1;
    } else {
      // If timestamp is after the current region, update left
      left = mid + 1;
    }
  }

  return closestRegion;
}

function distanceFromRegion(
  region: IReciterTimeStampSilenceRegion,
  timeStamp: number,
) {
  if (timeStamp > region.timestampTo) {
    return timeStamp - region.timestampTo;
  }
  if (timeStamp < region.timestampFrom) {
    return region.timestampFrom - timeStamp;
  }
  return Math.abs(region.timestampFrom - timeStamp);
}
