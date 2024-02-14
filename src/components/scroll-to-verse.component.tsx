import { createEffect } from "solid-js";
import { headerHeight } from "~/models/style-constants";
import { IArabicWord } from "~/models/word";
import { useStore } from "~/store/store";

export default function ScrollToVerseComponent(props: { word: IArabicWord, shouldScroll?: boolean }) {
    const { word, shouldScroll = true } = props;
    const { verseNumber, chapterNumber } = useStore();
    let divRef: HTMLDivElement;

    createEffect(() => {
        const chapter = chapterNumber();
        const verse = verseNumber();

        if (!shouldScroll || !divRef || word.wordNumber !== 1) {
            return
        }
        if (word.chapterNumber !== chapter || word.verseNumber !== verse) {
            return;
        }

        const elementTop = divRef.getBoundingClientRect().top + window.scrollY;
        const offset = elementTop - headerHeight-10;
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });

    }, [chapterNumber(), verseNumber()])

    return (<div ref={divRef!} />)
}