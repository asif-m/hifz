import { IAyahBase } from "~/models/ayah-info-interface";

export default function PlayingHeader(props: IAyahBase) {
  const { verseNumber, chapterNumber } = props;
  return (
    <div>
      {chapterNumber} : {verseNumber}
    </div>
  );
}
