import { For, Show } from "solid-js";
import { CWord, IArabicWord } from "~/models/ayah-info-interface";
import WordComponent from "./word-component";
import BismiComponent from "./bismi-component";
import SurahTitleComponent from "./surah-title-component";

export default function LineComponent(props: { words: Array<IArabicWord> }) {
    const { words } = props;
    const firstWord = words[0];
    return (
        <div>
            <Show when={CWord.isFirstWord(firstWord)}>
                <SurahTitleComponent word={firstWord} />
            </Show>
            <Show when={CWord.shouldDisplayBismillah(firstWord)}>
                <BismiComponent />
            </Show>

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