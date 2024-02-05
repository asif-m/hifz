import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";
import { createEffect, batch, For } from "solid-js";
import PageLoader from "./page-loader";
import LineComponent from "./line-component";
import {
  AppBar,
  Box, Toolbar, Container
} from "@suid/material";
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
          <PlayingHeader/>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Quran
            </Typography>
            <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <div style={{overflow:"scroll"}}>
          <div>
            <PageLoader page={derivedPageNumber()} />
            <PlayingHeader />
          </div>
          <div style={{ display: "flex", "flex-direction": "column", "align-items": "center" }}>
            <For each={derivedLineData()}>{words => <LineComponent words={words} />}</For>
          </div>
        </div>
      </Container>
    </div>
  );
}
