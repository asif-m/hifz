import { Typography } from "@suid/material";
import { createEffect } from "solid-js";
import { IArabicWord } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";

export default function WordComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { verseNumber, chapterNumber } = useStore();
    let divRef: HTMLDivElement;
    function isCurrentVerse() {
        return word.chapterNumber === chapterNumber() && word.verseNumber === verseNumber()
    }
    createEffect(() => {
        if (word.chapterNumber !== chapterNumber() || word.verseNumber !== verseNumber() || word.wordNumber !==1) {
            return;
        }
        console.log({ word });
        divRef?.scrollIntoView({ block: "start", inline: "start" });
    }, [chapterNumber(), verseNumber()])

    return (
        <div style={{ display: "flex", "flex-direction": "column", "align-items": "center", margin: "4px" }}
            ref={divRef!}
        >
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