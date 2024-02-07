import { For, Show } from "solid-js";
import WordComponent from "./word-component";
import BismiComponent from "./bismi-component";
import SurahTitleComponent from "./surah-title-component";
import { IArabicWord, CWord } from "~/models/word";

export default function LineComponent(props: { words: Array<IArabicWord> }) {
    const { words } = props;
    const firstWord = words[0];
    if(!firstWord){
        return null;
    }
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