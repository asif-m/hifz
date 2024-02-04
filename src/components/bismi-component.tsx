import { Show } from "solid-js";

export default function BismiComponent(props: { word: number, chapter: number, verse: number }) {
    const { word, chapter, verse } = props;
    return (
        <div style={{ display: "flex", "justify-content": "center" }}>
            <Show
                when={word === 1 && verse === 1 && chapter !== 1 && chapter !== 9}
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
    )
}