import { FIRST_SURAH, LAST_SURAH, SURAHS_INFO } from "./surah";
import { IArabicWord } from "./word";

export interface IReciterTimeStamp {
  timestampFrom: number;
  timestampTo: number;
}

export interface IAyahBase {
  verseNumber: number;
  chapterNumber: number;
}

export interface IAyah extends IAyahBase {
  chapterNumber:number;
  verseNumber:number;
  verseKey: string;
  pageNumber: number;
  isManzil: boolean;
  manzilNumber: number;
  isJuz: boolean;
  juzNumber: number;
  isHizb: boolean;
  hizbNumber: number;
  isRubElHizb: boolean;
  rubElHizbNumber:number;
  isRuku: boolean;
  rukuNumber: number;
  isSajdah: boolean;
  sajdahNumber: null,
  textUthmani: string;
  wordByWord: string;
  transliteration: string;
  reciterTimestamps: IReciterTimeStamp,
  words: Array<IArabicWord>;
}

export class CAyah {
  public static getNextAyah(
    currentSurah: number,
    currentAyah: number
  ): { nextSurah: number; nextAyah: number } {
    if (
      currentSurah === LAST_SURAH.surahNumber &&
      currentAyah === LAST_SURAH.versesCount
    ) {
      return { nextSurah: 1, nextAyah: 1 };
    }
    if (currentAyah === SURAHS_INFO[currentSurah - 1].versesCount) {
      return { nextSurah: currentSurah + 1, nextAyah: 1 };
    }
    return { nextSurah: currentSurah, nextAyah: currentAyah + 1 };
  }
  public static getPrevAyah(
    currentSurah: number,
    currentAyah: number
  ): { nextSurah: number; nextAyah: number } {
    if (currentSurah === FIRST_SURAH.surahNumber && currentAyah === 1) {
      return {
        nextSurah: LAST_SURAH.surahNumber,
        nextAyah: LAST_SURAH.versesCount,
      };
    }
    if (currentAyah === 1) {
      return {
        nextSurah: currentSurah - 1,
        nextAyah: SURAHS_INFO[currentSurah - 1 - 1].versesCount,
      };
    }
    return { nextSurah: currentSurah, nextAyah: currentAyah - 1 };
  }
}
