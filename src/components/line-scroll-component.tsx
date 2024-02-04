import { createEffect } from "solid-js";
import BismiComponent from "./bismi-component";
import { useStore } from "~/store/store";

export default function LineScrollComponent(props: { word: number, chapter: number, verse: number }) {
    const { word, chapter, verse } = props;
    const { chapterNumber, verseNumber } = useStore();
    let divRef: HTMLDivElement;

    createEffect(() => {
        if (chapter !== chapterNumber() || verse !== verseNumber()) {
            return;
        }
        divRef?.scrollIntoView({ block: "nearest", inline: "nearest"  });
    }, [chapterNumber(), verseNumber()])

    return (
        <div style={{ display: "flex", "justify-content": "center" }} ref={divRef!}>
            <BismiComponent word={word} chapter={chapter} verse={verse} />
        </div>
    )
}