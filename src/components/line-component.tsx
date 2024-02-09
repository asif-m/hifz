import { For, Show } from "solid-js";
import WordComponent from "./word-component";
import BismiComponent from "./bismi-component";
import SurahTitleComponent from "./surah-title-component";
import { IArabicWord, CWord } from "~/models/word";
import { pageWidth } from "~/models/style-constants";

export default function LineComponent(props: { words: Array<IArabicWord> }) {
    const { words } = props;
    const firstWord = words[0];

    return (
        <div>
            <Show when={firstWord}>
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
                    "width": pageWidth,
                    "min-width": pageWidth
                }}>
                    <For each={words}>{word => <WordComponent word={word} />}</For>
                </div>
            </Show>
        </div>
    )
}