import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";
import { createEffect, batch, For } from "solid-js";
import PageLoader from "./page-loader";
import LineComponent from "./line-component";

export default function Reader(props: IAyahBase) {
  const { setVerseNumber, setChapterNumber, derivedPageNumber, pageData, derivedLineData } = useStore();

  createEffect(() => {
    batch(() => {
      setVerseNumber(props.verseNumber);
      setChapterNumber(props.chapterNumber);
    })
  }, [props.verseNumber, props.chapterNumber])

  return (
    <div>
      <PageLoader page= {derivedPageNumber()}/>
      <PlayingHeader />
      <div style={{display:"flex", "flex-direction":"column", "align-items":"center"}}>
        <For each={derivedLineData()}>{words => <LineComponent words={words}/>}</For>
      </div>
    </div>
  );
}
