import { Show } from "solid-js";
import { CWord, IArabicWord } from "~/models/ayah-info-interface";
import SurahTitleComponent from "./surah-title-component";

export default function BismiComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { chapterNumber, verseNumber, wordNumber } = word;
    return (
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            "width":"100%"
        }}>
            <SurahTitleComponent word={word}/>
            <div>
                <Show
                    when={CWord.isPositionForBismillah(word)}
                >
                    <div style={{
                        color: "green",
                        "font-family": "UthmanicHafs",
                        "font-size": "4.4vh",
                    }}>
                        بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                    </div>
                </Show>
            </div>
        </div>
    )
}