import { FIRST_SURAH, LAST_SURAH, SURAHS_INFO } from "./surah";

export interface IReciterTimeStamp {
  timestampFrom: number;
  timestampTo: number;
}

export interface IArabicWord {
  audioUrl: string | null;
  charTypeName: string;
  codeV1: string;
  lineNumber: number;
  location: string;
  pageNumber: number;
  wordNumber: number;
  qpcUthmaniHafs: string;
  textUthmani: string;
  translation: string;
  transliteration: string | null;
  verseNumber: number;
  chapterNumber: number;
  verseKey: string;
}

export interface IAyahBase {
  verseNumber: number;
  chapterNumber: number;
}

export interface IAyah extends IAyahBase {
  verseNumber: number;
  hizbNumber: number;
  juzNumber: number;
  manzilNumber: number;
  pageNumber: number;
  rubElHizbNumber: number;
  rukuNumber: number;
  sajdahNumber: number | null;
  textUthmani: string;
  verseKey: string;
  wordByWord: string;
  transliteration: string | null;
  isSajdah: boolean;
  words: Array<IArabicWord>;
  chapterNumber: number;
  reciterTimestamps: {
    [key in string]: IReciterTimeStamp;
  };
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

export class CWord {
  public static shouldDisplayBismillah(word: IArabicWord) {
    const { chapterNumber } = word;
    return (
      CWord.isFirstWord(word) && chapterNumber !==1 && chapterNumber !== 9
    );
  }
  public static isFirstWord(word: IArabicWord) {
    const { verseNumber, wordNumber } = word;
    return (
      wordNumber === 1 &&
      verseNumber === 1
    );
  }
}
