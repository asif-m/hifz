import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";
import { createEffect, batch, For } from "solid-js";
import LineComponent from "./line-component";
import {
  AppBar,
  Box, Toolbar, Container
} from "@suid/material";
import { CPage, IPageData } from "~/models/page";
export default function Reader(props: IAyahBase) {
  const {chapterNumber, setChapterNumber, verseNumber, setVerseNumber, pageNumber,setPageNumber, pageData, setPageData, lineData, setLineData } = useStore();
  createEffect(() => {
    batch(() => {
      setVerseNumber(()=> props.verseNumber);
      setChapterNumber(()=>props.chapterNumber);
    })
  }, [props.verseNumber, props.chapterNumber])

  createEffect(() => {
    const chapter = chapterNumber();
    const verse = verseNumber();
    setPageNumber(()=>CPage.getPageNumberForAyah(chapter, verse))
  })

  createEffect(() => {
    const page = pageNumber();
    if(page){
      batch(() => {
        import(`../../public/page/${page}.json`)
        .then((res) => {
          const pageData = res.default as IPageData ;
          setLineData(()=>CPage.getLineData(pageData))
          setPageData(()=>pageData);
        })
        .catch((e) => console.error(e));
      })
    }
  })

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <PlayingHeader/>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <div style={{overflow:"scroll"}}>
          <div style={{ display: "flex", "flex-direction": "column", "align-items": "center" }}>
            <For each={lineData()}>{words => <LineComponent words={words} />}</For>
            <div>{pageData().pageNumber}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
