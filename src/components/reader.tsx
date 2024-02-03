import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";
import { createEffect, batch } from "solid-js";

export default function Reader(props: IAyahBase) {
  const { setVerseNumber, setChapterNumber, derivedPageNumber, setPageData } = useStore();
  const page = derivedPageNumber();



  createEffect(() => {
    batch(() => {
      setVerseNumber(props.verseNumber);
      setChapterNumber(props.chapterNumber);
    })
  }, [props.verseNumber, props.chapterNumber])

  createEffect(() => {
    console.log(page);
    import(`/page/${page}.json`)
    .then((res)=>{
      console.log({data: res.default})
      return res.default
    })
    .catch((e)=>{
      console.error(e);
    });
    // setPageData(() => module.default)
  }, [page])

  return (
    <div>
      <PlayingHeader />
    </div>
  );
}
