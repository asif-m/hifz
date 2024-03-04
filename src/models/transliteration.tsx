export class CTransliterate {
  private charsArr: Array<string>;
  private buckArr: Array<string>;
  private transArr: Array<string>;
  constructor() {
    this.charsArr =
      "آ ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي".split(" ");
    this.buckArr =
      "A A b t v j H x d * r z s $ S D T Z E g f q k l m n h w y".split(" ");
    this.transArr =
      "ā ā b t th j h kh d dh r z s sh ṣ ḍ ṭ ẓ ʿ gh f q k l m n h w y".split(
        " ",
      );

    // MISSING CHARACTERS: أ إ ئ ء ة ؤ
    // Let's add them!
    this.charsArr.push("ى");
    this.buckArr.push("Y");
    this.transArr.push("ā");
    this.charsArr.push("أ");
    this.buckArr.push(">");
    this.transArr.push("");
    this.charsArr.push("إ");
    this.buckArr.push("<");
    this.transArr.push("");
    this.charsArr.push("ئ");
    this.buckArr.push("}");
    this.transArr.push("");
    this.charsArr.push("ء");
    this.buckArr.push("X");
    this.transArr.push("'");
    this.charsArr.push("ؤ");
    this.buckArr.push("&");
    this.transArr.push(" ");
    //missing characters for harakath.
    this.charsArr.push("\u{0652}");
    this.buckArr.push("o");
    this.transArr.push("'");
    this.charsArr.push("\u{064e}");
    this.buckArr.push("a");
    this.transArr.push("a");
    this.charsArr.push("\u{0650}");
    this.buckArr.push("i");
    this.transArr.push("i");
    this.charsArr.push("\u{064f}");
    this.buckArr.push("u");
    this.transArr.push("");
    this.charsArr.push("\u{064b}");
    this.buckArr.push("F");
    this.transArr.push("an");
    this.charsArr.push("\u{064d}");
    this.buckArr.push("K");
    this.transArr.push("in");
    this.charsArr.push("\u{064c}");
    this.buckArr.push("N");
    this.transArr.push("un");
    this.charsArr.push("\u{0626}");
    this.buckArr.push("}");
    this.transArr.push("");
    this.charsArr.push("\u{0640}");
    this.buckArr.push("_");
    this.transArr.push("");
    this.charsArr.push("\u{0651}");
    this.buckArr.push("~");
    this.transArr.push("(double)");
    this.charsArr.push("\u{0653}");
    this.buckArr.push("^");
    this.transArr.push("");
    this.charsArr.push("\u{0654}");
    this.buckArr.push("#");
    this.transArr.push("");
    this.charsArr.push("\u{0671}");
    this.buckArr.push("{");
    this.transArr.push("");
    this.charsArr.push("\u{0670}");
    this.buckArr.push("`");
    this.transArr.push("");
    this.charsArr.push("\u{06e5}");
    this.buckArr.push(",");
    this.transArr.push("");
    this.charsArr.push("\u{06e6}");
    this.buckArr.push(".");
    this.transArr.push("");
    this.charsArr.push("ة");
    this.buckArr.push("p");
    this.transArr.push("t");
    //charsArr.push("ة"); 	    buckArr.push("P");	 transArr.push(" ");
    this.charsArr.push("\u{06df}");
    this.buckArr.push("@");
    this.transArr.push("");
    this.charsArr.push("\u{06e2}");
    this.buckArr.push("[");
    this.transArr.push("");
    this.charsArr.push("\u{06ed}");
    this.buckArr.push("]");
    this.transArr.push("");
    this.charsArr.push("\u{0621}");
    this.buckArr.push('"');
    this.transArr.push("");
    this.charsArr.push("\u{06DC}");
    this.buckArr.push(":");
    this.transArr.push("");
    this.charsArr.push("\u{06E0}");
    this.buckArr.push('"');
    this.transArr.push("");
    this.charsArr.push(" ");
    this.buckArr.push(" ");
    this.transArr.push(" ");
    this.charsArr.push(";");
    this.buckArr.push(";");
    this.transArr.push("");
    this.charsArr.push("\n");
    this.buckArr.push("\n");
    this.transArr.push("");
  }

  toArabic(text: string) {
    let arabic = "";
    let letters = text.split("");
    letters.forEach((letter) => {
      let buckArrKey = this.buckArr.indexOf(letter);
      if (buckArrKey != -1) {
        // We've found a match
        arabic += this.charsArr[buckArrKey];
      } else {
        // No match found, append the letter as it is
        if (!letter) {
          arabic += letter;
        }
      }
    });

    return arabic;
  }
}
