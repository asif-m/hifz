import { useStore } from "~/store/store";

export default function PlayingHeader() {
  const { verseNumber, chapterNumber, derivedPageNumber,pageData } = useStore();
  return (
    <div>
      {chapterNumber()} : {verseNumber()}
      Page : {derivedPageNumber()}
      PageData : {JSON.stringify(pageData() || "Empty")}
    </div>
  );
}
