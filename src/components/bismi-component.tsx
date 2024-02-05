import { Show } from "solid-js";
import { CWord, IArabicWord } from "~/models/ayah-info-interface";
import ScrollComponent from "./scroll-component";

export default function BismiComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const {chapterNumber, verseNumber, wordNumber} = word;
    return (
        <div style={{ display: "flex", "justify-content": "center" }}>
            <Show
                when={CWord.isPositionForBismillah(word)}
            >
                <ScrollComponent word={word} />
                <div style={{
                    color: "green",
                    "font-family": "UthmanicHafs",
                    "font-size": "4.4vh",
                }}>
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                </div>
            </Show>
        </div>
    )
}