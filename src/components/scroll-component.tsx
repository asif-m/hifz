import { createEffect } from "solid-js";
import { IArabicWord } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";

export default function ScrollComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { verseNumber, chapterNumber } = useStore();
    let divRef: HTMLDivElement;
    createEffect(() => {
        if (word.chapterNumber !== chapterNumber() || word.verseNumber !== verseNumber() || word.wordNumber !==1) {
            return;
        }
        divRef?.scrollIntoView({ block: "start", inline: "start" });
    }, [chapterNumber(), verseNumber()])
    return (
        <div ref={divRef!}></div>
    )
}