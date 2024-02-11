import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import EditableTextboxControlsComponent from "./editable-textbox.component";

export default function AyahPlayTrackEditComponent(props: {
    index: number,
    timestamps: IReciterTimeStamp[],
    ayahs: Array<{ chapterNumber: number, verseNumber: number }>
}) {
    const {index, timestamps, ayahs} = props;
    const chapter= ayahs[index]?.chapterNumber ||0;
    const verse = ayahs[index]?.verseNumber ===0 ?"B" :(ayahs[index]?.verseNumber ||0)


    function onFromChange(v:number){

    }
    function onToChange(v:number){

    }

    return (
        <div style={{
            display: "flex", "align-items": "center",
            gap: "3px",
            //border: highlight ? `solid ${colors.ayahsTrackBorderColor} 3px` : "",
            "border-radius": "3px",
            margin: "8px",
            "font-size": "10px"
        }}>
            <div style={{ padding: "4px 8px" }}>{`${chapter} : ${verse} `}</div>
            <EditableTextboxControlsComponent value= {timestamps[index].timestampFrom} onChange={(v)=>onFromChange(v)}/>
            <div>-</div>
            <EditableTextboxControlsComponent value= {timestamps[index].timestampTo} onChange={(v)=>onToChange(v)}/>
        </div>
    )
}