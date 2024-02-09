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
import { headerHeight } from "~/models/style-constants";
import AyahTrackerComponent from "./ayah-tracker";
export default function Reader(props: IAyahBase) {
  const { chapterNumber, setChapterNumber, verseNumber, setVerseNumber, pageNumber, setPageNumber, pageData, setPageData, setAudioStartTime, lineData, setLineData } = useStore();

  createEffect(() => {
    batch(() => {
      setVerseNumber(() => props.verseNumber);
      setChapterNumber(() => props.chapterNumber);
    })
  }, [props.verseNumber, props.chapterNumber])

  createEffect(() => {
    const chapter = chapterNumber();
    const verse = verseNumber();
    setPageNumber(() => CPage.getPageNumberForAyah(chapter, verse))
  })

  createEffect(() => {
    const page = pageNumber();
    if (page) {
      batch(() => {
        import(`../../public/page/${page}.json`)
          .then((res) => {
            const pageData = res.default as IPageData;
            setLineData(() => CPage.getLineData(pageData))
            setPageData(() => pageData);
          })
          .catch((e) => console.error(e));
      })
    }
  })

  createEffect(() => {
    const pageInfo = pageData();
    const chapter = chapterNumber();
    const verse = verseNumber();
    if (pageInfo) {
      const currentAyah = pageInfo?.ayahs?.filter((ayah) => ayah.chapterNumber === chapter && ayah.verseNumber == verse)[0];
      const timeStampFrom = currentAyah?.reciterTimestamps?.["Shaykh Samir al-Nass"]?.timestampFrom || 0
      setAudioStartTime(() => timeStampFrom)
    }
  })

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <PlayingHeader />
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ "padding-top": `${headerHeight}px` }}>
        <Container>
          <div style={{ overflow: "scroll" }}>
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <div style={{ display: "flex", "flex-direction": "column", "align-items": "center" }}>
                <For each={lineData()}>{words => <LineComponent words={words} />}</For>
                <div>{pageData().pageNumber}</div>
              </div>
              <div style={{ width: "20%" }}>
                <AyahTrackerComponent />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
