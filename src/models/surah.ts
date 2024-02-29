import { IAyah } from "./ayah-info-interface";

export interface ISurah {
  surahNumber: number;
  data: Array<IAyah>;
}

export interface ISurahInfo {
  surahNumber: number;
  arabicName: string;
  englishName: string;
  placeOfRevelation: string;
  versesCount: number;
  englishTranslatedName: string;
  audioFile: {
    [key in string]: string;
  };
}

export const SURAHS_INFO: Array<ISurahInfo> = [
  {
    surahNumber: 1,
    arabicName: "ٱلْفَاتِحَة",
    englishName: "al-Fātiḥah",
    placeOfRevelation: "Makkah",
    versesCount: 7,
    englishTranslatedName: "The Opener",
    audioFile: {
      "Sameer Nass": "1-سورة الفاتحة.mp3",
    },
  },
  {
    surahNumber: 2,
    arabicName: "ٱلْبَقَرَة",
    englishName: "al-Baq̈arah",
    placeOfRevelation: "Madeenah",
    versesCount: 286,
    englishTranslatedName: "The Cow",
    audioFile: {
      "Sameer Nass": "2-سورة البقرة.mp3",
    },
  },
  {
    surahNumber: 3,
    arabicName: "آلِ عِمْرَان",
    englishName: "ʾĀli ʿImrān",
    placeOfRevelation: "Madeenah",
    versesCount: 200,
    englishTranslatedName: "Family of Imran",
    audioFile: {
      "Sameer Nass": "3-سورة آل عمران.mp3",
    },
  },
  {
    surahNumber: 4,
    arabicName: "ٱلنِّسَاء",
    englishName: "an-Nisāʾ",
    placeOfRevelation: "Madeenah",
    versesCount: 176,
    englishTranslatedName: "The Women",
    audioFile: {
      "Sameer Nass": "4-سورة النساء.mp3",
    },
  },
  {
    surahNumber: 5,
    arabicName: "ٱلْمَائِدَة",
    englishName: "al-Māʾidah",
    placeOfRevelation: "Madeenah",
    versesCount: 120,
    englishTranslatedName: "The Table Spread",
    audioFile: {
      "Sameer Nass": "5-سورة المائدة.mp3",
    },
  },
  {
    surahNumber: 6,
    arabicName: "ٱلْأَنْعَام",
    englishName: "al-ʾAnʿām",
    placeOfRevelation: "Makkah",
    versesCount: 165,
    englishTranslatedName: "The Cattle",
    audioFile: {
      "Sameer Nass": "6-سورة الأنعام.mp3",
    },
  },
  {
    surahNumber: 7,
    arabicName: "ٱلْأَعْرَاف",
    englishName: "al-ʾAʿrāf",
    placeOfRevelation: "Makkah",
    versesCount: 206,
    englishTranslatedName: "The Heights",
    audioFile: {
      "Sameer Nass": "7-سورة الأعراف.mp3",
    },
  },
  {
    surahNumber: 8,
    arabicName: "ٱلْأَنْفَال",
    englishName: "al-ʾAnfāl",
    placeOfRevelation: "Madeenah",
    versesCount: 75,
    englishTranslatedName: "The Spoils of War",
    audioFile: {
      "Sameer Nass": "8-سورة الأنفال.mp3",
    },
  },
  {
    surahNumber: 9,
    arabicName: "ٱلتَّوْبَة",
    englishName: "at-Tawbah",
    placeOfRevelation: "Madeenah",
    versesCount: 129,
    englishTranslatedName: "The Repentance",
    audioFile: {
      "Sameer Nass": "9-سورة التوبة.mp3",
    },
  },
  {
    surahNumber: 10,
    arabicName: "يُونُس",
    englishName: "Yūnus",
    placeOfRevelation: "Makkah",
    versesCount: 109,
    englishTranslatedName: "Jonah",
    audioFile: {
      "Sameer Nass": "10-سورة يونس.mp3",
    },
  },
  {
    surahNumber: 11,
    arabicName: "هُود",
    englishName: "Hūd",
    placeOfRevelation: "Makkah",
    versesCount: 123,
    englishTranslatedName: "Hud",
    audioFile: {
      "Sameer Nass": "11-سورة هود.mp3",
    },
  },
  {
    surahNumber: 12,
    arabicName: "يُوسُف",
    englishName: "Yūsuf",
    placeOfRevelation: "Makkah",
    versesCount: 111,
    englishTranslatedName: "Joseph",
    audioFile: {
      "Sameer Nass": "12-سورة يوسف.mp3",
    },
  },
  {
    surahNumber: 13,
    arabicName: "ٱلرَّعْد",
    englishName: "ar-Raʿd",
    placeOfRevelation: "Madeenah",
    versesCount: 43,
    englishTranslatedName: "The Thunder",
    audioFile: {
      "Sameer Nass": "13-سورة الرعد.mp3",
    },
  },
  {
    surahNumber: 14,
    arabicName: "إِبْرَاهِيم",
    englishName: "ʾIbrāhīm",
    placeOfRevelation: "Makkah",
    versesCount: 52,
    englishTranslatedName: "Abraham",
    audioFile: {
      "Sameer Nass": "14-سورة ابراهيم.mp3",
    },
  },
  {
    surahNumber: 15,
    arabicName: "ٱلْحِجْر",
    englishName: "al-Ḥijr",
    placeOfRevelation: "Makkah",
    versesCount: 99,
    englishTranslatedName: "The Rocky Tract",
    audioFile: {
      "Sameer Nass": "15-سورة الحجر.mp3",
    },
  },
  {
    surahNumber: 16,
    arabicName: "ٱلنَّحْل",
    englishName: "an-Naḥl",
    placeOfRevelation: "Makkah",
    versesCount: 128,
    englishTranslatedName: "The Bee",
    audioFile: {
      "Sameer Nass": "16-سورة النحل.mp3",
    },
  },
  {
    surahNumber: 17,
    arabicName: "ٱلْإِسْرَاء",
    englishName: "al-ʾIsrāʾ",
    placeOfRevelation: "Makkah",
    versesCount: 111,
    englishTranslatedName: "The Night Journey",
    audioFile: {
      "Sameer Nass": "17-سورة الإسراء.mp3",
    },
  },
  {
    surahNumber: 18,
    arabicName: "ٱلْكَهْف",
    englishName: "al-Kahf",
    placeOfRevelation: "Makkah",
    versesCount: 110,
    englishTranslatedName: "The Cave",
    audioFile: {
      "Sameer Nass": "18-سورة الكهف.mp3",
    },
  },
  {
    surahNumber: 19,
    arabicName: "مَرْيَم",
    englishName: "Maryam",
    placeOfRevelation: "Makkah",
    versesCount: 98,
    englishTranslatedName: "Mary",
    audioFile: {
      "Sameer Nass": "19-سورة مريم.mp3",
    },
  },
  {
    surahNumber: 20,
    arabicName: "طه",
    englishName: "Ṭāʾ Hāʾ",
    placeOfRevelation: "Makkah",
    versesCount: 135,
    englishTranslatedName: "Ta-Ha",
    audioFile: {
      "Sameer Nass": "20-سورة طه.mp3",
    },
  },
  {
    surahNumber: 21,
    arabicName: "ٱلْأَنْبِيَاء",
    englishName: "al-ʾAnbiyāʾ",
    placeOfRevelation: "Makkah",
    versesCount: 112,
    englishTranslatedName: "The Prophets",
    audioFile: {
      "Sameer Nass": "21-سورة الأنبياء.mp3",
    },
  },
  {
    surahNumber: 22,
    arabicName: "ٱلْحَجّ",
    englishName: "al-Ḥajj",
    placeOfRevelation: "Madeenah",
    versesCount: 78,
    englishTranslatedName: "The Pilgrimage",
    audioFile: {
      "Sameer Nass": "22-سورة الحج.mp3",
    },
  },
  {
    surahNumber: 23,
    arabicName: "ٱلْمُؤْمِنُون",
    englishName: "al-Muʾminūn",
    placeOfRevelation: "Makkah",
    versesCount: 118,
    englishTranslatedName: "The Believers",
    audioFile: {
      "Sameer Nass": "23-سورة المؤمنون.mp3",
    },
  },
  {
    surahNumber: 24,
    arabicName: "ٱلنُّور",
    englishName: "an-Nūr",
    placeOfRevelation: "Madeenah",
    versesCount: 64,
    englishTranslatedName: "The Light",
    audioFile: {
      "Sameer Nass": "24-سورة النور.mp3",
    },
  },
  {
    surahNumber: 25,
    arabicName: "ٱلْفُرْقَان",
    englishName: "al-Furq̈ān",
    placeOfRevelation: "Makkah",
    versesCount: 77,
    englishTranslatedName: "The Criterion",
    audioFile: {
      "Sameer Nass": "25-سورة الفرقان.mp3",
    },
  },
  {
    surahNumber: 26,
    arabicName: "ٱلشُّعَرَاء",
    englishName: "aš-Šuʿarāʾ",
    placeOfRevelation: "Makkah",
    versesCount: 227,
    englishTranslatedName: "The Poets",
    audioFile: {
      "Sameer Nass": "26-سورة الشعراء.mp3",
    },
  },
  {
    surahNumber: 27,
    arabicName: "ٱلنَّمْل",
    englishName: "an-Naml",
    placeOfRevelation: "Makkah",
    versesCount: 93,
    englishTranslatedName: "The Ant",
    audioFile: {
      "Sameer Nass": "27-سورة النمل.mp3",
    },
  },
  {
    surahNumber: 28,
    arabicName: "ٱلْقَصَص",
    englishName: "al-Q̈aṣaṣ",
    placeOfRevelation: "Makkah",
    versesCount: 88,
    englishTranslatedName: "The Stories",
    audioFile: {
      "Sameer Nass": "28-سورة القصص.mp3",
    },
  },
  {
    surahNumber: 29,
    arabicName: "ٱلْعَنْكَبُوت",
    englishName: "al-ʿAnkabūt",
    placeOfRevelation: "Makkah",
    versesCount: 69,
    englishTranslatedName: "The Spider",
    audioFile: {
      "Sameer Nass": "29-سورة العنكبوت.mp3",
    },
  },
  {
    surahNumber: 30,
    arabicName: "ٱلرُّوم",
    englishName: "ar-Rūm",
    placeOfRevelation: "Makkah",
    versesCount: 60,
    englishTranslatedName: "The Romans",
    audioFile: {
      "Sameer Nass": "30-سورة الروم.mp3",
    },
  },
  {
    surahNumber: 31,
    arabicName: "لُقْمَان",
    englishName: "Luq̈mān ",
    placeOfRevelation: "Makkah",
    versesCount: 34,
    englishTranslatedName: "Luqman",
    audioFile: {
      "Sameer Nass": "31-سورة لقمان.mp3",
    },
  },
  {
    surahNumber: 32,
    arabicName: "ٱلسَّجْدَة",
    englishName: "as-Sajdah",
    placeOfRevelation: "Makkah",
    versesCount: 30,
    englishTranslatedName: "The Prostration",
    audioFile: {
      "Sameer Nass": "32-سورة السجدة.mp3",
    },
  },
  {
    surahNumber: 33,
    arabicName: "ٱلْأَحْزَاب",
    englishName: "al-ʾAḥzāb",
    placeOfRevelation: "Madeenah",
    versesCount: 73,
    englishTranslatedName: "The Combined Forces",
    audioFile: {
      "Sameer Nass": "33-سورة الأحزاب.mp3",
    },
  },
  {
    surahNumber: 34,
    arabicName: "سَبَأ",
    englishName: "Sabaʾ",
    placeOfRevelation: "Makkah",
    versesCount: 54,
    englishTranslatedName: "Sheba",
    audioFile: {
      "Sameer Nass": "34-سورة سبأ.mp3",
    },
  },
  {
    surahNumber: 35,
    arabicName: "فَاطِر",
    englishName: "Fāṭir",
    placeOfRevelation: "Makkah",
    versesCount: 45,
    englishTranslatedName: "Originator",
    audioFile: {
      "Sameer Nass": "35-سورة فاطر.mp3",
    },
  },
  {
    surahNumber: 36,
    arabicName: "يس",
    englishName: "Yāʾ Sīn",
    placeOfRevelation: "Makkah",
    versesCount: 83,
    englishTranslatedName: "Ya Sin",
    audioFile: {
      "Sameer Nass": "36-سورة يس.mp3",
    },
  },
  {
    surahNumber: 37,
    arabicName: "ٱلصَّافَّات",
    englishName: "aṣ-Ṣāffāt",
    placeOfRevelation: "Makkah",
    versesCount: 182,
    englishTranslatedName: "Those who set the Ranks",
    audioFile: {
      "Sameer Nass": "37-سورة الصافات.mp3",
    },
  },
  {
    surahNumber: 38,
    arabicName: "ص",
    englishName: "Ṣād",
    placeOfRevelation: "Makkah",
    versesCount: 88,
    englishTranslatedName: 'The Letter "Saad"',
    audioFile: {
      "Sameer Nass": "38-سورة ص.mp3",
    },
  },
  {
    surahNumber: 39,
    arabicName: "ٱلزُّمَر",
    englishName: "az-Zumar",
    placeOfRevelation: "Makkah",
    versesCount: 75,
    englishTranslatedName: "The Troops",
    audioFile: {
      "Sameer Nass": "39-سورة الزمر.mp3",
    },
  },
  {
    surahNumber: 40,
    arabicName: "غَافِر",
    englishName: "Ghafir",
    placeOfRevelation: "Makkah",
    versesCount: 85,
    englishTranslatedName: "The Forgiver",
    audioFile: {
      "Sameer Nass": "40-سورة غافر.mp3",
    },
  },
  {
    surahNumber: 41,
    arabicName: "فُصِّلَت",
    englishName: "Fuṣṣilat",
    placeOfRevelation: "Makkah",
    versesCount: 54,
    englishTranslatedName: "Explained in Detail",
    audioFile: {
      "Sameer Nass": "41-سورة فصلت.mp3",
    },
  },
  {
    surahNumber: 42,
    arabicName: "ٱلشُّورىٰ",
    englishName: "aš-Šūrā",
    placeOfRevelation: "Makkah",
    versesCount: 53,
    englishTranslatedName: "The Consultation",
    audioFile: {
      "Sameer Nass": "42-سورة الشورى.mp3",
    },
  },
  {
    surahNumber: 43,
    arabicName: "ٱلْزُّخْرُف",
    englishName: "az-Zukhruf",
    placeOfRevelation: "Makkah",
    versesCount: 89,
    englishTranslatedName: "The Ornaments of Gold",
    audioFile: {
      "Sameer Nass": "43-سورة الزخرف.mp3",
    },
  },
  {
    surahNumber: 44,
    arabicName: "ٱلدُّخَان",
    englishName: "ad-Dukhān",
    placeOfRevelation: "Makkah",
    versesCount: 59,
    englishTranslatedName: "The Smoke",
    audioFile: {
      "Sameer Nass": "44-سورة الدخان.mp3",
    },
  },
  {
    surahNumber: 45,
    arabicName: "ٱلْجَاثِيَة",
    englishName: "al-Jāthiyah",
    placeOfRevelation: "Makkah",
    versesCount: 37,
    englishTranslatedName: "The Crouching",
    audioFile: {
      "Sameer Nass": "45-سورة الجاثية.mp3",
    },
  },
  {
    surahNumber: 46,
    arabicName: "ٱلْأَحْقَاف",
    englishName: "al-ʾAḥq̈āf",
    placeOfRevelation: "Makkah",
    versesCount: 35,
    englishTranslatedName: "The Wind-Curved Sandhills",
    audioFile: {
      "Sameer Nass": "46-سورة الأحقاف.mp3",
    },
  },
  {
    surahNumber: 47,
    arabicName: "مُحَمَّد",
    englishName: "Muḥammad",
    placeOfRevelation: "Madeenah",
    versesCount: 38,
    englishTranslatedName: "Muhammad",
    audioFile: {
      "Sameer Nass": "47-سورة سيدنا محمد ﷺ.mp3",
    },
  },
  {
    surahNumber: 48,
    arabicName: "ٱلْفَتْح",
    englishName: "al-Fatḥ",
    placeOfRevelation: "Madeenah",
    versesCount: 29,
    englishTranslatedName: "The Victory",
    audioFile: {
      "Sameer Nass": "48-سورة الفتح.mp3",
    },
  },
  {
    surahNumber: 49,
    arabicName: "ٱلْحُجُرَات",
    englishName: "al-Ḥujurāt",
    placeOfRevelation: "Madeenah",
    versesCount: 18,
    englishTranslatedName: "The Rooms",
    audioFile: {
      "Sameer Nass": "49-سورة الحجرات.mp3",
    },
  },
  {
    surahNumber: 50,
    arabicName: "ق",
    englishName: "Q̈āf",
    placeOfRevelation: "Makkah",
    versesCount: 45,
    englishTranslatedName: 'The Letter "Qaf"',
    audioFile: {
      "Sameer Nass": "50-سورة ق.mp3",
    },
  },
  {
    surahNumber: 51,
    arabicName: "ٱلذَّارِيَات",
    englishName: "aḏ-Ḏāriyāt",
    placeOfRevelation: "Makkah",
    versesCount: 60,
    englishTranslatedName: "The Winnowing Winds",
    audioFile: {
      "Sameer Nass": "51-سورة الذاريات.mp3",
    },
  },
  {
    surahNumber: 52,
    arabicName: "ٱلطُّور",
    englishName: "aṭ-Ṭūr",
    placeOfRevelation: "Makkah",
    versesCount: 49,
    englishTranslatedName: "The Mount",
    audioFile: {
      "Sameer Nass": "52-سورة الطور.mp3",
    },
  },
  {
    surahNumber: 53,
    arabicName: "ٱلنَّجْم",
    englishName: "an-Najm",
    placeOfRevelation: "Makkah",
    versesCount: 62,
    englishTranslatedName: "The Star",
    audioFile: {
      "Sameer Nass": "53-سورة النجم.mp3",
    },
  },
  {
    surahNumber: 54,
    arabicName: "ٱلْقَمَر",
    englishName: "al-Q̈amar",
    placeOfRevelation: "Makkah",
    versesCount: 55,
    englishTranslatedName: "The Moon",
    audioFile: {
      "Sameer Nass": "54-سورة القمر.mp3",
    },
  },
  {
    surahNumber: 55,
    arabicName: "ٱلرَّحْمَٰن",
    englishName: "ar-Raḥmān",
    placeOfRevelation: "Madeenah",
    versesCount: 78,
    englishTranslatedName: "The Beneficent",
    audioFile: {
      "Sameer Nass": "55-سورة الرحمن.mp3",
    },
  },
  {
    surahNumber: 56,
    arabicName: "ٱلْوَاقِعَة",
    englishName: "al-Wāqiʿah",
    placeOfRevelation: "Makkah",
    versesCount: 96,
    englishTranslatedName: "The Inevitable",
    audioFile: {
      "Sameer Nass": "56-سورة الواقعة.mp3",
    },
  },
  {
    surahNumber: 57,
    arabicName: "ٱلْحَدِيد",
    englishName: "al-Ḥadīd",
    placeOfRevelation: "Madeenah",
    versesCount: 29,
    englishTranslatedName: "The Iron",
    audioFile: {
      "Sameer Nass": "57-سورة الحديد.mp3",
    },
  },
  {
    surahNumber: 58,
    arabicName: "ٱلْمُجَادِلَة",
    englishName: "al-Mujādilah",
    placeOfRevelation: "Madeenah",
    versesCount: 22,
    englishTranslatedName: "The Pleading Woman",
    audioFile: {
      "Sameer Nass": "58-سورة المجادلة.mp3",
    },
  },
  {
    surahNumber: 59,
    arabicName: "ٱلْحَشْر",
    englishName: "al-Ḥašr",
    placeOfRevelation: "Madeenah",
    versesCount: 24,
    englishTranslatedName: "The Exile",
    audioFile: {
      "Sameer Nass": "59-سورة الحشر.mp3",
    },
  },
  {
    surahNumber: 60,
    arabicName: "ٱلْمُمْتَحَنَة",
    englishName: "al-Mumtaḥanah",
    placeOfRevelation: "Madeenah",
    versesCount: 13,
    englishTranslatedName: "She that is to be examined",
    audioFile: {
      "Sameer Nass": "60-سورة الممتحنة.mp3",
    },
  },
  {
    surahNumber: 61,
    arabicName: "ٱلصَّفّ",
    englishName: "aṣ-Ṣaff",
    placeOfRevelation: "Madeenah",
    versesCount: 14,
    englishTranslatedName: "The Ranks",
    audioFile: {
      "Sameer Nass": "61-سورة الصف.mp3",
    },
  },
  {
    surahNumber: 62,
    arabicName: "ٱلْجُمُعَة",
    englishName: "al-Jumuʿah",
    placeOfRevelation: "Madeenah",
    versesCount: 11,
    englishTranslatedName: "The Congregation, Friday",
    audioFile: {
      "Sameer Nass": "62-سورة الجمعة.mp3",
    },
  },
  {
    surahNumber: 63,
    arabicName: "ٱلْمُنَافِقُون",
    englishName: "al-Munāfiq̈ūn",
    placeOfRevelation: "Madeenah",
    versesCount: 11,
    englishTranslatedName: "The Hypocrites",
    audioFile: {
      "Sameer Nass": "63-سورة المنافقون.mp3",
    },
  },
  {
    surahNumber: 64,
    arabicName: "ٱلتَّغَابُن",
    englishName: "at-Taghābun",
    placeOfRevelation: "Madeenah",
    versesCount: 18,
    englishTranslatedName: "The Mutual Disillusion",
    audioFile: {
      "Sameer Nass": "64-سورة التغابن.mp3",
    },
  },
  {
    surahNumber: 65,
    arabicName: "ٱلطَّلَاق",
    englishName: "aṭ-Ṭalāq̈",
    placeOfRevelation: "Madeenah",
    versesCount: 12,
    englishTranslatedName: "The Divorce",
    audioFile: {
      "Sameer Nass": "65-سورة الطلاق.mp3",
    },
  },
  {
    surahNumber: 66,
    arabicName: "ٱلتَّحْرِيم",
    englishName: "at-Taḥrīm",
    placeOfRevelation: "Madeenah",
    versesCount: 12,
    englishTranslatedName: "The Prohibition",
    audioFile: {
      "Sameer Nass": "66-سورة التحريم.mp3",
    },
  },
  {
    surahNumber: 67,
    arabicName: "ٱلْمُلْك",
    englishName: "al-Mulk",
    placeOfRevelation: "Makkah",
    versesCount: 30,
    englishTranslatedName: "The Sovereignty",
    audioFile: {
      "Sameer Nass": "67-سورة الملك.mp3",
    },
  },
  {
    surahNumber: 68,
    arabicName: "ٱلْقَلَم",
    englishName: "al-Q̈alam",
    placeOfRevelation: "Makkah",
    versesCount: 52,
    englishTranslatedName: "The Pen",
    audioFile: {
      "Sameer Nass": "68-سورة القلم.mp3",
    },
  },
  {
    surahNumber: 69,
    arabicName: "ٱلْحَاقَّة",
    englishName: "al-Ḥāq̈q̈ah",
    placeOfRevelation: "Makkah",
    versesCount: 52,
    englishTranslatedName: "The Reality",
    audioFile: {
      "Sameer Nass": "69-سورة الحاقة.mp3",
    },
  },
  {
    surahNumber: 70,
    arabicName: "ٱلْمَعَارِج",
    englishName: "al-Maʿārij",
    placeOfRevelation: "Makkah",
    versesCount: 44,
    englishTranslatedName: "The Ascending Stairways",
    audioFile: {
      "Sameer Nass": "70-سورة المعارج.mp3",
    },
  },
  {
    surahNumber: 71,
    arabicName: "نُوح",
    englishName: "Nūḥ",
    placeOfRevelation: "Makkah",
    versesCount: 28,
    englishTranslatedName: "Noah",
    audioFile: {
      "Sameer Nass": "71-سورة نوح.mp3",
    },
  },
  {
    surahNumber: 72,
    arabicName: "ٱلْجِنّ",
    englishName: "al-Jinn",
    placeOfRevelation: "Makkah",
    versesCount: 28,
    englishTranslatedName: "The Jinn",
    audioFile: {
      "Sameer Nass": "72-سورة الجن.mp3",
    },
  },
  {
    surahNumber: 73,
    arabicName: "ٱلْمُزَّمِّل",
    englishName: "al-Muzzammil",
    placeOfRevelation: "Makkah",
    versesCount: 20,
    englishTranslatedName: "The Enshrouded One",
    audioFile: {
      "Sameer Nass": "73-سورة المزمل.mp3",
    },
  },
  {
    surahNumber: 74,
    arabicName: "ٱلْمُدَّثِّر",
    englishName: "al-Muddathir",
    placeOfRevelation: "Makkah",
    versesCount: 56,
    englishTranslatedName: "The Cloaked One",
    audioFile: {
      "Sameer Nass": "74-سورة المدثر.mp3",
    },
  },
  {
    surahNumber: 75,
    arabicName: "ٱلْقِيَامَة",
    englishName: "al-Q̈iyamah",
    placeOfRevelation: "Makkah",
    versesCount: 40,
    englishTranslatedName: "The Resurrection",
    audioFile: {
      "Sameer Nass": "75-سورة القيامة.mp3",
    },
  },
  {
    surahNumber: 76,
    arabicName: "ٱلْإِنْسَان",
    englishName: "al-ʾInsān",
    placeOfRevelation: "Madeenah",
    versesCount: 31,
    englishTranslatedName: "The Man",
    audioFile: {
      "Sameer Nass": "76-سورة الإنسان.mp3",
    },
  },
  {
    surahNumber: 77,
    arabicName: "ٱلْمُرْسَلَات",
    englishName: "al-Mursalāt",
    placeOfRevelation: "Makkah",
    versesCount: 50,
    englishTranslatedName: "The Emissaries",
    audioFile: {
      "Sameer Nass": "77-سورة المرسلات.mp3",
    },
  },
  {
    surahNumber: 78,
    arabicName: "ٱلنَّبَأ",
    englishName: "an-Nabaʾ",
    placeOfRevelation: "Makkah",
    versesCount: 40,
    englishTranslatedName: "The Tidings",
    audioFile: {
      "Sameer Nass": "78-سورة النبأ.mp3",
    },
  },
  {
    surahNumber: 79,
    arabicName: "ٱلنَّازِعَات",
    englishName: "an-Nāziʿāt",
    placeOfRevelation: "Makkah",
    versesCount: 46,
    englishTranslatedName: "Those who drag forth",
    audioFile: {
      "Sameer Nass": "79-سورة النازعات.mp3",
    },
  },
  {
    surahNumber: 80,
    arabicName: "عَبَسَ",
    englishName: "ʿAbasa",
    placeOfRevelation: "Makkah",
    versesCount: 42,
    englishTranslatedName: "He Frowned",
    audioFile: {
      "Sameer Nass": "80-سورة عبس.mp3",
    },
  },
  {
    surahNumber: 81,
    arabicName: "ٱلتَّكْوِير",
    englishName: "at-Takwīr",
    placeOfRevelation: "Makkah",
    versesCount: 29,
    englishTranslatedName: "The Overthrowing",
    audioFile: {
      "Sameer Nass": "81-سورة التكوير.mp3",
    },
  },
  {
    surahNumber: 82,
    arabicName: "ٱلْإِنْفِطَار",
    englishName: "al-ʾInfiṭār",
    placeOfRevelation: "Makkah",
    versesCount: 19,
    englishTranslatedName: "The Cleaving",
    audioFile: {
      "Sameer Nass": "82-سورة الانفطار.mp3",
    },
  },
  {
    surahNumber: 83,
    arabicName: "ٱلْمُطَفِّفِين",
    englishName: "al-Muṭaffifīn",
    placeOfRevelation: "Makkah",
    versesCount: 36,
    englishTranslatedName: "The Defrauding",
    audioFile: {
      "Sameer Nass": "83-سورة المطففين.mp3",
    },
  },
  {
    surahNumber: 84,
    arabicName: "ٱلْإِنْشِقَاق",
    englishName: "al-ʾInšiq̈āq̈",
    placeOfRevelation: "Makkah",
    versesCount: 25,
    englishTranslatedName: "The Sundering",
    audioFile: {
      "Sameer Nass": "84-سورة الانشقاق.mp3",
    },
  },
  {
    surahNumber: 85,
    arabicName: "ٱلْبُرُوج",
    englishName: "al-Burūj",
    placeOfRevelation: "Makkah",
    versesCount: 22,
    englishTranslatedName: "The Mansions of the Stars",
    audioFile: {
      "Sameer Nass": "85-سورة البروج.mp3",
    },
  },
  {
    surahNumber: 86,
    arabicName: "ٱلطَّارِق",
    englishName: "aṭ-Ṭāriq̈",
    placeOfRevelation: "Makkah",
    versesCount: 17,
    englishTranslatedName: "The Nightcommer",
    audioFile: {
      "Sameer Nass": "86-سورة الطارق.mp3",
    },
  },
  {
    surahNumber: 87,
    arabicName: "ٱلْأَعْلَىٰ",
    englishName: "al-ʾAʿlā",
    placeOfRevelation: "Makkah",
    versesCount: 19,
    englishTranslatedName: "The Most High",
    audioFile: {
      "Sameer Nass": "87-سورة الأعلى.mp3",
    },
  },
  {
    surahNumber: 88,
    arabicName: "ٱلْغَاشِيَة",
    englishName: "al-Ghāšiyah",
    placeOfRevelation: "Makkah",
    versesCount: 26,
    englishTranslatedName: "The Overwhelming",
    audioFile: {
      "Sameer Nass": "88-سورة الغاشية.mp3",
    },
  },
  {
    surahNumber: 89,
    arabicName: "ٱلْفَجْر",
    englishName: "al-Fajr",
    placeOfRevelation: "Makkah",
    versesCount: 30,
    englishTranslatedName: "The Dawn",
    audioFile: {
      "Sameer Nass": "89-سورة الفجر.mp3",
    },
  },
  {
    surahNumber: 90,
    arabicName: "ٱلْبَلَد",
    englishName: "al-Balad",
    placeOfRevelation: "Makkah",
    versesCount: 20,
    englishTranslatedName: "The City",
    audioFile: {
      "Sameer Nass": "90-سورة البلد.mp3",
    },
  },
  {
    surahNumber: 91,
    arabicName: "ٱلشَّمْس",
    englishName: "aš-Šams",
    placeOfRevelation: "Makkah",
    versesCount: 15,
    englishTranslatedName: "The Sun",
    audioFile: {
      "Sameer Nass": "91-سورة الشمس.mp3",
    },
  },
  {
    surahNumber: 92,
    arabicName: "ٱللَّيْل",
    englishName: "al-Layl",
    placeOfRevelation: "Makkah",
    versesCount: 21,
    englishTranslatedName: "The Night",
    audioFile: {
      "Sameer Nass": "92-سورة الليل.mp3",
    },
  },
  {
    surahNumber: 93,
    arabicName: "ٱلضُّحَىٰ",
    englishName: "aḍ-Ḍuḥā",
    placeOfRevelation: "Makkah",
    versesCount: 11,
    englishTranslatedName: "The Morning Hours",
    audioFile: {
      "Sameer Nass": "93-سورة الضحى.mp3",
    },
  },
  {
    surahNumber: 94,
    arabicName: "ٱلشَّرْح",
    englishName: "aš-Šarḥ",
    placeOfRevelation: "Makkah",
    versesCount: 8,
    englishTranslatedName: "The Relief",
    audioFile: {
      "Sameer Nass": "94-سورة الشرح.mp3",
    },
  },
  {
    surahNumber: 95,
    arabicName: "ٱلتِّين",
    englishName: "at-Tīn",
    placeOfRevelation: "Makkah",
    versesCount: 8,
    englishTranslatedName: "The Fig",
    audioFile: {
      "Sameer Nass": "95-سورة التين.mp3",
    },
  },
  {
    surahNumber: 96,
    arabicName: "ٱلْعَلَق",
    englishName: "al-ʿAlaq̈",
    placeOfRevelation: "Makkah",
    versesCount: 19,
    englishTranslatedName: "The Clot",
    audioFile: {
      "Sameer Nass": "96-سورة العلق.mp3",
    },
  },
  {
    surahNumber: 97,
    arabicName: "ٱلْقَدْر",
    englishName: "al-Q̈adr",
    placeOfRevelation: "Makkah",
    versesCount: 5,
    englishTranslatedName: "The Power",
    audioFile: {
      "Sameer Nass": "97-سورة القدر.mp3",
    },
  },
  {
    surahNumber: 98,
    arabicName: "ٱلْبَيِّنَة",
    englishName: "al-Bayyinah",
    placeOfRevelation: "Madeenah",
    versesCount: 8,
    englishTranslatedName: "The Clear Proof",
    audioFile: {
      "Sameer Nass": "98-سورة البينة.mp3",
    },
  },
  {
    surahNumber: 99,
    arabicName: "ٱلزَّلْزَلَة",
    englishName: "Az-Zalzalah",
    placeOfRevelation: "Madeenah",
    versesCount: 8,
    englishTranslatedName: "The Earthquake",
    audioFile: {
      "Sameer Nass": "99-سورة الزلزلة.mp3",
    },
  },
  {
    surahNumber: 100,
    arabicName: "ٱلْعَادِيَات",
    englishName: "al-ʿĀdiyāt",
    placeOfRevelation: "Makkah",
    versesCount: 11,
    englishTranslatedName: "The Courser",
    audioFile: {
      "Sameer Nass": "100-سورة العاديات.mp3",
    },
  },
  {
    surahNumber: 101,
    arabicName: "ٱلْقَارِعَة",
    englishName: "al-Q̈āriʿah",
    placeOfRevelation: "Makkah",
    versesCount: 11,
    englishTranslatedName: "The Calamity",
    audioFile: {
      "Sameer Nass": "101-سورة القارعة.mp3",
    },
  },
  {
    surahNumber: 102,
    arabicName: "ٱلتَّكَاثُر",
    englishName: "at-Takāthur",
    placeOfRevelation: "Makkah",
    versesCount: 8,
    englishTranslatedName: "The Rivalry in world increase",
    audioFile: {
      "Sameer Nass": "102-سورة التكاثر.mp3",
    },
  },
  {
    surahNumber: 103,
    arabicName: "ٱلْعَصْر",
    englishName: "al-ʿAṣr",
    placeOfRevelation: "Makkah",
    versesCount: 3,
    englishTranslatedName: "The Declining Day",
    audioFile: {
      "Sameer Nass": "103-سورة العصر.mp3",
    },
  },
  {
    surahNumber: 104,
    arabicName: "ٱلْهُمَزَة",
    englishName: "al-Humazah",
    placeOfRevelation: "Makkah",
    versesCount: 9,
    englishTranslatedName: "The Traducer",
    audioFile: {
      "Sameer Nass": "104-سورة الهمزة.mp3",
    },
  },
  {
    surahNumber: 105,
    arabicName: "ٱلْفِيل",
    englishName: "al-Fīl",
    placeOfRevelation: "Makkah",
    versesCount: 5,
    englishTranslatedName: "The Elephant",
    audioFile: {
      "Sameer Nass": "105-سورة الفيل.mp3",
    },
  },
  {
    surahNumber: 106,
    arabicName: "قُرَيْش",
    englishName: "Q̈urayš ",
    placeOfRevelation: "Makkah",
    versesCount: 4,
    englishTranslatedName: "Quraysh",
    audioFile: {
      "Sameer Nass": "106-سورة قريش.mp3",
    },
  },
  {
    surahNumber: 107,
    arabicName: "ٱلْمَاعُون",
    englishName: "al-Maʿūn",
    placeOfRevelation: "Makkah",
    versesCount: 7,
    englishTranslatedName: "The Small kindnesses",
    audioFile: {
      "Sameer Nass": "107-سورة الماعون.mp3",
    },
  },
  {
    surahNumber: 108,
    arabicName: "ٱلْكَوْثَر",
    englishName: "al-Kawthar",
    placeOfRevelation: "Makkah",
    versesCount: 3,
    englishTranslatedName: "The Abundance",
    audioFile: {
      "Sameer Nass": "108-سورة الكوثر.mp3",
    },
  },
  {
    surahNumber: 109,
    arabicName: "ٱلْكَافِرُون",
    englishName: "al-Kāfirūn",
    placeOfRevelation: "Makkah",
    versesCount: 6,
    englishTranslatedName: "The Disbelievers",
    audioFile: {
      "Sameer Nass": "109-سورة الكافرون.mp3",
    },
  },
  {
    surahNumber: 110,
    arabicName: "ٱلنَّصْر",
    englishName: "an-Naṣr",
    placeOfRevelation: "Madeenah",
    versesCount: 3,
    englishTranslatedName: "The Divine Support",
    audioFile: {
      "Sameer Nass": "110-سورة النصر.mp3",
    },
  },
  {
    surahNumber: 111,
    arabicName: "ٱلْمَسَد",
    englishName: "al-Masad",
    placeOfRevelation: "Makkah",
    versesCount: 5,
    englishTranslatedName: "The Palm Fiber",
    audioFile: {
      "Sameer Nass": "111-سورة المسد.mp3",
    },
  },
  {
    surahNumber: 112,
    arabicName: "ٱلْإِخْلَاص",
    englishName: "al-ʾIkhlāṣ",
    placeOfRevelation: "Makkah",
    versesCount: 4,
    englishTranslatedName: "The Sincerity",
    audioFile: {
      "Sameer Nass": "112-سورة الإخلاص.mp3",
    },
  },
  {
    surahNumber: 113,
    arabicName: "ٱلْفَلَق",
    englishName: "al-Falaq̈",
    placeOfRevelation: "Makkah",
    versesCount: 5,
    englishTranslatedName: "The Daybreak",
    audioFile: {
      "Sameer Nass": "113-سورة الفلق.mp3",
    },
  },
  {
    surahNumber: 114,
    arabicName: "ٱلنَّاس",
    englishName: "an-Nās",
    placeOfRevelation: "Makkah",
    versesCount: 6,
    englishTranslatedName: "Mankind",
    audioFile: {
      "Sameer Nass": "114-سورة الناس.mp3",
    },
  },
];

