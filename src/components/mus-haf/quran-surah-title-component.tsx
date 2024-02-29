import { IArabicWord } from "~/models/word";
import ScrollToVerseComponent from "../scroll-to-verse.component";
import { SURAHS_INFO } from "~/models/surah";
import { colors } from "~/models/style-constants";

export default function QuranSurahTitleComponent(props: { word: IArabicWord }) {
  const { word } = props;
  const { chapterNumber } = word;
  const { arabicName, versesCount, englishName, placeOfRevelation } =
    SURAHS_INFO[chapterNumber - 1];

  return (
    <div
      style={{
        width: "100%",
        "text-align": "center",
      }}
    >
      <ScrollToVerseComponent word={word} />
      <div
        style={{
          margin: "10px",
          border: `solid ${colors.surahTitleBorder} 2px`,
          color: colors.surahTitle,
          "border-radius": "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            padding: "16px",
          }}
        >
          <div></div>
          <div
            style={{
              "font-family": "UthmanicHafs",
              "font-size": "4.0vh",
            }}
          >
            {`${arabicName} ${chapterNumber.toLocaleString("ar-EG")}`}
          </div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-between",
            padding: "16px",
          }}
        >
          <div>{`(${versesCount})`}</div>
          <div>{`(${chapterNumber}) ${englishName}`}</div>
          <div>{`${placeOfRevelation === "Makkah" ? "🕋" : "🕌"}`}</div>
        </div>
      </div>
    </div>
  );
}
