import { Typography } from "@suid/material";
import { CWord, IArabicWord } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";
import ScrollComponent from "./scroll-component";

export default function WordComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { verseNumber, chapterNumber } = useStore();

    function isCurrentVerse() {
        return word.chapterNumber === chapterNumber() && word.verseNumber === verseNumber()
    }

    return (
        <div style={{ display: "flex", "flex-direction": "column", "align-items": "center", margin: "4px" }}
        >
            <ScrollComponent word={word} shouldScroll={!CWord.isFirstWord(word)}/>
            <div style={{
                "color": isCurrentVerse() ? "rgb(44, 164, 171)" : "",
                "font-family": "UthmanicHafs",
                "font-size": "4.4vh",
            }}>
                {word.qpcUthmaniHafs}
            </div>
            <Typography
                style={{
                    "color": isCurrentVerse() ? "rgb(44, 164, 171)" : "",
                    "font-size": "0.875rem",
                    "max-width": "7rem",
                    "text-align": "center"
                }}
            >{word.translation}</Typography>
        </div>
    )
}