import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useStore } from "~/store/store";

export default function Reader(props: IAyahBase) {
  const {verseNumber,  setVerseNumber, chapterNumber, setChapterNumber } = useStore();
  return (
    <div>
      <div>{verseNumber()}</div>
      <button onClick={()=>  setVerseNumber((c:number) => c + 1)}>+</button>
      <button onClick={()=>  setVerseNumber((c:number) => c - 1)}>-</button>
      <div>{chapterNumber()}</div>
      <button onClick={()=>  setChapterNumber((c:number) => c + 1)}>+</button>
      <button onClick={()=>  setChapterNumber((c:number) => c - 1)}>-</button>
      <PlayingHeader {...props}/>
    </div>
  );
}
