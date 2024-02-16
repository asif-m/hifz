import { CSurah } from "./surah";

export interface IArabicWord {
  chapterNumber: number;
  verseNumber: number;
  pageNumber: number;
  lineNumber: number;
  wordNumber: number;
  location: string;
  audioUrl: string | null;
  charTypeName: string;
  codeV1: string;
  qpcUthmaniHafs: string;
  textUthmani: string;
  translation: string;
  transliteration: string;
}

export class CWord {
  public static shouldAddBismi(word: IArabicWord) {
    const { chapterNumber, verseNumber } = word;
    return (
      CWord.isFirstWord(word) && CSurah.shouldAddBismi(chapterNumber,verseNumber)
    );
  }
  public static isFirstWord(word: IArabicWord) {
    const { verseNumber, wordNumber } = word;
    return wordNumber === 1 && verseNumber === 1;
  }
}
