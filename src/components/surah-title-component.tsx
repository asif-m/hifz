import { IArabicWord } from "~/models/ayah-info-interface";
import ScrollComponent from "./scroll-component";
import { SURAHS_INFO } from "~/models/surah";

export default function SurahTitleComponent(props: { word: IArabicWord }) {
    const { word } = props;
    const { chapterNumber } = word;
    return (
        <div style={{
            "width": "100%",
            "text-align": "center",
        }}>
           
            <ScrollComponent word={word} />
            <div style={{
                color: "rgb(0,200,0)",
                "font-family": "UthmanicHafs",
                "font-size": "4.0vh",
                margin: "10px",
                border: "solid rgb(0,200,0) 2px",
                "border-radius": "4px"
            }}>
                {SURAHS_INFO[chapterNumber - 1].arabicName}
            </div>
            
        </div>
    )
}