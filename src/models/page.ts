import type { IAyah, IAyahBase } from "./ayah-info-interface";
import { IArabicWord } from "./word";

export interface IPageData {
  pageNumber: number;
  manzils: Array<number>;
  juzs: Array<number>;
  hizbs: Array<number>;
  rubElHizbs: Array<number>;
  rukus: Array<number>;
  chapterAndAyahRange: Array<{
    chapterNumber: number;
    verseFrom: number;
    verseTo: number;
  }>;
  ayahs: Array<IAyah>;
}

export const PAGE_INFO: Array<IAyahBase> = [
  {
    chapterNumber: 1,
    verseNumber: 1,
  },
  {
    chapterNumber: 2,
    verseNumber: 1,
  },
  {
    chapterNumber: 2,
    verseNumber: 6,
  },
  {
    chapterNumber: 2,
    verseNumber: 17,
  },
  {
    chapterNumber: 2,
    verseNumber: 25,
  },
  {
    chapterNumber: 2,
    verseNumber: 30,
  },
  {
    chapterNumber: 2,
    verseNumber: 38,
  },
  {
    chapterNumber: 2,
    verseNumber: 49,
  },
  {
    chapterNumber: 2,
    verseNumber: 58,
  },
  {
    chapterNumber: 2,
    verseNumber: 62,
  },
  {
    chapterNumber: 2,
    verseNumber: 70,
  },
  {
    chapterNumber: 2,
    verseNumber: 77,
  },
  {
    chapterNumber: 2,
    verseNumber: 84,
  },
  {
    chapterNumber: 2,
    verseNumber: 89,
  },
  {
    chapterNumber: 2,
    verseNumber: 94,
  },
  {
    chapterNumber: 2,
    verseNumber: 102,
  },
  {
    chapterNumber: 2,
    verseNumber: 106,
  },
  {
    chapterNumber: 2,
    verseNumber: 113,
  },
  {
    chapterNumber: 2,
    verseNumber: 120,
  },
  {
    chapterNumber: 2,
    verseNumber: 127,
  },
  {
    chapterNumber: 2,
    verseNumber: 135,
  },
  {
    chapterNumber: 2,
    verseNumber: 142,
  },
  {
    chapterNumber: 2,
    verseNumber: 146,
  },
  {
    chapterNumber: 2,
    verseNumber: 154,
  },
  {
    chapterNumber: 2,
    verseNumber: 164,
  },
  {
    chapterNumber: 2,
    verseNumber: 170,
  },
  {
    chapterNumber: 2,
    verseNumber: 177,
  },
  {
    chapterNumber: 2,
    verseNumber: 182,
  },
  {
    chapterNumber: 2,
    verseNumber: 187,
  },
  {
    chapterNumber: 2,
    verseNumber: 191,
  },
  {
    chapterNumber: 2,
    verseNumber: 197,
  },
  {
    chapterNumber: 2,
    verseNumber: 203,
  },
  {
    chapterNumber: 2,
    verseNumber: 211,
  },
  {
    chapterNumber: 2,
    verseNumber: 216,
  },
  {
    chapterNumber: 2,
    verseNumber: 220,
  },
  {
    chapterNumber: 2,
    verseNumber: 225,
  },
  {
    chapterNumber: 2,
    verseNumber: 231,
  },
  {
    chapterNumber: 2,
    verseNumber: 234,
  },
  {
    chapterNumber: 2,
    verseNumber: 238,
  },
  {
    chapterNumber: 2,
    verseNumber: 246,
  },
  {
    chapterNumber: 2,
    verseNumber: 249,
  },
  {
    chapterNumber: 2,
    verseNumber: 253,
  },
  {
    chapterNumber: 2,
    verseNumber: 257,
  },
  {
    chapterNumber: 2,
    verseNumber: 260,
  },
  {
    chapterNumber: 2,
    verseNumber: 265,
  },
  {
    chapterNumber: 2,
    verseNumber: 270,
  },
  {
    chapterNumber: 2,
    verseNumber: 275,
  },
  {
    chapterNumber: 2,
    verseNumber: 282,
  },
  {
    chapterNumber: 2,
    verseNumber: 283,
  },
  {
    chapterNumber: 3,
    verseNumber: 1,
  },
  {
    chapterNumber: 3,
    verseNumber: 10,
  },
  {
    chapterNumber: 3,
    verseNumber: 16,
  },
  {
    chapterNumber: 3,
    verseNumber: 23,
  },
  {
    chapterNumber: 3,
    verseNumber: 30,
  },
  {
    chapterNumber: 3,
    verseNumber: 38,
  },
  {
    chapterNumber: 3,
    verseNumber: 46,
  },
  {
    chapterNumber: 3,
    verseNumber: 53,
  },
  {
    chapterNumber: 3,
    verseNumber: 62,
  },
  {
    chapterNumber: 3,
    verseNumber: 71,
  },
  {
    chapterNumber: 3,
    verseNumber: 78,
  },
  {
    chapterNumber: 3,
    verseNumber: 84,
  },
  {
    chapterNumber: 3,
    verseNumber: 92,
  },
  {
    chapterNumber: 3,
    verseNumber: 101,
  },
  {
    chapterNumber: 3,
    verseNumber: 109,
  },
  {
    chapterNumber: 3,
    verseNumber: 116,
  },
  {
    chapterNumber: 3,
    verseNumber: 122,
  },
  {
    chapterNumber: 3,
    verseNumber: 133,
  },
  {
    chapterNumber: 3,
    verseNumber: 141,
  },
  {
    chapterNumber: 3,
    verseNumber: 149,
  },
  {
    chapterNumber: 3,
    verseNumber: 154,
  },
  {
    chapterNumber: 3,
    verseNumber: 158,
  },
  {
    chapterNumber: 3,
    verseNumber: 166,
  },
  {
    chapterNumber: 3,
    verseNumber: 174,
  },
  {
    chapterNumber: 3,
    verseNumber: 181,
  },
  {
    chapterNumber: 3,
    verseNumber: 187,
  },
  {
    chapterNumber: 3,
    verseNumber: 195,
  },
  {
    chapterNumber: 4,
    verseNumber: 1,
  },
  {
    chapterNumber: 4,
    verseNumber: 7,
  },
  {
    chapterNumber: 4,
    verseNumber: 12,
  },
  {
    chapterNumber: 4,
    verseNumber: 15,
  },
  {
    chapterNumber: 4,
    verseNumber: 20,
  },
  {
    chapterNumber: 4,
    verseNumber: 24,
  },
  {
    chapterNumber: 4,
    verseNumber: 27,
  },
  {
    chapterNumber: 4,
    verseNumber: 34,
  },
  {
    chapterNumber: 4,
    verseNumber: 38,
  },
  {
    chapterNumber: 4,
    verseNumber: 45,
  },
  {
    chapterNumber: 4,
    verseNumber: 52,
  },
  {
    chapterNumber: 4,
    verseNumber: 60,
  },
  {
    chapterNumber: 4,
    verseNumber: 66,
  },
  {
    chapterNumber: 4,
    verseNumber: 75,
  },
  {
    chapterNumber: 4,
    verseNumber: 80,
  },
  {
    chapterNumber: 4,
    verseNumber: 87,
  },
  {
    chapterNumber: 4,
    verseNumber: 92,
  },
  {
    chapterNumber: 4,
    verseNumber: 95,
  },
  {
    chapterNumber: 4,
    verseNumber: 102,
  },
  {
    chapterNumber: 4,
    verseNumber: 106,
  },
  {
    chapterNumber: 4,
    verseNumber: 114,
  },
  {
    chapterNumber: 4,
    verseNumber: 122,
  },
  {
    chapterNumber: 4,
    verseNumber: 128,
  },
  {
    chapterNumber: 4,
    verseNumber: 135,
  },
  {
    chapterNumber: 4,
    verseNumber: 141,
  },
  {
    chapterNumber: 4,
    verseNumber: 148,
  },
  {
    chapterNumber: 4,
    verseNumber: 155,
  },
  {
    chapterNumber: 4,
    verseNumber: 163,
  },
  {
    chapterNumber: 4,
    verseNumber: 171,
  },
  {
    chapterNumber: 4,
    verseNumber: 176,
  },
  {
    chapterNumber: 5,
    verseNumber: 3,
  },
  {
    chapterNumber: 5,
    verseNumber: 6,
  },
  {
    chapterNumber: 5,
    verseNumber: 10,
  },
  {
    chapterNumber: 5,
    verseNumber: 14,
  },
  {
    chapterNumber: 5,
    verseNumber: 18,
  },
  {
    chapterNumber: 5,
    verseNumber: 24,
  },
  {
    chapterNumber: 5,
    verseNumber: 32,
  },
  {
    chapterNumber: 5,
    verseNumber: 37,
  },
  {
    chapterNumber: 5,
    verseNumber: 42,
  },
  {
    chapterNumber: 5,
    verseNumber: 46,
  },
  {
    chapterNumber: 5,
    verseNumber: 51,
  },
  {
    chapterNumber: 5,
    verseNumber: 58,
  },
  {
    chapterNumber: 5,
    verseNumber: 65,
  },
  {
    chapterNumber: 5,
    verseNumber: 71,
  },
  {
    chapterNumber: 5,
    verseNumber: 77,
  },
  {
    chapterNumber: 5,
    verseNumber: 83,
  },
  {
    chapterNumber: 5,
    verseNumber: 90,
  },
  {
    chapterNumber: 5,
    verseNumber: 96,
  },
  {
    chapterNumber: 5,
    verseNumber: 104,
  },
  {
    chapterNumber: 5,
    verseNumber: 109,
  },
  {
    chapterNumber: 5,
    verseNumber: 114,
  },
  {
    chapterNumber: 6,
    verseNumber: 1,
  },
  {
    chapterNumber: 6,
    verseNumber: 9,
  },
  {
    chapterNumber: 6,
    verseNumber: 19,
  },
  {
    chapterNumber: 6,
    verseNumber: 28,
  },
  {
    chapterNumber: 6,
    verseNumber: 36,
  },
  {
    chapterNumber: 6,
    verseNumber: 45,
  },
  {
    chapterNumber: 6,
    verseNumber: 53,
  },
  {
    chapterNumber: 6,
    verseNumber: 60,
  },
  {
    chapterNumber: 6,
    verseNumber: 69,
  },
  {
    chapterNumber: 6,
    verseNumber: 74,
  },
  {
    chapterNumber: 6,
    verseNumber: 82,
  },
  {
    chapterNumber: 6,
    verseNumber: 91,
  },
  {
    chapterNumber: 6,
    verseNumber: 95,
  },
  {
    chapterNumber: 6,
    verseNumber: 102,
  },
  {
    chapterNumber: 6,
    verseNumber: 111,
  },
  {
    chapterNumber: 6,
    verseNumber: 119,
  },
  {
    chapterNumber: 6,
    verseNumber: 125,
  },
  {
    chapterNumber: 6,
    verseNumber: 132,
  },
  {
    chapterNumber: 6,
    verseNumber: 138,
  },
  {
    chapterNumber: 6,
    verseNumber: 143,
  },
  {
    chapterNumber: 6,
    verseNumber: 147,
  },
  {
    chapterNumber: 6,
    verseNumber: 152,
  },
  {
    chapterNumber: 6,
    verseNumber: 158,
  },
  {
    chapterNumber: 7,
    verseNumber: 1,
  },
  {
    chapterNumber: 7,
    verseNumber: 12,
  },
  {
    chapterNumber: 7,
    verseNumber: 23,
  },
  {
    chapterNumber: 7,
    verseNumber: 31,
  },
  {
    chapterNumber: 7,
    verseNumber: 38,
  },
  {
    chapterNumber: 7,
    verseNumber: 44,
  },
  {
    chapterNumber: 7,
    verseNumber: 52,
  },
  {
    chapterNumber: 7,
    verseNumber: 58,
  },
  {
    chapterNumber: 7,
    verseNumber: 68,
  },
  {
    chapterNumber: 7,
    verseNumber: 74,
  },
  {
    chapterNumber: 7,
    verseNumber: 82,
  },
  {
    chapterNumber: 7,
    verseNumber: 88,
  },
  {
    chapterNumber: 7,
    verseNumber: 96,
  },
  {
    chapterNumber: 7,
    verseNumber: 105,
  },
  {
    chapterNumber: 7,
    verseNumber: 121,
  },
  {
    chapterNumber: 7,
    verseNumber: 131,
  },
  {
    chapterNumber: 7,
    verseNumber: 138,
  },
  {
    chapterNumber: 7,
    verseNumber: 144,
  },
  {
    chapterNumber: 7,
    verseNumber: 150,
  },
  {
    chapterNumber: 7,
    verseNumber: 156,
  },
  {
    chapterNumber: 7,
    verseNumber: 160,
  },
  {
    chapterNumber: 7,
    verseNumber: 164,
  },
  {
    chapterNumber: 7,
    verseNumber: 171,
  },
  {
    chapterNumber: 7,
    verseNumber: 179,
  },
  {
    chapterNumber: 7,
    verseNumber: 188,
  },
  {
    chapterNumber: 7,
    verseNumber: 196,
  },
  {
    chapterNumber: 8,
    verseNumber: 1,
  },
  {
    chapterNumber: 8,
    verseNumber: 9,
  },
  {
    chapterNumber: 8,
    verseNumber: 17,
  },
  {
    chapterNumber: 8,
    verseNumber: 26,
  },
  {
    chapterNumber: 8,
    verseNumber: 34,
  },
  {
    chapterNumber: 8,
    verseNumber: 41,
  },
  {
    chapterNumber: 8,
    verseNumber: 46,
  },
  {
    chapterNumber: 8,
    verseNumber: 53,
  },
  {
    chapterNumber: 8,
    verseNumber: 62,
  },
  {
    chapterNumber: 8,
    verseNumber: 70,
  },
  {
    chapterNumber: 9,
    verseNumber: 1,
  },
  {
    chapterNumber: 9,
    verseNumber: 7,
  },
  {
    chapterNumber: 9,
    verseNumber: 14,
  },
  {
    chapterNumber: 9,
    verseNumber: 21,
  },
  {
    chapterNumber: 9,
    verseNumber: 27,
  },
  {
    chapterNumber: 9,
    verseNumber: 32,
  },
  {
    chapterNumber: 9,
    verseNumber: 37,
  },
  {
    chapterNumber: 9,
    verseNumber: 41,
  },
  {
    chapterNumber: 9,
    verseNumber: 48,
  },
  {
    chapterNumber: 9,
    verseNumber: 55,
  },
  {
    chapterNumber: 9,
    verseNumber: 62,
  },
  {
    chapterNumber: 9,
    verseNumber: 69,
  },
  {
    chapterNumber: 9,
    verseNumber: 73,
  },
  {
    chapterNumber: 9,
    verseNumber: 80,
  },
  {
    chapterNumber: 9,
    verseNumber: 87,
  },
  {
    chapterNumber: 9,
    verseNumber: 94,
  },
  {
    chapterNumber: 9,
    verseNumber: 100,
  },
  {
    chapterNumber: 9,
    verseNumber: 107,
  },
  {
    chapterNumber: 9,
    verseNumber: 112,
  },
  {
    chapterNumber: 9,
    verseNumber: 118,
  },
  {
    chapterNumber: 9,
    verseNumber: 123,
  },
  {
    chapterNumber: 10,
    verseNumber: 1,
  },
  {
    chapterNumber: 10,
    verseNumber: 7,
  },
  {
    chapterNumber: 10,
    verseNumber: 15,
  },
  {
    chapterNumber: 10,
    verseNumber: 21,
  },
  {
    chapterNumber: 10,
    verseNumber: 26,
  },
  {
    chapterNumber: 10,
    verseNumber: 34,
  },
  {
    chapterNumber: 10,
    verseNumber: 43,
  },
  {
    chapterNumber: 10,
    verseNumber: 54,
  },
  {
    chapterNumber: 10,
    verseNumber: 62,
  },
  {
    chapterNumber: 10,
    verseNumber: 71,
  },
  {
    chapterNumber: 10,
    verseNumber: 79,
  },
  {
    chapterNumber: 10,
    verseNumber: 89,
  },
  {
    chapterNumber: 10,
    verseNumber: 98,
  },
  {
    chapterNumber: 10,
    verseNumber: 107,
  },
  {
    chapterNumber: 11,
    verseNumber: 6,
  },
  {
    chapterNumber: 11,
    verseNumber: 13,
  },
  {
    chapterNumber: 11,
    verseNumber: 20,
  },
  {
    chapterNumber: 11,
    verseNumber: 29,
  },
  {
    chapterNumber: 11,
    verseNumber: 38,
  },
  {
    chapterNumber: 11,
    verseNumber: 46,
  },
  {
    chapterNumber: 11,
    verseNumber: 54,
  },
  {
    chapterNumber: 11,
    verseNumber: 63,
  },
  {
    chapterNumber: 11,
    verseNumber: 72,
  },
  {
    chapterNumber: 11,
    verseNumber: 82,
  },
  {
    chapterNumber: 11,
    verseNumber: 89,
  },
  {
    chapterNumber: 11,
    verseNumber: 98,
  },
  {
    chapterNumber: 11,
    verseNumber: 109,
  },
  {
    chapterNumber: 11,
    verseNumber: 118,
  },
  {
    chapterNumber: 12,
    verseNumber: 5,
  },
  {
    chapterNumber: 12,
    verseNumber: 15,
  },
  {
    chapterNumber: 12,
    verseNumber: 23,
  },
  {
    chapterNumber: 12,
    verseNumber: 31,
  },
  {
    chapterNumber: 12,
    verseNumber: 38,
  },
  {
    chapterNumber: 12,
    verseNumber: 44,
  },
  {
    chapterNumber: 12,
    verseNumber: 53,
  },
  {
    chapterNumber: 12,
    verseNumber: 64,
  },
  {
    chapterNumber: 12,
    verseNumber: 70,
  },
  {
    chapterNumber: 12,
    verseNumber: 79,
  },
  {
    chapterNumber: 12,
    verseNumber: 87,
  },
  {
    chapterNumber: 12,
    verseNumber: 96,
  },
  {
    chapterNumber: 12,
    verseNumber: 104,
  },
  {
    chapterNumber: 13,
    verseNumber: 1,
  },
  {
    chapterNumber: 13,
    verseNumber: 6,
  },
  {
    chapterNumber: 13,
    verseNumber: 14,
  },
  {
    chapterNumber: 13,
    verseNumber: 19,
  },
  {
    chapterNumber: 13,
    verseNumber: 29,
  },
  {
    chapterNumber: 13,
    verseNumber: 35,
  },
  {
    chapterNumber: 13,
    verseNumber: 43,
  },
  {
    chapterNumber: 14,
    verseNumber: 6,
  },
  {
    chapterNumber: 14,
    verseNumber: 11,
  },
  {
    chapterNumber: 14,
    verseNumber: 19,
  },
  {
    chapterNumber: 14,
    verseNumber: 25,
  },
  {
    chapterNumber: 14,
    verseNumber: 34,
  },
  {
    chapterNumber: 14,
    verseNumber: 43,
  },
  {
    chapterNumber: 15,
    verseNumber: 1,
  },
  {
    chapterNumber: 15,
    verseNumber: 16,
  },
  {
    chapterNumber: 15,
    verseNumber: 32,
  },
  {
    chapterNumber: 15,
    verseNumber: 52,
  },
  {
    chapterNumber: 15,
    verseNumber: 71,
  },
  {
    chapterNumber: 15,
    verseNumber: 91,
  },
  {
    chapterNumber: 16,
    verseNumber: 7,
  },
  {
    chapterNumber: 16,
    verseNumber: 15,
  },
  {
    chapterNumber: 16,
    verseNumber: 27,
  },
  {
    chapterNumber: 16,
    verseNumber: 35,
  },
  {
    chapterNumber: 16,
    verseNumber: 43,
  },
  {
    chapterNumber: 16,
    verseNumber: 55,
  },
  {
    chapterNumber: 16,
    verseNumber: 65,
  },
  {
    chapterNumber: 16,
    verseNumber: 73,
  },
  {
    chapterNumber: 16,
    verseNumber: 80,
  },
  {
    chapterNumber: 16,
    verseNumber: 88,
  },
  {
    chapterNumber: 16,
    verseNumber: 94,
  },
  {
    chapterNumber: 16,
    verseNumber: 103,
  },
  {
    chapterNumber: 16,
    verseNumber: 111,
  },
  {
    chapterNumber: 16,
    verseNumber: 119,
  },
  {
    chapterNumber: 17,
    verseNumber: 1,
  },
  {
    chapterNumber: 17,
    verseNumber: 8,
  },
  {
    chapterNumber: 17,
    verseNumber: 18,
  },
  {
    chapterNumber: 17,
    verseNumber: 28,
  },
  {
    chapterNumber: 17,
    verseNumber: 39,
  },
  {
    chapterNumber: 17,
    verseNumber: 50,
  },
  {
    chapterNumber: 17,
    verseNumber: 59,
  },
  {
    chapterNumber: 17,
    verseNumber: 67,
  },
  {
    chapterNumber: 17,
    verseNumber: 76,
  },
  {
    chapterNumber: 17,
    verseNumber: 87,
  },
  {
    chapterNumber: 17,
    verseNumber: 97,
  },
  {
    chapterNumber: 17,
    verseNumber: 105,
  },
  {
    chapterNumber: 18,
    verseNumber: 5,
  },
  {
    chapterNumber: 18,
    verseNumber: 16,
  },
  {
    chapterNumber: 18,
    verseNumber: 21,
  },
  {
    chapterNumber: 18,
    verseNumber: 28,
  },
  {
    chapterNumber: 18,
    verseNumber: 35,
  },
  {
    chapterNumber: 18,
    verseNumber: 46,
  },
  {
    chapterNumber: 18,
    verseNumber: 54,
  },
  {
    chapterNumber: 18,
    verseNumber: 62,
  },
  {
    chapterNumber: 18,
    verseNumber: 75,
  },
  {
    chapterNumber: 18,
    verseNumber: 84,
  },
  {
    chapterNumber: 18,
    verseNumber: 98,
  },
  {
    chapterNumber: 19,
    verseNumber: 1,
  },
  {
    chapterNumber: 19,
    verseNumber: 12,
  },
  {
    chapterNumber: 19,
    verseNumber: 26,
  },
  {
    chapterNumber: 19,
    verseNumber: 39,
  },
  {
    chapterNumber: 19,
    verseNumber: 52,
  },
  {
    chapterNumber: 19,
    verseNumber: 65,
  },
  {
    chapterNumber: 19,
    verseNumber: 77,
  },
  {
    chapterNumber: 19,
    verseNumber: 96,
  },
  {
    chapterNumber: 20,
    verseNumber: 13,
  },
  {
    chapterNumber: 20,
    verseNumber: 38,
  },
  {
    chapterNumber: 20,
    verseNumber: 52,
  },
  {
    chapterNumber: 20,
    verseNumber: 65,
  },
  {
    chapterNumber: 20,
    verseNumber: 77,
  },
  {
    chapterNumber: 20,
    verseNumber: 88,
  },
  {
    chapterNumber: 20,
    verseNumber: 99,
  },
  {
    chapterNumber: 20,
    verseNumber: 114,
  },
  {
    chapterNumber: 20,
    verseNumber: 126,
  },
  {
    chapterNumber: 21,
    verseNumber: 1,
  },
  {
    chapterNumber: 21,
    verseNumber: 11,
  },
  {
    chapterNumber: 21,
    verseNumber: 25,
  },
  {
    chapterNumber: 21,
    verseNumber: 36,
  },
  {
    chapterNumber: 21,
    verseNumber: 45,
  },
  {
    chapterNumber: 21,
    verseNumber: 58,
  },
  {
    chapterNumber: 21,
    verseNumber: 73,
  },
  {
    chapterNumber: 21,
    verseNumber: 82,
  },
  {
    chapterNumber: 21,
    verseNumber: 91,
  },
  {
    chapterNumber: 21,
    verseNumber: 102,
  },
  {
    chapterNumber: 22,
    verseNumber: 1,
  },
  {
    chapterNumber: 22,
    verseNumber: 6,
  },
  {
    chapterNumber: 22,
    verseNumber: 16,
  },
  {
    chapterNumber: 22,
    verseNumber: 24,
  },
  {
    chapterNumber: 22,
    verseNumber: 31,
  },
  {
    chapterNumber: 22,
    verseNumber: 39,
  },
  {
    chapterNumber: 22,
    verseNumber: 47,
  },
  {
    chapterNumber: 22,
    verseNumber: 56,
  },
  {
    chapterNumber: 22,
    verseNumber: 65,
  },
  {
    chapterNumber: 22,
    verseNumber: 73,
  },
  {
    chapterNumber: 23,
    verseNumber: 1,
  },
  {
    chapterNumber: 23,
    verseNumber: 18,
  },
  {
    chapterNumber: 23,
    verseNumber: 28,
  },
  {
    chapterNumber: 23,
    verseNumber: 43,
  },
  {
    chapterNumber: 23,
    verseNumber: 60,
  },
  {
    chapterNumber: 23,
    verseNumber: 75,
  },
  {
    chapterNumber: 23,
    verseNumber: 90,
  },
  {
    chapterNumber: 23,
    verseNumber: 105,
  },
  {
    chapterNumber: 24,
    verseNumber: 1,
  },
  {
    chapterNumber: 24,
    verseNumber: 11,
  },
  {
    chapterNumber: 24,
    verseNumber: 21,
  },
  {
    chapterNumber: 24,
    verseNumber: 28,
  },
  {
    chapterNumber: 24,
    verseNumber: 32,
  },
  {
    chapterNumber: 24,
    verseNumber: 37,
  },
  {
    chapterNumber: 24,
    verseNumber: 44,
  },
  {
    chapterNumber: 24,
    verseNumber: 54,
  },
  {
    chapterNumber: 24,
    verseNumber: 59,
  },
  {
    chapterNumber: 24,
    verseNumber: 62,
  },
  {
    chapterNumber: 25,
    verseNumber: 3,
  },
  {
    chapterNumber: 25,
    verseNumber: 12,
  },
  {
    chapterNumber: 25,
    verseNumber: 21,
  },
  {
    chapterNumber: 25,
    verseNumber: 33,
  },
  {
    chapterNumber: 25,
    verseNumber: 44,
  },
  {
    chapterNumber: 25,
    verseNumber: 56,
  },
  {
    chapterNumber: 25,
    verseNumber: 68,
  },
  {
    chapterNumber: 26,
    verseNumber: 1,
  },
  {
    chapterNumber: 26,
    verseNumber: 20,
  },
  {
    chapterNumber: 26,
    verseNumber: 40,
  },
  {
    chapterNumber: 26,
    verseNumber: 61,
  },
  {
    chapterNumber: 26,
    verseNumber: 84,
  },
  {
    chapterNumber: 26,
    verseNumber: 112,
  },
  {
    chapterNumber: 26,
    verseNumber: 137,
  },
  {
    chapterNumber: 26,
    verseNumber: 160,
  },
  {
    chapterNumber: 26,
    verseNumber: 184,
  },
  {
    chapterNumber: 26,
    verseNumber: 207,
  },
  {
    chapterNumber: 27,
    verseNumber: 1,
  },
  {
    chapterNumber: 27,
    verseNumber: 14,
  },
  {
    chapterNumber: 27,
    verseNumber: 23,
  },
  {
    chapterNumber: 27,
    verseNumber: 36,
  },
  {
    chapterNumber: 27,
    verseNumber: 45,
  },
  {
    chapterNumber: 27,
    verseNumber: 56,
  },
  {
    chapterNumber: 27,
    verseNumber: 64,
  },
  {
    chapterNumber: 27,
    verseNumber: 77,
  },
  {
    chapterNumber: 27,
    verseNumber: 89,
  },
  {
    chapterNumber: 28,
    verseNumber: 6,
  },
  {
    chapterNumber: 28,
    verseNumber: 14,
  },
  {
    chapterNumber: 28,
    verseNumber: 22,
  },
  {
    chapterNumber: 28,
    verseNumber: 29,
  },
  {
    chapterNumber: 28,
    verseNumber: 36,
  },
  {
    chapterNumber: 28,
    verseNumber: 44,
  },
  {
    chapterNumber: 28,
    verseNumber: 51,
  },
  {
    chapterNumber: 28,
    verseNumber: 60,
  },
  {
    chapterNumber: 28,
    verseNumber: 71,
  },
  {
    chapterNumber: 28,
    verseNumber: 78,
  },
  {
    chapterNumber: 28,
    verseNumber: 85,
  },
  {
    chapterNumber: 29,
    verseNumber: 7,
  },
  {
    chapterNumber: 29,
    verseNumber: 15,
  },
  {
    chapterNumber: 29,
    verseNumber: 24,
  },
  {
    chapterNumber: 29,
    verseNumber: 31,
  },
  {
    chapterNumber: 29,
    verseNumber: 39,
  },
  {
    chapterNumber: 29,
    verseNumber: 46,
  },
  {
    chapterNumber: 29,
    verseNumber: 53,
  },
  {
    chapterNumber: 29,
    verseNumber: 64,
  },
  {
    chapterNumber: 30,
    verseNumber: 6,
  },
  {
    chapterNumber: 30,
    verseNumber: 16,
  },
  {
    chapterNumber: 30,
    verseNumber: 25,
  },
  {
    chapterNumber: 30,
    verseNumber: 33,
  },
  {
    chapterNumber: 30,
    verseNumber: 42,
  },
  {
    chapterNumber: 30,
    verseNumber: 51,
  },
  {
    chapterNumber: 31,
    verseNumber: 1,
  },
  {
    chapterNumber: 31,
    verseNumber: 12,
  },
  {
    chapterNumber: 31,
    verseNumber: 20,
  },
  {
    chapterNumber: 31,
    verseNumber: 29,
  },
  {
    chapterNumber: 32,
    verseNumber: 1,
  },
  {
    chapterNumber: 32,
    verseNumber: 12,
  },
  {
    chapterNumber: 32,
    verseNumber: 21,
  },
  {
    chapterNumber: 33,
    verseNumber: 1,
  },
  {
    chapterNumber: 33,
    verseNumber: 7,
  },
  {
    chapterNumber: 33,
    verseNumber: 16,
  },
  {
    chapterNumber: 33,
    verseNumber: 23,
  },
  {
    chapterNumber: 33,
    verseNumber: 31,
  },
  {
    chapterNumber: 33,
    verseNumber: 36,
  },
  {
    chapterNumber: 33,
    verseNumber: 44,
  },
  {
    chapterNumber: 33,
    verseNumber: 51,
  },
  {
    chapterNumber: 33,
    verseNumber: 55,
  },
  {
    chapterNumber: 33,
    verseNumber: 63,
  },
  {
    chapterNumber: 34,
    verseNumber: 1,
  },
  {
    chapterNumber: 34,
    verseNumber: 8,
  },
  {
    chapterNumber: 34,
    verseNumber: 15,
  },
  {
    chapterNumber: 34,
    verseNumber: 23,
  },
  {
    chapterNumber: 34,
    verseNumber: 32,
  },
  {
    chapterNumber: 34,
    verseNumber: 40,
  },
  {
    chapterNumber: 34,
    verseNumber: 49,
  },
  {
    chapterNumber: 35,
    verseNumber: 4,
  },
  {
    chapterNumber: 35,
    verseNumber: 12,
  },
  {
    chapterNumber: 35,
    verseNumber: 19,
  },
  {
    chapterNumber: 35,
    verseNumber: 31,
  },
  {
    chapterNumber: 35,
    verseNumber: 39,
  },
  {
    chapterNumber: 35,
    verseNumber: 45,
  },
  {
    chapterNumber: 36,
    verseNumber: 13,
  },
  {
    chapterNumber: 36,
    verseNumber: 28,
  },
  {
    chapterNumber: 36,
    verseNumber: 41,
  },
  {
    chapterNumber: 36,
    verseNumber: 55,
  },
  {
    chapterNumber: 36,
    verseNumber: 71,
  },
  {
    chapterNumber: 37,
    verseNumber: 1,
  },
  {
    chapterNumber: 37,
    verseNumber: 25,
  },
  {
    chapterNumber: 37,
    verseNumber: 52,
  },
  {
    chapterNumber: 37,
    verseNumber: 77,
  },
  {
    chapterNumber: 37,
    verseNumber: 103,
  },
  {
    chapterNumber: 37,
    verseNumber: 127,
  },
  {
    chapterNumber: 37,
    verseNumber: 154,
  },
  {
    chapterNumber: 38,
    verseNumber: 1,
  },
  {
    chapterNumber: 38,
    verseNumber: 17,
  },
  {
    chapterNumber: 38,
    verseNumber: 27,
  },
  {
    chapterNumber: 38,
    verseNumber: 43,
  },
  {
    chapterNumber: 38,
    verseNumber: 62,
  },
  {
    chapterNumber: 38,
    verseNumber: 84,
  },
  {
    chapterNumber: 39,
    verseNumber: 6,
  },
  {
    chapterNumber: 39,
    verseNumber: 11,
  },
  {
    chapterNumber: 39,
    verseNumber: 22,
  },
  {
    chapterNumber: 39,
    verseNumber: 32,
  },
  {
    chapterNumber: 39,
    verseNumber: 41,
  },
  {
    chapterNumber: 39,
    verseNumber: 48,
  },
  {
    chapterNumber: 39,
    verseNumber: 57,
  },
  {
    chapterNumber: 39,
    verseNumber: 68,
  },
  {
    chapterNumber: 39,
    verseNumber: 75,
  },
  {
    chapterNumber: 40,
    verseNumber: 8,
  },
  {
    chapterNumber: 40,
    verseNumber: 17,
  },
  {
    chapterNumber: 40,
    verseNumber: 26,
  },
  {
    chapterNumber: 40,
    verseNumber: 34,
  },
  {
    chapterNumber: 40,
    verseNumber: 41,
  },
  {
    chapterNumber: 40,
    verseNumber: 50,
  },
  {
    chapterNumber: 40,
    verseNumber: 59,
  },
  {
    chapterNumber: 40,
    verseNumber: 67,
  },
  {
    chapterNumber: 40,
    verseNumber: 78,
  },
  {
    chapterNumber: 41,
    verseNumber: 1,
  },
  {
    chapterNumber: 41,
    verseNumber: 12,
  },
  {
    chapterNumber: 41,
    verseNumber: 21,
  },
  {
    chapterNumber: 41,
    verseNumber: 30,
  },
  {
    chapterNumber: 41,
    verseNumber: 39,
  },
  {
    chapterNumber: 41,
    verseNumber: 47,
  },
  {
    chapterNumber: 42,
    verseNumber: 1,
  },
  {
    chapterNumber: 42,
    verseNumber: 11,
  },
  {
    chapterNumber: 42,
    verseNumber: 16,
  },
  {
    chapterNumber: 42,
    verseNumber: 23,
  },
  {
    chapterNumber: 42,
    verseNumber: 32,
  },
  {
    chapterNumber: 42,
    verseNumber: 45,
  },
  {
    chapterNumber: 42,
    verseNumber: 52,
  },
  {
    chapterNumber: 43,
    verseNumber: 11,
  },
  {
    chapterNumber: 43,
    verseNumber: 23,
  },
  {
    chapterNumber: 43,
    verseNumber: 34,
  },
  {
    chapterNumber: 43,
    verseNumber: 48,
  },
  {
    chapterNumber: 43,
    verseNumber: 61,
  },
  {
    chapterNumber: 43,
    verseNumber: 74,
  },
  {
    chapterNumber: 44,
    verseNumber: 1,
  },
  {
    chapterNumber: 44,
    verseNumber: 19,
  },
  {
    chapterNumber: 44,
    verseNumber: 40,
  },
  {
    chapterNumber: 45,
    verseNumber: 1,
  },
  {
    chapterNumber: 45,
    verseNumber: 14,
  },
  {
    chapterNumber: 45,
    verseNumber: 23,
  },
  {
    chapterNumber: 45,
    verseNumber: 33,
  },
  {
    chapterNumber: 46,
    verseNumber: 6,
  },
  {
    chapterNumber: 46,
    verseNumber: 15,
  },
  {
    chapterNumber: 46,
    verseNumber: 21,
  },
  {
    chapterNumber: 46,
    verseNumber: 29,
  },
  {
    chapterNumber: 47,
    verseNumber: 1,
  },
  {
    chapterNumber: 47,
    verseNumber: 12,
  },
  {
    chapterNumber: 47,
    verseNumber: 20,
  },
  {
    chapterNumber: 47,
    verseNumber: 30,
  },
  {
    chapterNumber: 48,
    verseNumber: 1,
  },
  {
    chapterNumber: 48,
    verseNumber: 10,
  },
  {
    chapterNumber: 48,
    verseNumber: 16,
  },
  {
    chapterNumber: 48,
    verseNumber: 24,
  },
  {
    chapterNumber: 48,
    verseNumber: 29,
  },
  {
    chapterNumber: 49,
    verseNumber: 5,
  },
  {
    chapterNumber: 49,
    verseNumber: 12,
  },
  {
    chapterNumber: 50,
    verseNumber: 1,
  },
  {
    chapterNumber: 50,
    verseNumber: 16,
  },
  {
    chapterNumber: 50,
    verseNumber: 36,
  },
  {
    chapterNumber: 51,
    verseNumber: 7,
  },
  {
    chapterNumber: 51,
    verseNumber: 31,
  },
  {
    chapterNumber: 51,
    verseNumber: 52,
  },
  {
    chapterNumber: 52,
    verseNumber: 15,
  },
  {
    chapterNumber: 52,
    verseNumber: 32,
  },
  {
    chapterNumber: 53,
    verseNumber: 1,
  },
  {
    chapterNumber: 53,
    verseNumber: 27,
  },
  {
    chapterNumber: 53,
    verseNumber: 45,
  },
  {
    chapterNumber: 54,
    verseNumber: 7,
  },
  {
    chapterNumber: 54,
    verseNumber: 28,
  },
  {
    chapterNumber: 54,
    verseNumber: 50,
  },
  {
    chapterNumber: 55,
    verseNumber: 17,
  },
  {
    chapterNumber: 55,
    verseNumber: 41,
  },
  {
    chapterNumber: 55,
    verseNumber: 68,
  },
  {
    chapterNumber: 56,
    verseNumber: 17,
  },
  {
    chapterNumber: 56,
    verseNumber: 51,
  },
  {
    chapterNumber: 56,
    verseNumber: 77,
  },
  {
    chapterNumber: 57,
    verseNumber: 4,
  },
  {
    chapterNumber: 57,
    verseNumber: 12,
  },
  {
    chapterNumber: 57,
    verseNumber: 19,
  },
  {
    chapterNumber: 57,
    verseNumber: 25,
  },
  {
    chapterNumber: 58,
    verseNumber: 1,
  },
  {
    chapterNumber: 58,
    verseNumber: 7,
  },
  {
    chapterNumber: 58,
    verseNumber: 12,
  },
  {
    chapterNumber: 58,
    verseNumber: 22,
  },
  {
    chapterNumber: 59,
    verseNumber: 4,
  },
  {
    chapterNumber: 59,
    verseNumber: 10,
  },
  {
    chapterNumber: 59,
    verseNumber: 17,
  },
  {
    chapterNumber: 60,
    verseNumber: 1,
  },
  {
    chapterNumber: 60,
    verseNumber: 6,
  },
  {
    chapterNumber: 60,
    verseNumber: 12,
  },
  {
    chapterNumber: 61,
    verseNumber: 6,
  },
  {
    chapterNumber: 62,
    verseNumber: 1,
  },
  {
    chapterNumber: 62,
    verseNumber: 9,
  },
  {
    chapterNumber: 63,
    verseNumber: 5,
  },
  {
    chapterNumber: 64,
    verseNumber: 1,
  },
  {
    chapterNumber: 64,
    verseNumber: 10,
  },
  {
    chapterNumber: 65,
    verseNumber: 1,
  },
  {
    chapterNumber: 65,
    verseNumber: 6,
  },
  {
    chapterNumber: 66,
    verseNumber: 1,
  },
  {
    chapterNumber: 66,
    verseNumber: 8,
  },
  {
    chapterNumber: 67,
    verseNumber: 1,
  },
  {
    chapterNumber: 67,
    verseNumber: 13,
  },
  {
    chapterNumber: 67,
    verseNumber: 27,
  },
  {
    chapterNumber: 68,
    verseNumber: 16,
  },
  {
    chapterNumber: 68,
    verseNumber: 43,
  },
  {
    chapterNumber: 69,
    verseNumber: 9,
  },
  {
    chapterNumber: 69,
    verseNumber: 35,
  },
  {
    chapterNumber: 70,
    verseNumber: 11,
  },
  {
    chapterNumber: 70,
    verseNumber: 40,
  },
  {
    chapterNumber: 71,
    verseNumber: 11,
  },
  {
    chapterNumber: 72,
    verseNumber: 1,
  },
  {
    chapterNumber: 72,
    verseNumber: 14,
  },
  {
    chapterNumber: 73,
    verseNumber: 1,
  },
  {
    chapterNumber: 73,
    verseNumber: 20,
  },
  {
    chapterNumber: 74,
    verseNumber: 18,
  },
  {
    chapterNumber: 74,
    verseNumber: 48,
  },
  {
    chapterNumber: 75,
    verseNumber: 20,
  },
  {
    chapterNumber: 76,
    verseNumber: 6,
  },
  {
    chapterNumber: 76,
    verseNumber: 26,
  },
  {
    chapterNumber: 77,
    verseNumber: 20,
  },
  {
    chapterNumber: 78,
    verseNumber: 1,
  },
  {
    chapterNumber: 78,
    verseNumber: 31,
  },
  {
    chapterNumber: 79,
    verseNumber: 16,
  },
  {
    chapterNumber: 80,
    verseNumber: 1,
  },
  {
    chapterNumber: 81,
    verseNumber: 1,
  },
  {
    chapterNumber: 82,
    verseNumber: 1,
  },
  {
    chapterNumber: 83,
    verseNumber: 7,
  },
  {
    chapterNumber: 83,
    verseNumber: 35,
  },
  {
    chapterNumber: 85,
    verseNumber: 1,
  },
  {
    chapterNumber: 86,
    verseNumber: 1,
  },
  {
    chapterNumber: 87,
    verseNumber: 16,
  },
  {
    chapterNumber: 89,
    verseNumber: 1,
  },
  {
    chapterNumber: 89,
    verseNumber: 24,
  },
  {
    chapterNumber: 91,
    verseNumber: 1,
  },
  {
    chapterNumber: 92,
    verseNumber: 15,
  },
  {
    chapterNumber: 95,
    verseNumber: 1,
  },
  {
    chapterNumber: 97,
    verseNumber: 1,
  },
  {
    chapterNumber: 98,
    verseNumber: 8,
  },
  {
    chapterNumber: 100,
    verseNumber: 10,
  },
  {
    chapterNumber: 103,
    verseNumber: 1,
  },
  {
    chapterNumber: 106,
    verseNumber: 1,
  },
  {
    chapterNumber: 109,
    verseNumber: 1,
  },
  {
    chapterNumber: 112,
    verseNumber: 1,
  },
];

export class CPage {
  public static getPageNumberForAyah(
    chapterToFind: number,
    verseToFind: number
  ) {
    let pageNumber = 0;
    if (chapterToFind === 0 || verseToFind === 0) {
      return pageNumber;
    }

    for (let i = PAGE_INFO.length - 1; i > 0; i--) {
      const { chapterNumber, verseNumber } = PAGE_INFO[i];

      if (chapterToFind > chapterNumber) {
        return i + 1;
      }
      if (chapterToFind === chapterNumber) {
        if (verseToFind >= verseNumber) {
          return i + 1;
        }
      }
    }
    return 1;
  }
  public static getLineData(pageData: IPageData): Array<Array<IArabicWord>> {
    const lineData: { [key in string]: Array<IArabicWord> } = {};
    pageData.ayahs.forEach((ayahData) => {
      ayahData.words.forEach((word) => {
        const lineNumber = word.lineNumber;
        if (!lineData[lineNumber]) {
          lineData[lineNumber] = [];
        }
        lineData[lineNumber].push(word);
      });
    });
    const res = Object.keys(lineData).map((lineNumber) => lineData[lineNumber]);
    return res;
  }
}
