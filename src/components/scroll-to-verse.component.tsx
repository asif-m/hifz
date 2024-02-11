import { createEffect } from "solid-js";
import { headerHeight } from "~/models/style-constants";
import { IArabicWord } from "~/models/word";
import { useStore } from "~/store/store";

export default function ScrollToVerseComponent(props: { word: IArabicWord, shouldScroll?: boolean }) {
    const { word, shouldScroll = true } = props;
    const { verseNumber, chapterNumber } = useStore();
    let divRef: HTMLDivElement;

    createEffect(() => {
        if (!shouldScroll || !divRef) {
            return
        }
        if (word.chapterNumber !== chapterNumber() || word.verseNumber !== verseNumber() || word.wordNumber !== 1) {
            return;
        }
        const elementTop = divRef.getBoundingClientRect().top + window.scrollY;
        const offset = elementTop - headerHeight;

        window.scrollTo({
            top: offset,
            behavior: 'smooth', // or 'auto' for instant scrolling
        });

    }, [chapterNumber(), verseNumber()])

    return (
        <div ref={divRef!}></div>
    )
}