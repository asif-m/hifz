import { Show } from "solid-js";

export default function BismiComponent(props: { wordNumber: number, chapterNumber: number, verseNumber:number }) {
    const { wordNumber, chapterNumber,verseNumber } = props;
    return (
        <div style={{display:"flex", "justify-content":"center"}}>
            <Show
                when={wordNumber === 1 && verseNumber===1&&chapterNumber !== 1 && chapterNumber !== 9}
            >
                <div style={{
                    color: "green",
                    "font-family": "UthmanicHafs",
                    "font-size": "3.2vh",
                }}>
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                </div>
            </Show>
        </div>
    )
}