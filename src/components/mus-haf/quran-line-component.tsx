import { For, Show } from "solid-js";
import QuranWordComponent from "./quran-word-component";
import QuranBismiComponent from "./quran-bismi-component";
import QuranSurahTitleComponent from "./quran-surah-title-component";
import { IArabicWord, CWord } from "~/models/word";
import { pageWidth } from "~/models/style-constants";

export default function QuranLineComponent(props: { words: Array<IArabicWord> }) {
    const { words } = props;
    const firstWord = words[0];

    return (
        <div>
            <Show when={firstWord}>
                <Show when={CWord.isFirstWord(firstWord)}>
                    <QuranSurahTitleComponent word={firstWord} />
                </Show>
                <Show when={CWord.shouldDisplayBismillah(firstWord)}>
                    <QuranBismiComponent />
                </Show>

                <div style={{
                    display: "flex",
                    "flex-direction": "row-reverse",
                    "align-content": "center",
                    "justify-content": "space-around",
                    "width": pageWidth,
                    "min-width": pageWidth
                }}>
                    <For each={words}>{word => <QuranWordComponent word={word} />}</For>
                </div>
            </Show>
        </div>
    )
}