export const NUH_HA_MIN_KELLER_INFO = [
  {
    chapterNumber: 1,
    chapterName: "OPENING",
    description:
      "Sums up the meaning of the Quran, which is to realize that Allah is entitled to total devotion to Him in pure slavehood that turns to no one else for help. All that is praiseworthy, and every perfection, pertain solely to Allah Most High, who deserves the consummate worship of all worlds of beings, and commands the sovereign might, rule, and mastery of this world and the next. He teaches servants to plead meekly for the incomparable favor of wholeheartedly following the path of endless happiness and being saved from the path of endless woe. Its words are a Muslim's solemn covenant with his Lord to show heartfelt humble worship, and perpetually return to Him from every error with love and repentance to the depths of his soul.",
  },
  {
    chapterNumber: 2,
    chapterName: "THE COW",
    description:
      "Sets forth, in the first eighth of the Quran, the greatest benefits of divine revelation to Man: that it is the Truth and a sovereign guidance to the godfearing, who believe in the next life and the unseen, and in the divine Oneness that differs not between one prophetic messenger and another. It prepares the signal group of Muslims to bear the sacred trust of holding fast to the religion of Allah, the primeval monotheistic faith of Abraham (upon him be blessings and peace), by making plain to them the straight path. Allah has pleased that this path be the way of His noble reigning deputy on earth; namely Man, in particular those Allah loves and who love Him, fully and faithfully, in all they take and all they leave, in their convictions and personal code of behavior, in their calling others to embrace the faith, and in their own wholehearted commitment to respond to everything in it. It also warns those who swerve from the message by lack of submission to their prophets; as did deniers, prevaricators, and unbelievers of the children of Israel in the story of the Cow and other passages, which proved to be their downfall, from being chosen by Allah to bear His message, to being detested by Him for their obstinacy. True believers must be otherwise and say: 'We hear and obey' to win endless felicity for their submission to the Lord of all Worlds of Beings, expressed in the beautiful prayer with which the sura ends.",
  },
  {
    chapterNumber: 3,
    chapterName: "THE HOUSE OF IMRAN",
    description:
      "Elucidates the supreme Truth of the Oneness of Allah, and Islam or submission' in humility to Allah the One, with a clear outline of this submission and how to prevail against enemies of the divine Oneness by both force of reason and force of arms, to earn the special love of Allah for those He has chosen. Establishes the Oneness and aloneness of Allah Most High, His absolute power, and the truth of His messenger Muhammad (Allah bless him and give him peace) in conveying the religion of all previous prophets, which is that Allah is one and has no offspring. The religion of Islam is thus one, and is what religion is in the sight of Allah, and the substance of all previous religious faiths, including that of the House of Imran; so what the Jews and Christians respectively assert about Jesus and Mary cannot be true. It corrects mankind's convictions about Allah Most High, His attributes, and Most Beautiful Names on the one hand, and about His religion on the other. As in many other suras, its end recapitulates the main themes set out succinctly at its beginning, and in some of the most moving words in the Quran.",
  },
  {
    chapterNumber: 4,
    chapterName: "WOMEN",
    description:
      "Enjoins godfearingness towards Allah Most High through holding fast to His Oneness, deep faith in the entire Truth He has sent, and championing justice and mercy in all interactions and ties that bind mankind together. This means between individuals, families, relatives, and communities, especially towards the weak and helpless, and particularly women. It abolishes the tyranny of the bygone age of pagan ignorance and raises in its place a Muslim society characterized by peace of heart, security, and good relations inwardly and outwardly. It is a sura of reorganizing society from within and without on the basis of godfearingness, mercy, and justice.",
  },
  {
    chapterNumber: 5,
    chapterName: "THE LADEN TABLE",
    description:
      "Fires believers' desire for the good of this world and the next through keeping their solemn trusts to assert the Oneness of Allah and uphold the principles revealed by Him to establish a society on earth dedicated to virtue and to social and economic justice for all. This is the way to show gratitude to Him, obtain the full blessings of His religion, and avert His vengeance. Warns them against violating their trusts and deviating in morals and beliefs as did so many of the Jews, Christians, and idolators before them.",
  },
  {
    chapterNumber: 6,
    chapterName: "CATTLE",
    description:
      "Teaches the Prophet (Allah bless him and give him peace) to make a convincing case to idolators for the fundamentals of the religion of Islam and its eternal truths. The most central of them is affirming the Oneness of Allah in belief and practice by recognizing His sole prerogative to judge, legislate, and be worshipped. He is the Irresistibly Powerful over His servants, and as well the source of all bounty, favor, and prophethood, and is the Lord of the Final Day. Promulgates decisive arguments for casting idolatry aside once and for all, and the need for those who practice it to tak stock of themselves before it is too late.",
  },
  {
    chapterNumber: 7,
    chapterName: "THE HEIGHTS",
    description:
      "Moves mankind to follow the miraculous Book sent down to illuminate human existence, direct lives in a new direction, and set them at peace by the supreme mercy of knowing the Oneness of Allah with a heart filled with gratitude to Him. To wholeheartedly follow it with energy and a sense of its true greatness brings freedom from the dark night of life's discontinuities and a way unto noble character. People of the Book will find in the unlettered Prophet (Allah bless him and give him peace) to whom it was revealed the very one described to them in the Torah and Gospel, who bids them to right and forbids them the wrong, and makes lawful to them the fair and unlawful to them the vile.",
  },
  {
    chapterNumber: 8,
    chapterName: "THE SPOILS",
    description:
      "Strikes the true measure of struggle in the path of Allah, which is to make the Word of Allah paramount, allow His religion to spread and be embraced by mankind, protect it, and win distinction and favor in the next world by doing so. The vastly outnumbered Muslim force at Badr only won the victory through Allah's doing and foresight, so they might realize their own incapacity to either benefit or harm themselves, wholly submit, and fulfill the command of Allah and His messenger (Allah bless him and give him peace). Victory requires undivided unity of purpose, asking Allah's help trusting in Him alone, and remembering Him without cease; not betraying Him or His messenger, or being tempted away by love of spoils, worldly gain. or offspring. True victory is to win the divine forgiveness and be well pleasing to Allah forever.",
  },
  {
    chapterNumber: 9,
    chapterName: "REPENTANCE",
    description:
      "Announces a tremendous final acquittance by Allah, His messenger (Allah bless him and give him peace), and believers from any further treaty obligations to idolators, people of the Book, or hypocrites. Exposes their underhanded plots and wiles, and trains and prepares believers for the struggle against them by force of arms. Summons all these adversaries, plus desert tribesmen and disobedient sinners altogether, to unconditional Repentance to their Almighty Maker, for the door of repentance is open, Allah has accepted it of true believers, and they have won His good pleasure and lofty praise.",
  },
  {
    chapterNumber: 10,
    chapterName: "JONAH",
    description:
      "Proclaims the sovereign Truth of the Wise Quran and all it contains: the Oneness of the Creator, resurrection of the dead, requiting everyone what they deserve, and abolishing of idolatry. It invites deniers to true faith before they miss their chance, and unfailingly promises the best of this world and the next to whoever of them believes. Sets forth the means to victory over those who deny the message, by dauntless patience, trust in Allah, and faith as the greatest provision for the journey.",
  },
  {
    chapterNumber: 11,
    chapterName: "HUD",
    description:
      "Vindicates the truth of the Quran. Makes its inimitability plain through the wisdom of its legal precepts, and its disclosing long lost details from the lives of previous prophets who called the cities of disbelief to the worship of Allah alone. Exhorts the Prophet (Allah bless him and give him peace) and those with him to remain steadfast in calling mankind to Allah, and wholly dedicated to championing the right. Warns leaders of idolatry and their followers of the painful chastisement awaiting them here and hereafter for what they do. Calls them to acknowledge the divine Oneness, ask Allah's forgiveness, repent, and submit to the Quran.",
  },
  {
    chapterNumber: 12,
    chapterName: "JOSEPH",
    description:
      "Illustrates the final happy outcome, even if after a time, of believers who surpass in good, through Allah's divine aid against those laying wiles for them. He illuminates them with knowledge, is their all-powerful Protector and friend, knows all things, and invariably gains His way. All of which strengthens the indomitable resolve of the Messenger (Allah bless him and give him peace) and believers and reassures their hearts. Also shows the Quran is the guiding inspiration from Allah Most High that He has taught the Prophet, inviting people to Him; and refuting all who willfully deny it, worship others with Allah, or cry it lies.",
  },
  {
    chapterNumber: 13,
    chapterName: "THUNDER",
    description:
      "Substantiates the truth of the Quran sent down upon the Messenger of Allah Most High (Allah bless him and give him peace). The revelation itself is the supreme sign that requires nothing else to vindicate it. Thunder is something manifestly real in itself, audible alike to the sighted and blind, to someone under the wide open sky or harbored under a roof. Sometimes it brings lightning and rain, and sometimes not. And when rain falls, sometimes it brings up fruit if it strikes good soil and nothing afterwards destroys it, and sometimes not, if it falls on brackish salt marsh. So too the Quran has a sound and a voice that may stir love, fear, or hope in hearts and actually guide them; while upon other hearts, though it is Truth itself, it has no effect, or may even make them harder so that they are lost astray.",
  },
  {
    chapterNumber: 14,
    chapterName: "ABRAHAM",
    description:
      "Exalts the greatness of this Book revealed by Allah to His messenger (All bless him and give him peace). It brings Man forth from the darknese worshipping others to the light of the divine Oneness. Takes mankind fr denying revelation, which nullifies all good works; and denying tha blessings until they disappear forever, as befell the nations of old-to th worship and thanks of Allah, who repays sincerity therein with increase and reward. The exalted path it calls to requires patience, sacrifice, and reliance on Allah; as it did before not only with Abraham and his son, but all the prophets together.",
  },
  {
    chapterNumber: 15,
    chapterName: "AL-HIJR",
    description:
      "Reinforces the determination of the Prophet (Allah bless him and give him peace) and believers to fearlessly proclaim the Quran. They should have little to do with the blandishments of this world, but trust in Allah, ceaselessly call to faith, worship steadfastly, and pay no mind to anything else. Gives glad tidings to believers of having the entire good of this world and the next And fair warning to idolators of the vengeance that overtook the people of al-Hijr in this world. And warns them that their own ramparts will avail them nothing from Allah, so they should seize the opportunity and repent while there is still time.",
  },
  {
    chapterNumber: 16,
    chapterName: "BEES",
    description:
      "Cautions idolators who deny the afterlife and hasten their punishment against themselves with mocking prayers, that it will not be slow in coming, and be followed by a far worse one in the next world if they do not repent. Explains their idolatry is empty mummery and its laws meaningless, since Allah Most High alone deserves to be worshipped, thanked, and sacrificed to, as the prophet Abraham (upon him be blessings and peace) did. And so too should everyone who hopes to meet their Lord well pleased with them because they excelled in good.",
  },
  {
    chapterNumber: 17,
    chapterName: "THE NIGHT JOURNEY",
    description:
      "Directs Man to the Divine, since He is the possessor of all things whatsoever. He alone raises one human being in rank above another. He but does so for their godfearingness, meaning at the most basic level, to believe in His Oneness, and at the highest level, being utterly absorbed in Him from anything besides. He calls to the Truth, gives endless salvation and happiness to whoever hears and obeys, and punishes the haughty who refuse. Mankind must acknowledge the unmistakable proofs given to the Messenger (Allah bless him and give him peace), the greatest of which are the Night Journey and the Quran. Those who do have the great tidings of a mighty wage in this world and the next, safety, and triumph over foes; while those who cry lies to the message shall meet with destruction, as happened before to the children of Israel when they contravened their Book.",
  },
  {
    chapterNumber: 18,
    chapterName: "THE CAVE",
    description:
      "Tells of the immemorial struggle between faith and materialism. And that this Book has been sent down by Allah without the slightest discord in it, faultlessly upright and seeing to every need. And that many believers of the past prevailed through the Truth alone over falsehood, among them the companions of the great mountain Cave, who left their idolatrous people, and when they awoke after a long sleep, became a sign to others of the omnipotent power of the One who creates all. Shows the triumph of turning to the All-knowing who nothing happens but through His will, and away from the fading charms of a life without point.",
  },
  {
    chapterNumber: 19,
    chapterName: "MARY",
    description:
      "Gives tidings of joy to faithful worshippers of the Divine who adore no one besides, are godfearing, and respond to the Quran. Whoever is a devoted slave to the One, with truthfulness in word and deed, humble entreaty, and the prayer, He shall bless and reward as He did Mary, and did Zachariah and the other prophets (upon them be blessings and peace). Warns people of the Book and idolators who claim the All-merciful has begotten Him offspring not to fool themselves with their worldly might or panoply, for nothing can avail against His reprisal, and nothing ever has. a eleton eltbipevA",
  },
  {
    chapterNumber: 20,
    chapterName: "TAHA",
    description:
      "Clarifies that human happiness lies in wholeheartedly following the worship, guidance, and remembrance of Allah. So Islam is pure felicity, while whoever turns away from it is hapless in this world and the next. Allah says, Should any guidance from Me reach you, whoever dutifully follows My guidance, never shall he stray or meet with woe. And whoever turns away from My Remindance shall have a miserably deprived existence.?",
  },
  {
    chapterNumber: 21,
    chapterName: "THE PROPHETS",
    description:
      "Turns on prophethood, focusing on the divine Oneness and inevitable return to Allah. Warns deniers of Allah's message to the Prophet (Allah bless him and give him peace) that the moment of truth between them and him is nigh, to their irrevocable loss, or gain, in both worlds. The prophets of old who made Allah their one point, aim, and resort, Allah in turn made victorious and exemplars to men. So too will He make the Prophet and believers, deliver them in this world and the next, answer their prayers, and bequeath them the earth after their long and steadfast patience.art T eou",
  },
  {
    chapterNumber: 22,
    chapterName: "THE PILGRIMAGE",
    description:
      "Lets mankind realize Allah is One and they should be humble to Him Him; and know, embrace, and live true godfearingness. The one unsurpassed grace of human life is the eright path, and life's greatest tragedy is to veer from it and fall. Prompts those who would succeed at this to mend their ego and headstrong ways by acts of worship, of which the greatest is the Pilgrima And to oppose the enemies of religion by inviting them to Islam, or strugol against them.",
  },
  {
    chapterNumber: 23,
    chapterName: "BELIEVERS",
    description:
      "Proclaims Allah's sovereign edict that believers are those who succee forever. Discloses their signal characteristics, and the nature of true fair and its proofs, so people may realize its incomparable worth and embrac and cherish it. And that the way of unbelief is a dismal spiral down.",
  },
  {
    chapterNumber: 24,
    chapterName: "LIGHT",
    description:
      "Celebrates Allah as the Light of the heavens and the earth. Tells ho individual and society alike may be illumined by the faith and practice of Allah's Sacred Law. And by wholeheartedly following His messenger (Allah bless him and give him peace) with the gracious manners and respect due to him and his spouse, in purity, chastity, respect, and nobility; and by shunning hypocrisy and bad character.",
  },
  {
    chapterNumber: 25,
    chapterName: "THE ONE CRITERION",
    description:
      "Abheti Avers this Book is the One Criterion between Truth and falsehood, and a wellspring of life and blessings for whoever takes it up. Expounds Allah's Oneness, exaltedness above partner or offspring, limitless praise, and power to raise the dead. Rebuts opponents of the message, warns them of the punishments that met past peoples who ignored the Truth, and calls them to repent of their sins and unbelief. Encourages the Prophet (Allah bless him and give him peace) and believers to bear up patiently with unbelievers, continue their struggle in light of the One Criterion, and have the beautiful traits of Allah's true servants, assured of the highest degrees in paradise forever.",
  },
  {
    chapterNumber: 26,
    chapterName: "POETS",
    description:
      "Clarifies that this Book itself shows it is from Allah. The learned of the children of Israel recognize it as such; and it is not mere poetry, or words made up by devils. Exhorts the Prophet (Allah bless him and give him peace and believers to defy every pain and fear they meet with, and make a case for the Truth against those indoctrinated with falsehood. Warns doubters raising idle pretexts against its verses and following the empty words of poets that they shall meet with the same fate as those before who followed leaders of misguidance against the messengers of Allah calling to religion and godfearingness.",
  },
  {
    chapterNumber: 27,
    chapterName: "THE ANTS",
    description:
      "Affirms the entire adequacy of the Ouran to guide all mankind. Offers the clear alternative of the Truth to make-believe choices between dead ends. The clearness of the difference is a divine blessing that demands thanks, as solomon (upon him be blessings and peace) showed thanks by inviting others to it and practicing it himself with fortitude and trust in Allah. It is a windfall for the guided, but a downfall for those too off to guide.",
  },
  {
    chapterNumber: 28,
    chapterName: "THE STORY",
    description:
      "Attests by the unequalled magnificence of the Quran to the message of Muhammad (Allah bless him and give him peace) that calls to the Oneness of Allah, and effaces the worship of any besides. Shows that Allah alone possesses sovereign power, mastery of the future, and the might to effect absolutely anything, so that all beings should humbly submit to Him. Promises powerless believers Allah's aid to victory, that they will be firmly established and inherit this world and the next, even if they seem at present bereft of strength. Threatens idolators who commit aggression and wanton excess across the earth that they will be destroyed in this world and the next, though they seem at present as strong as any could be.",
  },
  {
    chapterNumber: 29,
    chapterName: "THE SPIDER",
    description:
      "Enjoins steadfastness and patience in holding fast to Truth and right. And to summon to Allah Most High without faltering at life's trials, any more than the prophets before did (upon them be blessings and peace). Confirms the strength of believers and the promise of victory, might, and the bliss of the next world, for the worldly losses they have incurred in the path of Islam. Urges them to emigrate from persecution to the Prophet (Allah bless him and give him peace) and their fellow believers in Medina. Shows the weakness of disbelievers and all they worship, which have no more substance than a spider's web, and warns them of destruction in this world and punishment in the next.",
  },
  {
    chapterNumber: 30,
    chapterName: "THE BYZANTINES",
    description:
      "Gives many of the innumerable proofs that the whole matter of existence returns to Allah alone. He is One, does whatever He wills, can do anything, alone bestows blessings, and never breaks His solemn word, including future events that shall all come to pass as He has foretold. Among the greatest of these are the Day of Resurrection, His aiding the religion of Islam, and promise, now and to come, to wreak vengeance on those of idolatry as He did their likes before them.",
  },
  {
    chapterNumber: 31,
    chapterName: "LUQMAN",
    description:
      "Exhorts mankind to follow the sapiently wise Quran sent down by the AL aware, who brings all things to their foreseen perfection through His infinite wisdom. This means realizing the Oneness of Allah Most High,gratitude to Him for His many blessings, dread and awe at the prospect of the next worla and holding fast to the noble and discarding the base. So whoever does thi has won undving distinction in this world and to come, and embraced grea wisdom. And whoever turns away from it to empty narratives, unbelief, and vice has no wisdom. All this is of the very wisdom handed down from the precepts of Luqman.",
  },
  {
    chapterNumber: 32,
    chapterName: "PROSTRATION",
    description:
      "Establishes the truth of the Ouran revealed by the Lord of all Worlds of Beings. Its tidings of the day of Decisive Judgement are borne out by the power of His attributes and actions in the cosmos and in the human beine Gives tidings of joy to believers who leave their sleep to call on their Lord in hope and fear, and who when they hear His verses prostrate themselves before His limitless glory, that they shall have a reward beyond all ken. And warns those who cry lies and disdain serving Him of the implacable vengeance and humiliation to reach them.",
  },
  {
    chapterNumber: 33,
    chapterName: "THE LEAGUED FORCES",
    description:
      "Urges mankind to devote themselves and fulfill their trust to their Creator. He raises whom He wills, even if weak and destitute, and lowers whom He wills even if strong and powerful, as He did the Leagued Forces against believers. 'Devote' means to worship and trust in Allah, obey His messenger (Allah bless him and give him peace) who is of momentous standing in His sight, and be unshakably confident in His promises and decisions in good times and bad, even when they run counter to the usual turn of things. It details the rights and respect due to the Prophet from all Muslims, dismissing the doubts raised against him by hypocrites and unbelievers, whom Allah warns of exposure of their treacheries, and chastisement in both worlds.",
  },
  {
    chapterNumber: 34,
    chapterName: "SHEBA",
    description:
      "Announces the abode of eternity is bound to come, from the All-wise, the All knowing. So Man should see well to exalt Him who alone creates, shows blessings to, and provides for everyone and everything. Nor be deluded by this world and its transient pleasures, wealth, and offspring, but believe in His revealed Books and prophetic messengers, and spend in His path. For then He will increase and honor him here and hereafter, as He did His grateful servants David and Solomon (upon them be blessings and peace).",
  },
  {
    chapterNumber: 35,
    chapterName: "ORIGINATOR",
    description:
      "Attests to Allah as the Originator of all things without any previous pattern out of nothing, who possesses limitless power to do anything. He faithfully provides for all creatures out of His infinite mercy, and created the heavens and earth and everything in them, and shall bring back what He first originated on the Day of Resurrection. Confirms to the Messenger (Allah bless him and give him peace) and believers who assiduously read the Book that His incomparable mercy in sending down every word of it with the angels shall be brought to consummate perfection, despite anything plotters may contrive.",
  },
  {
    chapterNumber: 36,
    chapterName: "YA SIN",
    description:
      "Is the Heart of the Quran.' It confirms the truth of the Prophet's message (Allah bless him and give him peace) unfolded in the Quran of the divine Oneness, the final raising of the dead, and their requital. Gives glad tidings to believers of the bliss of the eternal abode and their triumph in this one. And warns adversaries who deny it of their punishment in both worlds, as has befallen their likes before.geaJi din vilrba",
  },
  {
    chapterNumber: 37,
    chapterName: "THE RANKS",
    description:
      "Affirms the unique Oneness of Allah Most High, and His deserving all praise and humble servitude for the infinite blessings He has lavished on those whom He alone has made to exist. Refutes idolators' empty claims that angels are His offspring, or the jinn are descended of His wedlock with angels. As its final words put it, 'How incomparably glorious is your Lord, Lord of all might, above what they describe! And safety and peace be unto the messengers; And all praise to Allah, Lord of all Worlds of Beings! ee Prompts the Prophet (Allah bless him and give him peace) and his followers to bejust as steadfast as previous prophets were in calling to Allah, delivering the divine message, and in sincerity of servanthood. Warns unbelievers who turn others aside from it with rank untruths, because they are too proud to heed the divine Remindance and deluded by falsehood, that they shall be punished in the next world. Followers there shall bitterly reprove their religious leaders who so badly misled them, but the regret of both will avail them nothing.",
  },
  {
    chapterNumber: 38,
    chapterName: "ŞAD",
    description: "",
  },
  {
    chapterNumber: 39,
    chapterName: "SUCCESSIVE THRONGS",
    description:
      "Conveys the Oneness of Allah Most High, and duty of everyone to have true sincerity, slavehood, and love to death for Him. Exalts the Quran that has come with this truth, struck similitudes for mankind, and brought unmistakable proofs of the most joyous tidings and dreadful warnings.",
  },
  {
    chapterNumber: 40,
    chapterName: "FORGIVER",
    description:
      "Assures whoever repents and believes, that Allah is the Forgiver of sin and Accepter of even slight repentance, and the supreme Bestower of favo bounty, and blessings on a scale unimaginably great. Threatens haueh oppressors of Allah's servants, who contend against the verses of His Onen and the final resurrection, that they shall meet with chastisement in thi world and the next. Exhorts them to return to the truth while they still ca",
  },
  {
    chapterNumber: 41,
    chapterName: "EXPOUNDED",
    description:
      "Makes plain that the Ouran has been sent down from Allah Most Mercifut and Compassionate in a clearly expounded detailing of everything li requires. Gives mankind tidings of warning and of joy, confirmed by un mistakable signs of truth in all the far-flung directions, and in their ver selves. The greatest of these are the sovereign Oneness of Allah, His deser ing worship, and the reality of Resurrection Day. Describes the stubborn opposition of unbelievers to these verities, and the felicity of believers who hold fast to them, especially those who summon to Allah.",
  },
  {
    chapterNumber: 42,
    chapterName: "COUNSEL",
    description:
      "shows the Ouran is divine inspiration from Allah Most High that has reached Man continuously through all previous prophets from one and the same source. Calls on all people to unite around this one sole religion based on true faith in Allah's own Oneness, and exemplifying the noblest traits of human character, among them taking counsel with one another. ",
  },
  {
    chapterNumber: 43,
    chapterName: "EMBELLISHMENT",
    description:
      "Warns against being seduced by the fleeting embellishment of this pathetic world and its charades of prestige, wealth, and power. All of these lure the unwary into disbelief in the prophets, scriptures, and Final Hour, or even ascribing partners in worship or offspring to Allah. As opposed to holding fast to the eternal verities of Allah Most High, His messengers, His Books the Last Day, and of lasting bliss and true glory with Him forever, which are a font of endless blessings for those who believe and act upon them.",
  },
  {
    chapterNumber: 44,
    chapterName: "SMOKE",
    description:
      "Gives fair warning to those of power and privilege, wh gloat over downtrodden believers, and cry lies to the Ouran, the next world, and the unique Oneness of Allah Most High, that they will lose everything. Lives of luxury and splendid homes will help them nothing against the chastisement of the present and future. Informs believers they shall be blessed with burgeoning increase, every good, and a noble station to abide in forever, in glorious recompense for their fortitude in this life for the sake of Allah.",
  },
  {
    chapterNumber: 45,
    chapterName: "KNEELING",
    description:
      "Extols the limitless magnificence of Allah Most Glorious, His supremacy, His indomitable might that vanquishes all, and His surpassing Wisdom. His glory is manifest in the power and beauty of the Quran's verses, and in the versatile and well-sufficing Sacred Law which Muslims were given after the two previous peoples of the Book eschewed theirs. His glory is manifest in the mighty signs inscribed by the pen of creation in the universe for all to see; and finally in the direness of the Day of Reckoning on which all communions of faith will kneel humbled before the greatness of Allah, mockers to meet with what they mocked, and believers to meet with the mercy in which they believed.",
  },
  {
    chapterNumber: 46,
    chapterName: "THE DUNES",
    description:
      "Warns idolators who reject the call of the Summoner to Allah's message, His Book, and His sole right to be worshipped with no other besides, that if they persist they shall be punished in this world and the next, as the people of Ad of the Dunes were and the cities around them. Gives tidings of joy to those who respond to the call and excel in the good.",
  },
  {
    chapterNumber: 47,
    chapterName: "MUHAMMAD",
    description:
      "Raises the spirits and fervor of believers to safeguard the dominions of the religion. Calls to unflagging struggle with one's wealth, life, and decisive resolve against the forces of unbelief, especially tribes who have reneged from Islam, until those forces are halted or vanquished. Gives warning to unbelievers and hypocrites that they will be abased and destroyed and their works nullified, so they should repent before time runs out.",
  },
  {
    chapterNumber: 48,
    chapterName: "VICTORY",
    description:
      "Gives believers glad tidings of the great outcomes of the treaty of Hudaybiya, and that it was a victory to be followed by victories throughout the lands around and in the hearts of mankind, through the religion of Allah prevailing over all other. Takes to task hypocrites who hung behind from setting out to battle with the Prophet (Allah bless him and give him peace), and idolators who barred Muslims from reaching the Sacred House.",
  },
  {
    chapterNumber: 49,
    chapterName: "THE WALLED ROOMS",
    description:
      "Enjoins the noblest human character, morals, and way through reverence to Allah, respect towards the Prophet (Allah bless him and give him peace), and impeccable manners with all mankind, be they believer or unbeliever. And through true sincerity of faith, and spending on others for Allah without reminding them of it. Forbids all vileness of thought, word, or deed.",
  },
  {
    chapterNumber: 50,
    chapterName: "QAF",
    description:
      "Directs Man by incontrovertible proofs to ponder Allah's almighty powes raise the dead, arraign them, and requite them. Vindicates the Quran th unbelievers decry. Awakens oblivious hearts to the awareness that Allah se everything, and warns against all things that make them heedless of Him",
  },
  {
    chapterNumber: 51,
    chapterName: "THE SCATTERING WINDS",
    description:
      "shows the promises of Allah are incontestable facts, at their forefront the Day of Reckoning, on which those who excel in good and those who deny it alike shall be repaid. So Man must worship Allah Most High the way those who excel do, which is why he has been created. And must flee unto Allah and overcome every obstacle to Him, such as worry over livelihood, or vapid pride in power, influence, prestige, or wealth.",
  },
  {
    chapterNumber: 52,
    chapterName: "THE MOUNT",
    description:
      "Confirms divine inspiration and the eternal realities of faith it conveys, especially the final Day of Reckoning. Rebuts the groundless objections of its deniers and warns them of their peril, and gives glad tidings to those who know it will happen and work accordingly.",
  },
  {
    chapterNumber: 53,
    chapterName: "THE STARS",
    description:
      "Vindicates the truth of the Prophet (Allah bless him and give him peace) in delivering the message that Allah Most High has sent to him through the archangel Gabriel. Mankind should accordingly believe in the Oneness of Allah and reject any partners ascribed to Him. Idolators are following but delusion, the consequences of which will overtake them in this world before the next, so should save themselves while they can.",
  },
  {
    chapterNumber: 54,
    chapterName: "THEMOON",
    description:
      "Alerts those who cry lies to the divine message that the punishment of the Final Hour impends. Many a verse that is easy to heed, fear, and remember attests to it and to the chastisement prior to it in this world, which deniers have met with down through human history. Gives the godfearing great tidings of endless happiness in lush-shaded groves of paradise 'in a seat supremely perfect, with an All-ruling King, utter in power.",
  },
  {
    chapterNumber: 55,
    chapterName: "THE ALL-MERCIFUL",
    description:
      "e bahaie Discloses the sweeping vastness of the mercy of the Divine and its wondrous fair signs in this world and that to come. Exhorts jinn and mankind to reflect well on these, and thank Him for the clear road He has laid out, and shun idolatry. Explains the recompense on the one hand of whoever is in awe and dread of standing in judgement before his Lord; and of whoever cries lies on the other.",
  },
  {
    chapterNumber: 56,
    chapterName: "THE INEVITABLE",
    description:
      "Announces that the Resurrection is the Inevitable event that is bound to happen. Mankind shall be divided into the three groups which it describes, so as to stir longing in some hearts, and fear in others. The surpassingly beautiful miracles of nature and life are enough to apprise anyone of the divine might that alone could bring them into being, and hence of Allah's sovereign power to raise the dead, let deniers say what they may.",
  },
  {
    chapterNumber: 57,
    chapterName: "IRON",
    description:
      "Proclaims the absolute greatness of Allah Most Glorious. He merits utter sincerity, faith, and sacrifice from those who love Him, and that they devote their wealth, forces, and battle-steel to His path to combat His foes. Warns against obstacles from doing so such as contentment with this world, not spending for Allah, insincerity, and hardness of heart, which have prevented so many Jews, Christians, and hypocrites before from it.",
  },
  {
    chapterNumber: 58,
    chapterName: "SHE WHO ARGUES",
    description:
      "Explains that Allah's knowledge encompasses everything, down to secret conversations and alliances, so people should observe His bounds, realize He knows all, and not disobey Him. Promises the party of Allah who are faithful to Him and struggle against those who defy Him, that they shall find themselves victorious, firmly established, and magnificently rewarded. Warns the party of the Devil that they shall be routed with insuperable force, crushed, and destroyed.",
  },
  {
    chapterNumber: 59,
    chapterName: "THE AMASSING",
    description:
      "Affirms that Allah by His omnipotent might alone, rather than believers, defeated the combined Jews and hypocrites against Him and His messenger (Allah bless him and give him peace). Calls Muslims to accept dividing up between the poor the spoils taken from dwellers of cities won without battle, as has been commanded by Allah who gave the victory. And to fear Allah and prepare for the next life, which is nearer than any imagine.",
  },
  {
    chapterNumber: 60,
    chapterName: "THE TESTER",
    description:
      "Orders believers to forgo love and friendship with those who have defied Allah and His messenger, cried lies to, or repudiated them, for such ties are wrong and call one's very faith into question.",
  },
  {
    chapterNumber: 61,
    chapterName: "THE BATTLE LINE",
    description:
      "Urges all to do their utmost to be of one mind, heart, and battle line in the struggle against unbelievers, to exalt Allah Most Glorious above idolatry, and abjure the enemies of Allah.",
  },
  {
    chapterNumber: 62,
    chapterName: "THE FRIDAY PRAYER",
    description:
      "Increases zeal to perform the Friday prayer, obey the dictates of Allah M High, and never slacken in either. Reminds the great Muslim nation of fai of all the blessings Allah has lavished on them outwardly and inwardly, P them on guard against following the example of the Jews in their greed f worldly wealth and not following their Book, and tells how they wer punished for it by One who knows both the seen and unseen.",
  },
  {
    chapterNumber: 63,
    chapterName: "THE HYPOCRITES",
    description:
      "Exposes the hypocrites and their deeds, traits, and attitude towards Islam and Muslims, who should take heed against imitating them or their works",
  },
  {
    chapterNumber: 64,
    chapterName: "DEFRAUDMENT",
    description:
      "Warns Man not to sell himself short, as most do, through failing to seize life's priceless chance to worship and thank Him who deserves it. The day shall come that reveals to everyone this massive self-defraudment in its true colors of regret and loss. Reminds all to expend in the path of Allah despite finan cial setbacks that may attend a life of faith; and not to be too busy with the fleeting life of this world, wives, or children, to do their utmost for the next.",
  },
  {
    chapterNumber: 65,
    chapterName: "DIVORCE",
    description:
      "Sets forth the laws of divorce, with its peril-fraught bounds, and the need to heed them. Commands the necessary godfearingness towards Allah Most High, and gives fair warning of the price of neglecting it",
  },
  {
    chapterNumber: 66,
    chapterName: "THE FORSWEARING",
    description:
      "Reminds those who would succeed forever to have the most pleasing manners with Allah Most High, His messenger (Allah bless him and give him peace), and all His created slaves. Calls to the high personal attributes praised by Sacred Law, and kind chivalrous dealings with everyone, especially women. Warns of the penalty in the here and hereafter for those who do not, even if they are the very family members of the greatest of the saved, as was the wife of Noah (upon him be peace). And urges repentance to the depths of the soul, so as to triumph by entering paradise along with the Prophet (Allah bless him and give him peace), as those will who do these things, even if they are the very family members of an insufferably haughty tyrant, as was the wife of Pharaoh.",
  },
  {
    chapterNumber: 67,
    chapterName: "SOVEREIGNTY",
    description:
      "Vindicates the supreme Sovereignty of Him in whose hand alone is the power to create or destroy. Clarifies the ceaseless fountain of blessings flowing from this sovereignty that entail affirming its pure Oneness, and the thanks worship, and humility due for it, which is why He created human beings and shall repay them their works, for good or ill, when they are raised up again. For He is the Invincibly Powerful against His foes, and the All-forgiving to His friends and to anyone who repents in time.",
  },
  {
    chapterNumber: 68,
    chapterName: "THE PEN",
    description:
      "Affirms that the Prophet (Allah bless him and give him peace) is no madman, nor his Quran a lie, as unbelievers claim, but rather a messenger from Allah Himself, the highest of mankind in character, whose Book remains a remindance unto all generations of mankind. Strengthens the resolve of the Prophet and those with him to outlast adversity and walk the path unthwarted. Warns those of influence and wealth who pit themselves against him of their irremediable ruin in this world and the next.",
  },
  {
    chapterNumber: 69,
    chapterName: "THE INDISPUTABLE",
    description:
      "Clarifies that Resurrection Day will inevitably take place. All shall be devastated by it who cry it lies, as the Lord of all Worlds of Beings attests in the Quran that He has sent down as an earthshaking reminder to mankind. People that day shall either be joyous believer who sent ahead true faith and spiritual works for himself, or disbeliever in shocked dismay that he did neither.",
  },
  {
    chapterNumber: 70,
    chapterName: "THE ASCENDING PATHWAYS",
    description:
      "Confirms the Resurrection and its terrors for deniers only eager for the pathetic life of this world. Emphasizes the indescribable magnificence of the One who alone could create everything, and that whatever He wills instantly is. Describes the next world's limitless bliss in groves of paradise beyond number for those who kept Allah's bounds and worked.",
  },
  {
    chapterNumber: 71,
    chapterName: "NOAH",
    description:
      "Stanchions those who call Man to Allah by the example of Noah (upon him be blessings and peace), in both the right way and the tenacity needed. Warns idolators misled by heads of unbelief that Allah alone deserves worship, and has the utter power to do away with them and bring a better people in their stead.",
  },
  {
    chapterNumber: 72,
    chapterName: "THE JINN",
    description:
      "Shows the Quran was sent down by Allah Most High, and reveals its sovereign nobility, enjoining deniers to believe in it, just as the jinn believed in it and attested to its truth the very first time they heard it, though they were from another world. Discloses the jinn's reality, what can be surmised about them, and the help some people hope to gain from them that they have no power to deliver.",
  },
  {
    chapterNumber: 73,
    chapterName: "THE ENWRAPPED",
    description:
      "Elucidates that sincere spiritual works, especially the night vigil prayer, are the best provision for the adversity and difficulties faced in calling others to true faith, and for avoiding the horrors of the Day of Resurrection. Warns those who deny the Prophet (Allah bless him and give him peace) that the event impends.",
  },
  {
    chapterNumber: 74,
    chapterName: "THE CLOAKED",
    description:
      "Urges great striving and efforts to warn whoever denies the Quran, mocks it or turns from it and from the divine Oneness, that there is a horrific chastisement for doing so in the next world.",
  },
  {
    chapterNumber: 75,
    chapterName: "THE RESURRECTION",
    description:
      "Describes the reality of Resurrection Day and its frightful perils. Praises and gives glad tidings to the great Soul ever self-blaming which is the only soul that will benefit from the Resurrection, because it taxed itself to work and prepare for it. Blames, warns, and rebuts anyone who denies it, or is in love with the fleeting luster of this sad world, or who stubbornly mocks the end of days.",
  },
  {
    chapterNumber: 76,
    chapterName: "MAN",
    description:
      "Calls Man to believe, be thankful, indomitable of patience, and show mercy to his fellow human beings. Reminds him whence he came into being and the blessings of Allah Most High upon him. And that he was created on earth to undergo trials and tests. Uplifts his determination to succeed at them by considering both the beauties of everlasting paradise, and endless misery of those who fail through wronging others, unbelief, and sin.",
  },
  {
    chapterNumber: 77,
    chapterName: "THE WINDS UNLEASHED",
    description:
      "ixen br sd Confirms the Day of Resurrection and raising of the dead. Warns those who cry it lies of the shattering consequences in this world and the next. Makes the hearts of the godfearing desirous of the grace and honor shown to the successful by Allah Most High in the next world through their unimaginable existence there and happiness forever.",
  },
  {
    chapterNumber: 78,
    chapterName: "THE TIDING",
    description:
      "Proves by telling signs and reasons that Resurrection Day is bound to come.",
  },
  {
    chapterNumber: 79,
    chapterName: "THE SOUL-RENDERS",
    description:
      "Affirms the Day of Resurrection and answers deniers. Warns those with no limits to their selfish desires and who deny being raised alive again of the shocking speed with which life will end, the absolute devastation to come, and of finding themselves on a plain where none would dare fall asleep. Urges to be prepared, by the awe and dread of Allah, by watching oneself, by checking headstrong impulse, and by fear of just how one could be judged.",
  },
  {
    chapterNumber: 80,
    chapterName: "HE FROWNED",
    description:
      "Teaches those calling people to Allah of the reality of the Quran's summons, and that its insuperable greatness entails conveying it to any who might answer.",
  },
  {
    chapterNumber: 81,
    chapterName: "THE FINAL ENWRAPPING",
    description:
      "Unconditionally threatens a Promised Day when the cosmos will be undone. Affirms the Truth of the divine inspiration that conveys this, which is plain from the attributes and veracity of Gabriel who brought the message, and the Prophet (Allah bless him and give him peace) who received it.",
  },
  {
    chapterNumber: 82,
    chapterName: "THE SHATTERING",
    description:
      "Blasts a clarion call against unbelief and going blindly on committing sins, deluded by the forbearance of Allah and forgetting the Day of Reckoning, when the universe shall split asunder, tombs spill forth their contents, and men be taken to task for everything great or small they ever did. Shall separate those who pursued the good pleasure of the Divine through all kinds of works, forever to abide in paradise; from the prodigally wicked, forever to abide in the fire by the sentence of Allah Most High.",
  },
  {
    chapterNumber: 83,
    chapterName: "THE STINTERS",
    description:
      "Draws aside the veil from the divinely just balance-scale on which men will be weighed. Its results will send stubborn disbelieving criminals who stinted people their due in this world to the abode of the raging blaze. And believers devoted to Allah in all works of good to the abode of supreme bliss, all the greater for their undaunted patience with the ill-use of others and hardship in this world.",
  },
  {
    chapterNumber: 84,
    chapterName: "THE SPLITTING ASUNDER",
    description:
      "Calls Man to submit his entire being to the glory of Allah Most High, and condemns unbelievers for failing to. For mankind will necessarily be divided into those of endless joy, and those of utter regret; on a day when sky, earth, and men can but bow to His command.",
  },
  {
    chapterNumber: 85,
    chapterName: "CONSTELLATIONS",
    description:
      "Reveals that Allah Most High, the Creator of the Constellations and ever present witness to everything, shall seize with indomitable might the unbelievers who persecute those of His protection and love, both in this world and on the Promised Day of the next. Tells those who believe to take heart and bear with adversity, for they shall be encompassed in happiness forever.",
  },
  {
    chapterNumber: 86,
    chapterName: "THE NIGHTCOMER",
    description:
      "Apprises Man his works are unerringly counted, particularly the denial of disbelievers and their guile. He shall unfailingly be raised up on a day when his most secret thoughts and deeds will be brought out openly and judged, with believers shown bliss and unbelievers punished, effortlessly throug Allah's infinite power.",
  },
  {
    chapterNumber: 87,
    chapterName: "THE MOST HIGH",
    description:
      "Commands all to transcendently exalt and know the Oneness of the Most High. He is who bestows all worldly and spiritual blessings, the greatest which is being given the Ouran, and ongoing success in following the divin Way of utmost ease. Encourages purifying the soul to its fullest spirin growth, and preferring the everlasting life of the next world to the me appearances of this. Clarifies the consummate success of those who respon and failure forever of those who will not.",
  },
  {
    chapterNumber: 88,
    chapterName: "THE WHELMING D0OM",
    description:
      "Confirms the existence of the next life which the Whelming Doom sha inaugurate, and attests to Allah's sovereign power to effect it. Describes wha it holds for both the godfearing and him who shall meet with unending woe to motivate the former and dissuade the latter.niabid o",
  },
  {
    chapterNumber: 89,
    chapterName: "THE DWN",
    description:
      "Urges to do one's utmost in the worship of Allah Most High. Works that benefit one in the abode of forever, particularly at times He has made especially blessed, and giving others their due, and mercy to the weak and poor, lead to honor in this world and the next. One should never be fooled by worldly advantage and power, which leads to transgression, corruptness and devouring others' rights, and ends in regret and punishment here and hereafter",
  },
  {
    chapterNumber: 90,
    chapterName: "THE CITY",
    description:
      "Tells Man he is in the infinite power of Allah Most High, and caught in manifest hardship at every stage of life. Yet there is a path to be delivered from it that leads to happiness without end in a world everlasting, which is that of true faith and being a mercy to others; while all other contrary paths but lead to endless misery.",
  },
  {
    chapterNumber: 91,
    chapterName: "THE SUN",
    description:
      "Encourages to purify the soul through true faith in Allah Most High, the Creator who alone has sway over the universe, and in His messengers (upon whom be blessings and peace). Warns against interring it alive in evil. For whoever purifies it succeeds forever, and whoever buries it in evil fails forever.",
  },
  {
    chapterNumber: 92,
    chapterName: "THE NIGHT",
    description:
      "Affirms the omnipotent power of Allah Most High. It eases the way of the godfearing person who spends of his wealth in charity unto complete ease and eases the path of him who cries lies and stingily withholds with the tight with believers shown bliss and unbelievers punished, effortlessly throug Allah's infinite power.",
  },
  {
    chapterNumber: 93,
    chapterName: "THE BLAZING MORNING",
    description:
      "nforms the Prophet (Allah bless him and give him peace) that he shall necessarily and forever enjoy the supreme good pleasure and honor of the pivine in this world and the next, for the attributes of human perfection that he has been graced with. Encourages him thereby, strengthens his solid resolve to call everyone to Allah, and commands him to show gratitude for the blessing of prophethood, by doing his best for all.",
  },
  {
    chapterNumber: 94,
    chapterName: "OPEN BREAST",
    description:
      "Relieves the burdens on the Prophet (Allah bless him and give him peace) in calling men to Allah by promising that ease will follow. Reminds him that with hardship comes utter ease, and of the ease that came before, and how it can be attained by those coming after.",
  },
  {
    chapterNumber: 95,
    chapterName: "THE FIG",
    description:
      "Reminds Man of his divinely bestowed talents and his advantages in this world and that to come. He has been created in the fairest symmetry of all created beings, and the Justest of judges shall rule fairly between the recompense of him who believes and is undyingly grateful, and him who returns despite these favors to the lowest of the despicably low.",
  },
  {
    chapterNumber: 96,
    chapterName: "CELL-MASSES CLINGING",
    description:
      "Commands all to humbly worship Him who has shown Man such incomparable blessings as the blessing of being created, or being given knowledge after ignorance. Bids to persevere in showing gratitude for His favor despite anyone who transgresses and sets himself above need for faith or the Divine. The latter should know to his peril he will be punished in this world before being returned to a Lord who knows him best and what he merits as an end.",
  },
  {
    chapterNumber: 97,
    chapterName: "DESTINY",
    description:
      "Stresses the divine bounty and incomparable worth of the Night of Destiny and the lofty rank of the Quran sent down on that night, in reply to all who deny while knowing better that it is from Allah Most High.",
  },
  {
    chapterNumber: 98,
    chapterName: "THE LIVING CLEAR PROOF",
    description:
      "Refers to the Living Proof, namely the Messenger (Allah bless him and give him peace) who recites leaves of divine inspiration exalted in worth and tremendous of truth. Exhorts the two previous peoples of the Book, Jew and Christian, to love him in order to be loosed from the bonds of the misguidance that has accrued through the centuries to both their received traditions and extinguished the original message. Condemns those of them who cry lies to the revelation, and warns them of the blame and chastisemen they thereby incur. And reioices whoever embraces it with tremendous glad tidings and high honor from the Divine.",
  },
  {
    chapterNumber: 99,
    chapterName: "THE EARTHQUAKE",
    description:
      "Warns of the horrific shaking of the earth, and the uncovering of its burdens and its convulsively throwing up its dead, with their works; to the utter shock of mankind, who shall find themselves blessedly saved or wretchedly damned.",
  },
  {
    chapterNumber: 100,
    chapterName: "THE BATTLE-CHARGERS",
    description:
      "Threatens every thankless grasping ingrate obsessed with gaining ever more wealth in this world and preferring this to his own everlasting advantage with sudden fatal destruction unpreceded by any respite. The contents of his grave will be flung out at the advent of the next world, when the secrets harbored within his breast shall be drawn wholly forth for an unerring reckoning with an all-powerful Lord.",
  },
  {
    chapterNumber: 101,
    chapterName: "THE HAMMERER",
    description:
      "Depicts the shaking horror of the Hammerer. with its dire effect on mountains and on men, who shall be divided between those saved and those forever lost.",
  },
  {
    chapterNumber: 102,
    chapterName: "COMPETING FOR WORLDLY GAIN",
    description:
      "Upbraids and warns mankind against fooling themselves by competing with each other over mere wealth and children, and the fatal consequences it leads to.",
  },
  {
    chapterNumber: 103,
    chapterName: "END OF THE DAY",
    description:
      "Urges that at the end of the day most of mankind are in utter ruinous loss. having wasted the most precious advantage of life, namely time; and clarifies who alone can be saved and by what means.",
  },
  {
    chapterNumber: 104,
    chapterName: "THE SLANDERER",
    description:
      "Inexorably menaces those who tear to pieces the reputations of others, and whose haughty pride in money, piling it up, and hiding it away under lock and key from those who should be given it moves them to forget the devastating woe of the next world, where they shall meet with the like of what they did to others in this. vinen 3oow't anbvit a",
  },
  {
    chapterNumber: 105,
    chapterName: "THE War elephaANT",
    description:
      "vis to zevasl ralios orwst min Warns Quraysh and others deluded by their martial zeal in fighting the Prophet (Allah bless him and give him peace) that they shall be destroyed like those of the War Elephant. dyoorh be woth",
  },
  {
    chapterNumber: 106,
    chapterName: "QURAYSH",
    description:
      "Calls Quraysh to worship the Lord of the Sacred House alone, for it is He who has shown them the singular blessing of being made familiarly fond of going rogether on their sacredly-protected trade caravans, and saved them from dread hunger and fear.",
  },
  {
    chapterNumber: 107,
    chapterName: "SIMLEST HOUSEHOLD THINGS",
    description:
      "stresses the peril of harming the weak, withholding their rights, being hard hearted towards them, of mean sordid cheapness, and not fulfilling the due of Allah in one's prayer. These are the despicable attributes of those who cry lies to the Day of Reckoning.",
  },
  {
    chapterNumber: 108,
    chapterName: "ABUNDANCE",
    description:
      "Gives joy and reassurance to the Prophet (Allah bless him and give him peace) of vast and ever-increasing good in this world and the next, and of the destruction of his enemies, and commands him to give thanks for this blessing and pay them no mind.",
  },
  {
    chapterNumber: 109,
    chapterName: "UNBELIEVERS",
    description:
      "Draws the indelible line of demarcation between Islam on the one hand, and unbelief, worshipping others with Allah, and those who do these, on the other, through the clear alternative of faith in the Oneness of Allah.",
  },
  {
    chapterNumber: 110,
    chapterName: "VICTORIOUS HELP",
    description:
      "Apprises the Prophet (Allah bless him and give him peace) of the final consummate completion of the religion beyond needing anything further. It came by the victorious help of Allah and the signal conquest that has brought about the extinction of idol worship. And what he should do accordingly, with a hint that his earthly life will soon draw to its full term.",
  },
  {
    chapterNumber: 111,
    chapterName: "TIGHT-WOUND FIBER",
    description:
      "Underlines the categorical and ruinous loss of those who pit themselves against the religion or abet others who do. And that nothing can avail them, no matter how closely related by blood they are to the most successful of mankind, for Abu Lahab was brother to the father of the Prophet (Allah bless him and give him peace).",
  },
  {
    chapterNumber: 112,
    chapterName: "SINCERITY",
    description:
      "Discloses the reality of the Supreme Being of the Divine and what true sincerity to Him means; and that He alone comprises all perfections and godhood, and is wholly exalted above any lack.",
  },
  {
    chapterNumber: 113,
    chapterName: "DAYBREAK",
    description:
      "Teaches Muslims to hold unyieldingly fast to the indomitable might of Allah Most High from every evil, especially evils none can stem but He.",
  },
  {
    chapterNumber: 114,
    chapterName: "MEN",
    description:
      "Teaches Muslims the utter essence of slavehood: to recur to Allah alone protection against the evil of doubts sown in hearts by cunning words Warns them of the deadly evil of such misgivings, whose spreaders ar both jinn and men.",
  },
];

export const FIRST_SURAH: ISurahInfo = SURAHS_INFO[0];
export const LAST_SURAH: ISurahInfo = SURAHS_INFO[SURAHS_INFO.length - 1];

export interface ISurah {
  nextSurah: number;
  nextAyah: number;
}
export class CSurah {
  public static getNextSurah(currentSurah: number): number {
    return currentSurah === LAST_SURAH.surahNumber
      ? FIRST_SURAH.surahNumber
      : currentSurah + 1;
  }
  public static getPrevSurah(currentSurah: number): number {
    return currentSurah === FIRST_SURAH.surahNumber
      ? LAST_SURAH.surahNumber
      : currentSurah - 1;
  }
  public static shouldAddBismi(chapterNumber: number, verseNumber: number) {
    return verseNumber === 1 && chapterNumber !== 1 && chapterNumber !== 9;
  }
}
