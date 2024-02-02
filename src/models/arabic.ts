export const ARABIC_NUM = {
	1: '١',
	2: '٢',
	3: '٣',
	4: '٤',
	5: '٥',
	6: '٦',
	7: '٧',
	8: '٨',
	9: '٩',
	0: '٠'
};

function getArabicNumber(num: number): string {
	let reminder,
		rest = num,
		finalString = '';

	if (rest === 0) {
		return ARABIC_NUM[0];
	}

	while (rest > 0) {
		//@ts-ignore
		finalString += ARABIC_NUM[rest % 10];
		rest = Math.floor(rest / 10);
	}
	return finalString;
}
