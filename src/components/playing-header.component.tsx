import { useStore } from "~/store/store";

export default function PlayingHeader() {
  const { verseNumber, chapterNumber, derivedPageNumber } = useStore();
  return (
    <div style={{display:"flex", "flex-direction":"column", "align-items":"center"}}>
      <div>{chapterNumber()} : {verseNumber()}</div>
      <div>Page : {derivedPageNumber()}</div>
    </div>

  );
}
