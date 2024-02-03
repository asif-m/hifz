import { useStore } from "~/store/store";

export default function PlayingHeader() {
  const { verseNumber, chapterNumber } = useStore();
  return (
    <div>
      {chapterNumber()} : {verseNumber()}
    </div>
  );
}
