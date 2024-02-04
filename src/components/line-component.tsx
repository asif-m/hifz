import { For } from "solid-js";
import { IArabicWord } from "~/models/ayah-info-interface";
import WordComponent from "./word-component";
import LineScrollComponent from "./line-scroll-component";

export default function LineComponent(props: { words: Array<IArabicWord> }) {
    const { words } = props;
    return (
        <div>
            <LineScrollComponent
                chapter={words[0].chapterNumber}
                word={words[0].wordNumber}
                verse={words[0].verseNumber}
            />
            <div style={{
                display: "flex",
                "flex-direction": "row-reverse",
                "align-content": "center",
                "justify-content": "space-around",
                "width": "1000px",
                "min-width": "1000px"
            }}>
                <For each={words}>{word => <WordComponent word={word} />}</For>
            </div>
        </div>

    )
}