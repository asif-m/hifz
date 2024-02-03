import { useStore } from "~/store/store";

export default function PlayingHeader() {
  const { verseNumber, chapterNumber, derivedPageNumber } = useStore();
  return (
    <div>
      {chapterNumber()} : {verseNumber()}
      Page : {derivedPageNumber()}
    </div>
  );
}
