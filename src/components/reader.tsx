import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";
import { createEffect, batch } from "solid-js";

export default function Reader(props: IAyahBase) {
  const { setVerseNumber, setChapterNumber } = useStore();

  createEffect(() => {
    
  }, [props.chapterNumber])

  createEffect(() => {
    batch(() => {
      setVerseNumber(props.verseNumber);
      setChapterNumber(props.chapterNumber);
    })
  }, [props.verseNumber, props.chapterNumber])

  return (
    <div>
      <PlayingHeader />
    </div>
  );
}
