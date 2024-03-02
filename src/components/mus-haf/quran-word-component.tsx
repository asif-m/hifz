import { Typography } from "@suid/material";
import { useStore } from "~/store/store";
import ScrollToVerseComponent from "../scroll-to-verse.component";
import { CWord, IArabicWord } from "~/models/word";
import { colors } from "~/models/style-constants";

export default function QuranWordComponent(props: { word: IArabicWord }) {
  const { word } = props;
  const { verseNumber, chapterNumber } = useStore();

  function isWordInCurrentVerse() {
    return (
      word.chapterNumber === chapterNumber() &&
      word.verseNumber === verseNumber()
    );
  }

  function getVerseColor() {
    return isWordInCurrentVerse()
      ? colors.currentVerseColor
      : colors.normalVerseColor;
  }

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        margin: "4px",
      }}
    >
      <ScrollToVerseComponent
        word={word}
        shouldScroll={!CWord.isFirstWord(word)}
      />
      <div
        style={{
          color: getVerseColor(),
          "font-family": "UthmanicHafs",
          "font-size": "4.4vh",
          direction: "rtl",
        }}
      >
        {word.qpcUthmaniHafs}
      </div>
      <Typography
        style={{
          color: getVerseColor(),
          "font-size": "0.875rem",
          "max-width": "7rem",
          "text-align": "center",
        }}
      >
        {word.translation}
      </Typography>
    </div>
  );
}
