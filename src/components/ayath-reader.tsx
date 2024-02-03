import { IAyahBase } from "~/models/ayah-info-interface";

export default function AyathReader(props: IAyahBase) {
  const { verseNumber, chapterNumber } = props;
  return (
    <div style={{ background: "red" }}>
      {" "}
      Surah : {chapterNumber}, Ayath: {verseNumber}
    </div>
  );
}
