import { For } from "solid-js";
import { IArabicWord } from "~/models/ayah-info-interface";
import WordComponent from "./word-component";

export default function LineComponent(props: {words:Array<IArabicWord>}) {
    const {words} = props;
return (
    <div style={{
        display:"flex", 
        "flex-direction":"row-reverse", 
        "align-content":"center",
        "justify-content":"space-around",
        "width":"1000px",
        "min-width":"1000px"
        }}>
        <For each={words}>{word => <WordComponent word={word}/>}</For>
    </div>
 
)
}