export interface ISurahInfo {
  surahNumber: number;
  arabicName: string;
  englishName: string;
  placeOfRevelation: string;
  versesCount: number;
  englishTranslatedName: string;
  "audioFile": {
    [key in string] : string;
  }

}

export const SURAHS_INFO: Array<ISurahInfo> = [
	{
		surahNumber: 1,
		arabicName: 'ٱلْفَاتِحَة',
		englishName: 'al-Fātiḥah',
		placeOfRevelation: 'Makkah',
		versesCount: 7,
		englishTranslatedName: 'The Opener',
		audioFile: {
			'Sameer Nass': '1-سورة الفاتحة.mp3'
		}
	},
	{
		surahNumber: 2,
		arabicName: 'ٱلْبَقَرَة',
		englishName: 'al-Baq̈arah',
		placeOfRevelation: 'Madeenah',
		versesCount: 286,
		englishTranslatedName: 'The Cow',
		audioFile: {
			'Sameer Nass': '2-سورة البقرة.mp3'
		}
	},
	{
		surahNumber: 3,
		arabicName: 'آلِ عِمْرَان',
		englishName: 'ʾĀli ʿImrān',
		placeOfRevelation: 'Madeenah',
		versesCount: 200,
		englishTranslatedName: 'Family of Imran',
		audioFile: {
			'Sameer Nass': '3-سورة آل عمران.mp3'
		}
	},
	{
		surahNumber: 4,
		arabicName: 'ٱلنِّسَاء',
		englishName: 'an-Nisāʾ',
		placeOfRevelation: 'Madeenah',
		versesCount: 176,
		englishTranslatedName: 'The Women',
		audioFile: {
			'Sameer Nass': '4-سورة النساء.mp3'
		}
	},
	{
		surahNumber: 5,
		arabicName: 'ٱلْمَائِدَة',
		englishName: 'al-Māʾidah',
		placeOfRevelation: 'Madeenah',
		versesCount: 120,
		englishTranslatedName: 'The Table Spread',
		audioFile: {
			'Sameer Nass': '5-سورة المائدة.mp3'
		}
	},
	{
		surahNumber: 6,
		arabicName: 'ٱلْأَنْعَام',
		englishName: 'al-ʾAnʿām',
		placeOfRevelation: 'Makkah',
		versesCount: 165,
		englishTranslatedName: 'The Cattle',
		audioFile: {
			'Sameer Nass': '6-سورة الأنعام.mp3'
		}
	},
	{
		surahNumber: 7,
		arabicName: 'ٱلْأَعْرَاف',
		englishName: 'al-ʾAʿrāf',
		placeOfRevelation: 'Makkah',
		versesCount: 206,
		englishTranslatedName: 'The Heights',
		audioFile: {
			'Sameer Nass': '7-سورة الأعراف.mp3'
		}
	},
	{
		surahNumber: 8,
		arabicName: 'ٱلْأَنْفَال',
		englishName: 'al-ʾAnfāl',
		placeOfRevelation: 'Madeenah',
		versesCount: 75,
		englishTranslatedName: 'The Spoils of War',
		audioFile: {
			'Sameer Nass': '8-سورة الأنفال.mp3'
		}
	},
	{
		surahNumber: 9,
		arabicName: 'ٱلتَّوْبَة',
		englishName: 'at-Tawbah',
		placeOfRevelation: 'Madeenah',
		versesCount: 129,
		englishTranslatedName: 'The Repentance',
		audioFile: {
			'Sameer Nass': '9-سورة التوبة.mp3'
		}
	},
	{
		surahNumber: 10,
		arabicName: 'يُونُس',
		englishName: 'Yūnus',
		placeOfRevelation: 'Makkah',
		versesCount: 109,
		englishTranslatedName: 'Jonah',
		audioFile: {
			'Sameer Nass': '10-سورة يونس.mp3'
		}
	},
	{
		surahNumber: 11,
		arabicName: 'هُود',
		englishName: 'Hūd',
		placeOfRevelation: 'Makkah',
		versesCount: 123,
		englishTranslatedName: 'Hud',
		audioFile: {
			'Sameer Nass': '11-سورة هود.mp3'
		}
	},
	{
		surahNumber: 12,
		arabicName: 'يُوسُف',
		englishName: 'Yūsuf',
		placeOfRevelation: 'Makkah',
		versesCount: 111,
		englishTranslatedName: 'Joseph',
		audioFile: {
			'Sameer Nass': '12-سورة يوسف.mp3'
		}
	},
	{
		surahNumber: 13,
		arabicName: 'ٱلرَّعْد',
		englishName: 'ar-Raʿd',
		placeOfRevelation: 'Madeenah',
		versesCount: 43,
		englishTranslatedName: 'The Thunder',
		audioFile: {
			'Sameer Nass': '13-سورة الرعد.mp3'
		}
	},
	{
		surahNumber: 14,
		arabicName: 'إِبْرَاهِيم',
		englishName: 'ʾIbrāhīm',
		placeOfRevelation: 'Makkah',
		versesCount: 52,
		englishTranslatedName: 'Abraham',
		audioFile: {
			'Sameer Nass': '14-سورة ابراهيم.mp3'
		}
	},
	{
		surahNumber: 15,
		arabicName: 'ٱلْحِجْر',
		englishName: 'al-Ḥijr',
		placeOfRevelation: 'Makkah',
		versesCount: 99,
		englishTranslatedName: 'The Rocky Tract',
		audioFile: {
			'Sameer Nass': '15-سورة الحجر.mp3'
		}
	},
	{
		surahNumber: 16,
		arabicName: 'ٱلنَّحْل',
		englishName: 'an-Naḥl',
		placeOfRevelation: 'Makkah',
		versesCount: 128,
		englishTranslatedName: 'The Bee',
		audioFile: {
			'Sameer Nass': '16-سورة النحل.mp3'
		}
	},
	{
		surahNumber: 17,
		arabicName: 'ٱلْإِسْرَاء',
		englishName: 'al-ʾIsrāʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 111,
		englishTranslatedName: 'The Night Journey',
		audioFile: {
			'Sameer Nass': '17-سورة الإسراء.mp3'
		}
	},
	{
		surahNumber: 18,
		arabicName: 'ٱلْكَهْف',
		englishName: 'al-Kahf',
		placeOfRevelation: 'Makkah',
		versesCount: 110,
		englishTranslatedName: 'The Cave',
		audioFile: {
			'Sameer Nass': '18-سورة الكهف.mp3'
		}
	},
	{
		surahNumber: 19,
		arabicName: 'مَرْيَم',
		englishName: 'Maryam',
		placeOfRevelation: 'Makkah',
		versesCount: 98,
		englishTranslatedName: 'Mary',
		audioFile: {
			'Sameer Nass': '19-سورة مريم.mp3'
		}
	},
	{
		surahNumber: 20,
		arabicName: 'طه',
		englishName: 'Ṭāʾ Hāʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 135,
		englishTranslatedName: 'Ta-Ha',
		audioFile: {
			'Sameer Nass': '20-سورة طه.mp3'
		}
	},
	{
		surahNumber: 21,
		arabicName: 'ٱلْأَنْبِيَاء',
		englishName: 'al-ʾAnbiyāʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 112,
		englishTranslatedName: 'The Prophets',
		audioFile: {
			'Sameer Nass': '21-سورة الأنبياء.mp3'
		}
	},
	{
		surahNumber: 22,
		arabicName: 'ٱلْحَجّ',
		englishName: 'al-Ḥajj',
		placeOfRevelation: 'Madeenah',
		versesCount: 78,
		englishTranslatedName: 'The Pilgrimage',
		audioFile: {
			'Sameer Nass': '22-سورة الحج.mp3'
		}
	},
	{
		surahNumber: 23,
		arabicName: 'ٱلْمُؤْمِنُون',
		englishName: 'al-Muʾminūn',
		placeOfRevelation: 'Makkah',
		versesCount: 118,
		englishTranslatedName: 'The Believers',
		audioFile: {
			'Sameer Nass': '23-سورة المؤمنون.mp3'
		}
	},
	{
		surahNumber: 24,
		arabicName: 'ٱلنُّور',
		englishName: 'an-Nūr',
		placeOfRevelation: 'Madeenah',
		versesCount: 64,
		englishTranslatedName: 'The Light',
		audioFile: {
			'Sameer Nass': '24-سورة النور.mp3'
		}
	},
	{
		surahNumber: 25,
		arabicName: 'ٱلْفُرْقَان',
		englishName: 'al-Furq̈ān',
		placeOfRevelation: 'Makkah',
		versesCount: 77,
		englishTranslatedName: 'The Criterion',
		audioFile: {
			'Sameer Nass': '25-سورة الفرقان.mp3'
		}
	},
	{
		surahNumber: 26,
		arabicName: 'ٱلشُّعَرَاء',
		englishName: 'aš-Šuʿarāʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 227,
		englishTranslatedName: 'The Poets',
		audioFile: {
			'Sameer Nass': '26-سورة الشعراء.mp3'
		}
	},
	{
		surahNumber: 27,
		arabicName: 'ٱلنَّمْل',
		englishName: 'an-Naml',
		placeOfRevelation: 'Makkah',
		versesCount: 93,
		englishTranslatedName: 'The Ant',
		audioFile: {
			'Sameer Nass': '27-سورة النمل.mp3'
		}
	},
	{
		surahNumber: 28,
		arabicName: 'ٱلْقَصَص',
		englishName: 'al-Q̈aṣaṣ',
		placeOfRevelation: 'Makkah',
		versesCount: 88,
		englishTranslatedName: 'The Stories',
		audioFile: {
			'Sameer Nass': '28-سورة القصص.mp3'
		}
	},
	{
		surahNumber: 29,
		arabicName: 'ٱلْعَنْكَبُوت',
		englishName: 'al-ʿAnkabūt',
		placeOfRevelation: 'Makkah',
		versesCount: 69,
		englishTranslatedName: 'The Spider',
		audioFile: {
			'Sameer Nass': '29-سورة العنكبوت.mp3'
		}
	},
	{
		surahNumber: 30,
		arabicName: 'ٱلرُّوم',
		englishName: 'ar-Rūm',
		placeOfRevelation: 'Makkah',
		versesCount: 60,
		englishTranslatedName: 'The Romans',
		audioFile: {
			'Sameer Nass': '30-سورة الروم.mp3'
		}
	},
	{
		surahNumber: 31,
		arabicName: 'لُقْمَان',
		englishName: 'Luq̈mān ',
		placeOfRevelation: 'Makkah',
		versesCount: 34,
		englishTranslatedName: 'Luqman',
		audioFile: {
			'Sameer Nass': '31-سورة لقمان.mp3'
		}
	},
	{
		surahNumber: 32,
		arabicName: 'ٱلسَّجْدَة',
		englishName: 'as-Sajdah',
		placeOfRevelation: 'Makkah',
		versesCount: 30,
		englishTranslatedName: 'The Prostration',
		audioFile: {
			'Sameer Nass': '32-سورة السجدة.mp3'
		}
	},
	{
		surahNumber: 33,
		arabicName: 'ٱلْأَحْزَاب',
		englishName: 'al-ʾAḥzāb',
		placeOfRevelation: 'Madeenah',
		versesCount: 73,
		englishTranslatedName: 'The Combined Forces',
		audioFile: {
			'Sameer Nass': '33-سورة الأحزاب.mp3'
		}
	},
	{
		surahNumber: 34,
		arabicName: 'سَبَأ',
		englishName: 'Sabaʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 54,
		englishTranslatedName: 'Sheba',
		audioFile: {
			'Sameer Nass': '34-سورة سبأ.mp3'
		}
	},
	{
		surahNumber: 35,
		arabicName: 'فَاطِر',
		englishName: 'Fāṭir',
		placeOfRevelation: 'Makkah',
		versesCount: 45,
		englishTranslatedName: 'Originator',
		audioFile: {
			'Sameer Nass': '35-سورة فاطر.mp3'
		}
	},
	{
		surahNumber: 36,
		arabicName: 'يس',
		englishName: 'Yāʾ Sīn',
		placeOfRevelation: 'Makkah',
		versesCount: 83,
		englishTranslatedName: 'Ya Sin',
		audioFile: {
			'Sameer Nass': '36-سورة يس.mp3'
		}
	},
	{
		surahNumber: 37,
		arabicName: 'ٱلصَّافَّات',
		englishName: 'aṣ-Ṣāffāt',
		placeOfRevelation: 'Makkah',
		versesCount: 182,
		englishTranslatedName: 'Those who set the Ranks',
		audioFile: {
			'Sameer Nass': '37-سورة الصافات.mp3'
		}
	},
	{
		surahNumber: 38,
		arabicName: 'ص',
		englishName: 'Ṣād',
		placeOfRevelation: 'Makkah',
		versesCount: 88,
		englishTranslatedName: 'The Letter "Saad"',
		audioFile: {
			'Sameer Nass': '38-سورة ص.mp3'
		}
	},
	{
		surahNumber: 39,
		arabicName: 'ٱلزُّمَر',
		englishName: 'az-Zumar',
		placeOfRevelation: 'Makkah',
		versesCount: 75,
		englishTranslatedName: 'The Troops',
		audioFile: {
			'Sameer Nass': '39-سورة الزمر.mp3'
		}
	},
	{
		surahNumber: 40,
		arabicName: 'غَافِر',
		englishName: 'Ghafir',
		placeOfRevelation: 'Makkah',
		versesCount: 85,
		englishTranslatedName: 'The Forgiver',
		audioFile: {
			'Sameer Nass': '40-سورة غافر.mp3'
		}
	},
	{
		surahNumber: 41,
		arabicName: 'فُصِّلَت',
		englishName: 'Fuṣṣilat',
		placeOfRevelation: 'Makkah',
		versesCount: 54,
		englishTranslatedName: 'Explained in Detail',
		audioFile: {
			'Sameer Nass': '41-سورة فصلت.mp3'
		}
	},
	{
		surahNumber: 42,
		arabicName: 'ٱلشُّورىٰ',
		englishName: 'aš-Šūrā',
		placeOfRevelation: 'Makkah',
		versesCount: 53,
		englishTranslatedName: 'The Consultation',
		audioFile: {
			'Sameer Nass': '42-سورة الشورى.mp3'
		}
	},
	{
		surahNumber: 43,
		arabicName: 'ٱلْزُّخْرُف',
		englishName: 'az-Zukhruf',
		placeOfRevelation: 'Makkah',
		versesCount: 89,
		englishTranslatedName: 'The Ornaments of Gold',
		audioFile: {
			'Sameer Nass': '43-سورة الزخرف.mp3'
		}
	},
	{
		surahNumber: 44,
		arabicName: 'ٱلدُّخَان',
		englishName: 'ad-Dukhān',
		placeOfRevelation: 'Makkah',
		versesCount: 59,
		englishTranslatedName: 'The Smoke',
		audioFile: {
			'Sameer Nass': '44-سورة الدخان.mp3'
		}
	},
	{
		surahNumber: 45,
		arabicName: 'ٱلْجَاثِيَة',
		englishName: 'al-Jāthiyah',
		placeOfRevelation: 'Makkah',
		versesCount: 37,
		englishTranslatedName: 'The Crouching',
		audioFile: {
			'Sameer Nass': '45-سورة الجاثية.mp3'
		}
	},
	{
		surahNumber: 46,
		arabicName: 'ٱلْأَحْقَاف',
		englishName: 'al-ʾAḥq̈āf',
		placeOfRevelation: 'Makkah',
		versesCount: 35,
		englishTranslatedName: 'The Wind-Curved Sandhills',
		audioFile: {
			'Sameer Nass': '46-سورة الأحقاف.mp3'
		}
	},
	{
		surahNumber: 47,
		arabicName: 'مُحَمَّد',
		englishName: 'Muḥammad',
		placeOfRevelation: 'Madeenah',
		versesCount: 38,
		englishTranslatedName: 'Muhammad',
		audioFile: {
			'Sameer Nass': '47-سورة سيدنا محمد ﷺ.mp3'
		}
	},
	{
		surahNumber: 48,
		arabicName: 'ٱلْفَتْح',
		englishName: 'al-Fatḥ',
		placeOfRevelation: 'Madeenah',
		versesCount: 29,
		englishTranslatedName: 'The Victory',
		audioFile: {
			'Sameer Nass': '48-سورة الفتح.mp3'
		}
	},
	{
		surahNumber: 49,
		arabicName: 'ٱلْحُجُرَات',
		englishName: 'al-Ḥujurāt',
		placeOfRevelation: 'Madeenah',
		versesCount: 18,
		englishTranslatedName: 'The Rooms',
		audioFile: {
			'Sameer Nass': '49-سورة الحجرات.mp3'
		}
	},
	{
		surahNumber: 50,
		arabicName: 'ق',
		englishName: 'Q̈āf',
		placeOfRevelation: 'Makkah',
		versesCount: 45,
		englishTranslatedName: 'The Letter "Qaf"',
		audioFile: {
			'Sameer Nass': '50-سورة ق.mp3'
		}
	},
	{
		surahNumber: 51,
		arabicName: 'ٱلذَّارِيَات',
		englishName: 'aḏ-Ḏāriyāt',
		placeOfRevelation: 'Makkah',
		versesCount: 60,
		englishTranslatedName: 'The Winnowing Winds',
		audioFile: {
			'Sameer Nass': '51-سورة الذاريات.mp3'
		}
	},
	{
		surahNumber: 52,
		arabicName: 'ٱلطُّور',
		englishName: 'aṭ-Ṭūr',
		placeOfRevelation: 'Makkah',
		versesCount: 49,
		englishTranslatedName: 'The Mount',
		audioFile: {
			'Sameer Nass': '52-سورة الطور.mp3'
		}
	},
	{
		surahNumber: 53,
		arabicName: 'ٱلنَّجْم',
		englishName: 'an-Najm',
		placeOfRevelation: 'Makkah',
		versesCount: 62,
		englishTranslatedName: 'The Star',
		audioFile: {
			'Sameer Nass': '53-سورة النجم.mp3'
		}
	},
	{
		surahNumber: 54,
		arabicName: 'ٱلْقَمَر',
		englishName: 'al-Q̈amar',
		placeOfRevelation: 'Makkah',
		versesCount: 55,
		englishTranslatedName: 'The Moon',
		audioFile: {
			'Sameer Nass': '54-سورة القمر.mp3'
		}
	},
	{
		surahNumber: 55,
		arabicName: 'ٱلرَّحْمَٰن',
		englishName: 'ar-Raḥmān',
		placeOfRevelation: 'Madeenah',
		versesCount: 78,
		englishTranslatedName: 'The Beneficent',
		audioFile: {
			'Sameer Nass': '55-سورة الرحمن.mp3'
		}
	},
	{
		surahNumber: 56,
		arabicName: 'ٱلْوَاقِعَة',
		englishName: 'al-Wāqiʿah',
		placeOfRevelation: 'Makkah',
		versesCount: 96,
		englishTranslatedName: 'The Inevitable',
		audioFile: {
			'Sameer Nass': '56-سورة الواقعة.mp3'
		}
	},
	{
		surahNumber: 57,
		arabicName: 'ٱلْحَدِيد',
		englishName: 'al-Ḥadīd',
		placeOfRevelation: 'Madeenah',
		versesCount: 29,
		englishTranslatedName: 'The Iron',
		audioFile: {
			'Sameer Nass': '57-سورة الحديد.mp3'
		}
	},
	{
		surahNumber: 58,
		arabicName: 'ٱلْمُجَادِلَة',
		englishName: 'al-Mujādilah',
		placeOfRevelation: 'Madeenah',
		versesCount: 22,
		englishTranslatedName: 'The Pleading Woman',
		audioFile: {
			'Sameer Nass': '58-سورة المجادلة.mp3'
		}
	},
	{
		surahNumber: 59,
		arabicName: 'ٱلْحَشْر',
		englishName: 'al-Ḥašr',
		placeOfRevelation: 'Madeenah',
		versesCount: 24,
		englishTranslatedName: 'The Exile',
		audioFile: {
			'Sameer Nass': '59-سورة الحشر.mp3'
		}
	},
	{
		surahNumber: 60,
		arabicName: 'ٱلْمُمْتَحَنَة',
		englishName: 'al-Mumtaḥanah',
		placeOfRevelation: 'Madeenah',
		versesCount: 13,
		englishTranslatedName: 'She that is to be examined',
		audioFile: {
			'Sameer Nass': '60-سورة الممتحنة.mp3'
		}
	},
	{
		surahNumber: 61,
		arabicName: 'ٱلصَّفّ',
		englishName: 'aṣ-Ṣaff',
		placeOfRevelation: 'Madeenah',
		versesCount: 14,
		englishTranslatedName: 'The Ranks',
		audioFile: {
			'Sameer Nass': '61-سورة الصف.mp3'
		}
	},
	{
		surahNumber: 62,
		arabicName: 'ٱلْجُمُعَة',
		englishName: 'al-Jumuʿah',
		placeOfRevelation: 'Madeenah',
		versesCount: 11,
		englishTranslatedName: 'The Congregation, Friday',
		audioFile: {
			'Sameer Nass': '62-سورة الجمعة.mp3'
		}
	},
	{
		surahNumber: 63,
		arabicName: 'ٱلْمُنَافِقُون',
		englishName: 'al-Munāfiq̈ūn',
		placeOfRevelation: 'Madeenah',
		versesCount: 11,
		englishTranslatedName: 'The Hypocrites',
		audioFile: {
			'Sameer Nass': '63-سورة المنافقون.mp3'
		}
	},
	{
		surahNumber: 64,
		arabicName: 'ٱلتَّغَابُن',
		englishName: 'at-Taghābun',
		placeOfRevelation: 'Madeenah',
		versesCount: 18,
		englishTranslatedName: 'The Mutual Disillusion',
		audioFile: {
			'Sameer Nass': '64-سورة التغابن.mp3'
		}
	},
	{
		surahNumber: 65,
		arabicName: 'ٱلطَّلَاق',
		englishName: 'aṭ-Ṭalāq̈',
		placeOfRevelation: 'Madeenah',
		versesCount: 12,
		englishTranslatedName: 'The Divorce',
		audioFile: {
			'Sameer Nass': '65-سورة الطلاق.mp3'
		}
	},
	{
		surahNumber: 66,
		arabicName: 'ٱلتَّحْرِيم',
		englishName: 'at-Taḥrīm',
		placeOfRevelation: 'Madeenah',
		versesCount: 12,
		englishTranslatedName: 'The Prohibition',
		audioFile: {
			'Sameer Nass': '66-سورة التحريم.mp3'
		}
	},
	{
		surahNumber: 67,
		arabicName: 'ٱلْمُلْك',
		englishName: 'al-Mulk',
		placeOfRevelation: 'Makkah',
		versesCount: 30,
		englishTranslatedName: 'The Sovereignty',
		audioFile: {
			'Sameer Nass': '67-سورة الملك.mp3'
		}
	},
	{
		surahNumber: 68,
		arabicName: 'ٱلْقَلَم',
		englishName: 'al-Q̈alam',
		placeOfRevelation: 'Makkah',
		versesCount: 52,
		englishTranslatedName: 'The Pen',
		audioFile: {
			'Sameer Nass': '68-سورة القلم.mp3'
		}
	},
	{
		surahNumber: 69,
		arabicName: 'ٱلْحَاقَّة',
		englishName: 'al-Ḥāq̈q̈ah',
		placeOfRevelation: 'Makkah',
		versesCount: 52,
		englishTranslatedName: 'The Reality',
		audioFile: {
			'Sameer Nass': '69-سورة الحاقة.mp3'
		}
	},
	{
		surahNumber: 70,
		arabicName: 'ٱلْمَعَارِج',
		englishName: 'al-Maʿārij',
		placeOfRevelation: 'Makkah',
		versesCount: 44,
		englishTranslatedName: 'The Ascending Stairways',
		audioFile: {
			'Sameer Nass': '70-سورة المعارج.mp3'
		}
	},
	{
		surahNumber: 71,
		arabicName: 'نُوح',
		englishName: 'Nūḥ',
		placeOfRevelation: 'Makkah',
		versesCount: 28,
		englishTranslatedName: 'Noah',
		audioFile: {
			'Sameer Nass': '71-سورة نوح.mp3'
		}
	},
	{
		surahNumber: 72,
		arabicName: 'ٱلْجِنّ',
		englishName: 'al-Jinn',
		placeOfRevelation: 'Makkah',
		versesCount: 28,
		englishTranslatedName: 'The Jinn',
		audioFile: {
			'Sameer Nass': '72-سورة الجن.mp3'
		}
	},
	{
		surahNumber: 73,
		arabicName: 'ٱلْمُزَّمِّل',
		englishName: 'al-Muzzammil',
		placeOfRevelation: 'Makkah',
		versesCount: 20,
		englishTranslatedName: 'The Enshrouded One',
		audioFile: {
			'Sameer Nass': '73-سورة المزمل.mp3'
		}
	},
	{
		surahNumber: 74,
		arabicName: 'ٱلْمُدَّثِّر',
		englishName: 'al-Muddathir',
		placeOfRevelation: 'Makkah',
		versesCount: 56,
		englishTranslatedName: 'The Cloaked One',
		audioFile: {
			'Sameer Nass': '74-سورة المدثر.mp3'
		}
	},
	{
		surahNumber: 75,
		arabicName: 'ٱلْقِيَامَة',
		englishName: 'al-Q̈iyamah',
		placeOfRevelation: 'Makkah',
		versesCount: 40,
		englishTranslatedName: 'The Resurrection',
		audioFile: {
			'Sameer Nass': '75-سورة القيامة.mp3'
		}
	},
	{
		surahNumber: 76,
		arabicName: 'ٱلْإِنْسَان',
		englishName: 'al-ʾInsān',
		placeOfRevelation: 'Madeenah',
		versesCount: 31,
		englishTranslatedName: 'The Man',
		audioFile: {
			'Sameer Nass': '76-سورة الإنسان.mp3'
		}
	},
	{
		surahNumber: 77,
		arabicName: 'ٱلْمُرْسَلَات',
		englishName: 'al-Mursalāt',
		placeOfRevelation: 'Makkah',
		versesCount: 50,
		englishTranslatedName: 'The Emissaries',
		audioFile: {
			'Sameer Nass': '77-سورة المرسلات.mp3'
		}
	},
	{
		surahNumber: 78,
		arabicName: 'ٱلنَّبَأ',
		englishName: 'an-Nabaʾ',
		placeOfRevelation: 'Makkah',
		versesCount: 40,
		englishTranslatedName: 'The Tidings',
		audioFile: {
			'Sameer Nass': '78-سورة النبأ.mp3'
		}
	},
	{
		surahNumber: 79,
		arabicName: 'ٱلنَّازِعَات',
		englishName: 'an-Nāziʿāt',
		placeOfRevelation: 'Makkah',
		versesCount: 46,
		englishTranslatedName: 'Those who drag forth',
		audioFile: {
			'Sameer Nass': '79-سورة النازعات.mp3'
		}
	},
	{
		surahNumber: 80,
		arabicName: 'عَبَسَ',
		englishName: 'ʿAbasa',
		placeOfRevelation: 'Makkah',
		versesCount: 42,
		englishTranslatedName: 'He Frowned',
		audioFile: {
			'Sameer Nass': '80-سورة عبس.mp3'
		}
	},
	{
		surahNumber: 81,
		arabicName: 'ٱلتَّكْوِير',
		englishName: 'at-Takwīr',
		placeOfRevelation: 'Makkah',
		versesCount: 29,
		englishTranslatedName: 'The Overthrowing',
		audioFile: {
			'Sameer Nass': '81-سورة التكوير.mp3'
		}
	},
	{
		surahNumber: 82,
		arabicName: 'ٱلْإِنْفِطَار',
		englishName: 'al-ʾInfiṭār',
		placeOfRevelation: 'Makkah',
		versesCount: 19,
		englishTranslatedName: 'The Cleaving',
		audioFile: {
			'Sameer Nass': '82-سورة الانفطار.mp3'
		}
	},
	{
		surahNumber: 83,
		arabicName: 'ٱلْمُطَفِّفِين',
		englishName: 'al-Muṭaffifīn',
		placeOfRevelation: 'Makkah',
		versesCount: 36,
		englishTranslatedName: 'The Defrauding',
		audioFile: {
			'Sameer Nass': '83-سورة المطففين.mp3'
		}
	},
	{
		surahNumber: 84,
		arabicName: 'ٱلْإِنْشِقَاق',
		englishName: 'al-ʾInšiq̈āq̈',
		placeOfRevelation: 'Makkah',
		versesCount: 25,
		englishTranslatedName: 'The Sundering',
		audioFile: {
			'Sameer Nass': '84-سورة الانشقاق.mp3'
		}
	},
	{
		surahNumber: 85,
		arabicName: 'ٱلْبُرُوج',
		englishName: 'al-Burūj',
		placeOfRevelation: 'Makkah',
		versesCount: 22,
		englishTranslatedName: 'The Mansions of the Stars',
		audioFile: {
			'Sameer Nass': '85-سورة البروج.mp3'
		}
	},
	{
		surahNumber: 86,
		arabicName: 'ٱلطَّارِق',
		englishName: 'aṭ-Ṭāriq̈',
		placeOfRevelation: 'Makkah',
		versesCount: 17,
		englishTranslatedName: 'The Nightcommer',
		audioFile: {
			'Sameer Nass': '86-سورة الطارق.mp3'
		}
	},
	{
		surahNumber: 87,
		arabicName: 'ٱلْأَعْلَىٰ',
		englishName: 'al-ʾAʿlā',
		placeOfRevelation: 'Makkah',
		versesCount: 19,
		englishTranslatedName: 'The Most High',
		audioFile: {
			'Sameer Nass': '87-سورة الأعلى.mp3'
		}
	},
	{
		surahNumber: 88,
		arabicName: 'ٱلْغَاشِيَة',
		englishName: 'al-Ghāšiyah',
		placeOfRevelation: 'Makkah',
		versesCount: 26,
		englishTranslatedName: 'The Overwhelming',
		audioFile: {
			'Sameer Nass': '88-سورة الغاشية.mp3'
		}
	},
	{
		surahNumber: 89,
		arabicName: 'ٱلْفَجْر',
		englishName: 'al-Fajr',
		placeOfRevelation: 'Makkah',
		versesCount: 30,
		englishTranslatedName: 'The Dawn',
		audioFile: {
			'Sameer Nass': '89-سورة الفجر.mp3'
		}
	},
	{
		surahNumber: 90,
		arabicName: 'ٱلْبَلَد',
		englishName: 'al-Balad',
		placeOfRevelation: 'Makkah',
		versesCount: 20,
		englishTranslatedName: 'The City',
		audioFile: {
			'Sameer Nass': '90-سورة البلد.mp3'
		}
	},
	{
		surahNumber: 91,
		arabicName: 'ٱلشَّمْس',
		englishName: 'aš-Šams',
		placeOfRevelation: 'Makkah',
		versesCount: 15,
		englishTranslatedName: 'The Sun',
		audioFile: {
			'Sameer Nass': '91-سورة الشمس.mp3'
		}
	},
	{
		surahNumber: 92,
		arabicName: 'ٱللَّيْل',
		englishName: 'al-Layl',
		placeOfRevelation: 'Makkah',
		versesCount: 21,
		englishTranslatedName: 'The Night',
		audioFile: {
			'Sameer Nass': '92-سورة الليل.mp3'
		}
	},
	{
		surahNumber: 93,
		arabicName: 'ٱلضُّحَىٰ',
		englishName: 'aḍ-Ḍuḥā',
		placeOfRevelation: 'Makkah',
		versesCount: 11,
		englishTranslatedName: 'The Morning Hours',
		audioFile: {
			'Sameer Nass': '93-سورة الضحى.mp3'
		}
	},
	{
		surahNumber: 94,
		arabicName: 'ٱلشَّرْح',
		englishName: 'aš-Šarḥ',
		placeOfRevelation: 'Makkah',
		versesCount: 8,
		englishTranslatedName: 'The Relief',
		audioFile: {
			'Sameer Nass': '94-سورة الشرح.mp3'
		}
	},
	{
		surahNumber: 95,
		arabicName: 'ٱلتِّين',
		englishName: 'at-Tīn',
		placeOfRevelation: 'Makkah',
		versesCount: 8,
		englishTranslatedName: 'The Fig',
		audioFile: {
			'Sameer Nass': '95-سورة التين.mp3'
		}
	},
	{
		surahNumber: 96,
		arabicName: 'ٱلْعَلَق',
		englishName: 'al-ʿAlaq̈',
		placeOfRevelation: 'Makkah',
		versesCount: 19,
		englishTranslatedName: 'The Clot',
		audioFile: {
			'Sameer Nass': '96-سورة العلق.mp3'
		}
	},
	{
		surahNumber: 97,
		arabicName: 'ٱلْقَدْر',
		englishName: 'al-Q̈adr',
		placeOfRevelation: 'Makkah',
		versesCount: 5,
		englishTranslatedName: 'The Power',
		audioFile: {
			'Sameer Nass': '97-سورة القدر.mp3'
		}
	},
	{
		surahNumber: 98,
		arabicName: 'ٱلْبَيِّنَة',
		englishName: 'al-Bayyinah',
		placeOfRevelation: 'Madeenah',
		versesCount: 8,
		englishTranslatedName: 'The Clear Proof',
		audioFile: {
			'Sameer Nass': '98-سورة البينة.mp3'
		}
	},
	{
		surahNumber: 99,
		arabicName: 'ٱلزَّلْزَلَة',
		englishName: 'Az-Zalzalah',
		placeOfRevelation: 'Madeenah',
		versesCount: 8,
		englishTranslatedName: 'The Earthquake',
		audioFile: {
			'Sameer Nass': '99-سورة الزلزلة.mp3'
		}
	},
	{
		surahNumber: 100,
		arabicName: 'ٱلْعَادِيَات',
		englishName: 'al-ʿĀdiyāt',
		placeOfRevelation: 'Makkah',
		versesCount: 11,
		englishTranslatedName: 'The Courser',
		audioFile: {
			'Sameer Nass': '100-سورة العاديات.mp3'
		}
	},
	{
		surahNumber: 101,
		arabicName: 'ٱلْقَارِعَة',
		englishName: 'al-Q̈āriʿah',
		placeOfRevelation: 'Makkah',
		versesCount: 11,
		englishTranslatedName: 'The Calamity',
		audioFile: {
			'Sameer Nass': '101-سورة القارعة.mp3'
		}
	},
	{
		surahNumber: 102,
		arabicName: 'ٱلتَّكَاثُر',
		englishName: 'at-Takāthur',
		placeOfRevelation: 'Makkah',
		versesCount: 8,
		englishTranslatedName: 'The Rivalry in world increase',
		audioFile: {
			'Sameer Nass': '102-سورة التكاثر.mp3'
		}
	},
	{
		surahNumber: 103,
		arabicName: 'ٱلْعَصْر',
		englishName: 'al-ʿAṣr',
		placeOfRevelation: 'Makkah',
		versesCount: 3,
		englishTranslatedName: 'The Declining Day',
		audioFile: {
			'Sameer Nass': '103-سورة العصر.mp3'
		}
	},
	{
		surahNumber: 104,
		arabicName: 'ٱلْهُمَزَة',
		englishName: 'al-Humazah',
		placeOfRevelation: 'Makkah',
		versesCount: 9,
		englishTranslatedName: 'The Traducer',
		audioFile: {
			'Sameer Nass': '104-سورة الهمزة.mp3'
		}
	},
	{
		surahNumber: 105,
		arabicName: 'ٱلْفِيل',
		englishName: 'al-Fīl',
		placeOfRevelation: 'Makkah',
		versesCount: 5,
		englishTranslatedName: 'The Elephant',
		audioFile: {
			'Sameer Nass': '105-سورة الفيل.mp3'
		}
	},
	{
		surahNumber: 106,
		arabicName: 'قُرَيْش',
		englishName: 'Q̈urayš ',
		placeOfRevelation: 'Makkah',
		versesCount: 4,
		englishTranslatedName: 'Quraysh',
		audioFile: {
			'Sameer Nass': '106-سورة قريش.mp3'
		}
	},
	{
		surahNumber: 107,
		arabicName: 'ٱلْمَاعُون',
		englishName: 'al-Maʿūn',
		placeOfRevelation: 'Makkah',
		versesCount: 7,
		englishTranslatedName: 'The Small kindnesses',
		audioFile: {
			'Sameer Nass': '107-سورة الماعون.mp3'
		}
	},
	{
		surahNumber: 108,
		arabicName: 'ٱلْكَوْثَر',
		englishName: 'al-Kawthar',
		placeOfRevelation: 'Makkah',
		versesCount: 3,
		englishTranslatedName: 'The Abundance',
		audioFile: {
			'Sameer Nass': '108-سورة الكوثر.mp3'
		}
	},
	{
		surahNumber: 109,
		arabicName: 'ٱلْكَافِرُون',
		englishName: 'al-Kāfirūn',
		placeOfRevelation: 'Makkah',
		versesCount: 6,
		englishTranslatedName: 'The Disbelievers',
		audioFile: {
			'Sameer Nass': '109-سورة الكافرون.mp3'
		}
	},
	{
		surahNumber: 110,
		arabicName: 'ٱلنَّصْر',
		englishName: 'an-Naṣr',
		placeOfRevelation: 'Madeenah',
		versesCount: 3,
		englishTranslatedName: 'The Divine Support',
		audioFile: {
			'Sameer Nass': '110-سورة النصر.mp3'
		}
	},
	{
		surahNumber: 111,
		arabicName: 'ٱلْمَسَد',
		englishName: 'al-Masad',
		placeOfRevelation: 'Makkah',
		versesCount: 5,
		englishTranslatedName: 'The Palm Fiber',
		audioFile: {
			'Sameer Nass': '111-سورة المسد.mp3'
		}
	},
	{
		surahNumber: 112,
		arabicName: 'ٱلْإِخْلَاص',
		englishName: 'al-ʾIkhlāṣ',
		placeOfRevelation: 'Makkah',
		versesCount: 4,
		englishTranslatedName: 'The Sincerity',
		audioFile: {
			'Sameer Nass': '112-سورة الإخلاص.mp3'
		}
	},
	{
		surahNumber: 113,
		arabicName: 'ٱلْفَلَق',
		englishName: 'al-Falaq̈',
		placeOfRevelation: 'Makkah',
		versesCount: 5,
		englishTranslatedName: 'The Daybreak',
		audioFile: {
			'Sameer Nass': '113-سورة الفلق.mp3'
		}
	},
	{
		surahNumber: 114,
		arabicName: 'ٱلنَّاس',
		englishName: 'an-Nās',
		placeOfRevelation: 'Makkah',
		versesCount: 6,
		englishTranslatedName: 'Mankind',
		audioFile: {
			'Sameer Nass': '114-سورة الناس.mp3'
		}
	}
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
}
