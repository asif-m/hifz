import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeaderContainer from "../header/playing-header.container";
import { useStore } from "~/store/store";
import { createEffect, batch, For, onCleanup } from "solid-js";
import QuranLineComponent from "./quran-line-component";
import { AppBar, Box, Toolbar, Container } from "@suid/material";
import { CPage, IPageData } from "~/models/page";
import { colors, headerHeight } from "~/models/style-constants";
export default function QuranReader(props: IAyahBase) {
  const {
    chapterNumber,
    setChapterNumber,
    verseNumber,
    setVerseNumber,
    pageNumber,
    setPageNumber,
    pageData,
    setPageData,
    lineData,
    setLineData,
    setPressedKey,
  } = useStore();

  createEffect(() => {
    batch(() => {
      setVerseNumber(() => props.verseNumber);
      setChapterNumber(() => props.chapterNumber);
    });
  }, [props.verseNumber, props.chapterNumber]);

  createEffect(() => {
    const chapter = chapterNumber();
    const verse = verseNumber();
    setPageNumber(() => CPage.getPageNumberForAyah(chapter, verse));
  });

  createEffect(() => {
    const page = pageNumber();
    if (!page) {
      return;
    }

    import(`../../../public/page/${page}.json`)
      .then((res) => {
        const pageData = res.default as IPageData;
        batch(() => {
          setLineData(() => CPage.getLineData(pageData));
          setPageData(() => pageData);
        });
      })
      .catch((e) => console.error(e));
  });

  // Event handler for keydown
  function handleKeyDown(event: KeyboardEvent) {
    if ("Space" === event.code) {
      event.preventDefault();
      event.stopPropagation();
    }
    setPressedKey(event.code);
  }

  // Event handler for keyup
  function handleKeyUp() {
    setPressedKey("");
  }

  // Attach event listeners to the window object
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // Cleanup function to remove event listeners when the component is unmounted
  onCleanup(() => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <PlayingHeaderContainer />
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ "padding-top": `${headerHeight + 10}px` }}>
        <Container>
          <div style={{ "scrollbar-color": `${colors.scrollbarColor}` }}>
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <div
                style={{
                  display: "flex",
                  "flex-direction": "column",
                  "align-items": "center",
                }}
              >
                <For each={lineData()}>
                  {(words) => <QuranLineComponent words={words} />}
                </For>
                <div
                  style={{
                    padding: "4px",
                    "border-radius": "4px",
                    border: `solid ${colors.footerPageNumber} 2px`,
                    color: colors.footerBorder,
                  }}
                >
                  {pageData().pageNumber}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
