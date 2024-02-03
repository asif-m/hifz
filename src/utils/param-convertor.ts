import { IAyahBase } from "~/models/ayah-info-interface";
import { SURAHS_INFO } from "~/models/surah";

export function getSurahAndAyahFromSurahUrl(param: string): IAyahBase {
  let [chapterNumber = 1, verseNumber = 1] = param
    .split(":")
    .map((s) => parse(s, 1));
  if (chapterNumber > SURAHS_INFO.length) {
    chapterNumber = 1;
  }
  if(SURAHS_INFO[chapterNumber-1].versesCount < verseNumber){
    verseNumber = 1;
  }
  return {
    chapterNumber,
    verseNumber,
  };
}
export function getSurahAndAyahFromUrl(
  paramValue: string,
  data: Array<IAyahBase>
): IAyahBase {
  const num = parse(paramValue, 1);
  const { verseNumber = 1, chapterNumber = 1 } = data[num - 1] || {};
  return { verseNumber, chapterNumber };
}

export function parse(s: string, defaultValue: number): number {
  try {
    return parseInt(s);
  } catch (e) {
    return defaultValue;
  }
}
