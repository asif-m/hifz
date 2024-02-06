import { IArabicWord } from "~/models/word";
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
                margin: "10px",
                border: "solid rgb(0,200,0) 2px",
                color: "rgb(0,200,0)",
                "border-radius": "4px"
            }}>
                <div style={{
                    "font-family": "UthmanicHafs",
                    "font-size": "4.0vh",
                }}>{`${SURAHS_INFO[chapterNumber - 1].arabicName} ${(chapterNumber).toLocaleString('ar-EG')}`} </div>
                <div style={{display:"flex", "flex-direction":"row", "justify-content":"space-between", "padding":"16px"}}>
                    <div>{`(${SURAHS_INFO[chapterNumber - 1].versesCount} Ayah)`}</div>
                    <div>{`(${chapterNumber}) ${SURAHS_INFO[chapterNumber - 1].englishName}`}</div>
                    <div>{`${SURAHS_INFO[chapterNumber - 1].placeOfRevelation === ""?"🕋":"🕋"}`}</div>
                </div>
            </div>
        </div>
    )
}