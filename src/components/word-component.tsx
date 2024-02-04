import { Typography } from "@suid/material";
import { IArabicWord } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";

export default function WordComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { verseNumber, chapterNumber } = useStore();
    function isCurrentVerse() {
        return word.chapterNumber === chapterNumber() && word.verseNumber === verseNumber()
    }
    return (
        <div style={{ display: "flex", "flex-direction": "column", "align-items": "center", margin: "4px" }}>
            <div style={{
                "color": isCurrentVerse() ? "rgb(44, 164, 171)" : "",
                "font-family": "UthmanicHafs",
                "font-size": "3.2vh",
            }}>
                {word.qpcUthmaniHafs}
            </div>
            <Typography
                style={{
                    "color": isCurrentVerse() ? "rgb(44, 164, 171)" : "",
                    "font-size": "0.875rem"
                }}
            >{word.translation}</Typography>
        </div>
    )
}