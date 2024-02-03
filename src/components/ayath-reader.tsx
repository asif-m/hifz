import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";
import { useCounter } from "~/store/counter";

export default function AyathReader(props: IAyahBase) {
  const {verseNumber,  setVerseNumber, chapterNumber, setChapterNumber } = useCounter();
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
