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
  public static shouldDisplayBismillah(word: IArabicWord) {
    const { chapterNumber } = word;
    return (
      CWord.isFirstWord(word) && chapterNumber !== 1 && chapterNumber !== 9
    );
  }
  public static isFirstWord(word: IArabicWord) {
    const { verseNumber, wordNumber } = word;
    return wordNumber === 1 && verseNumber === 1;
  }
}
