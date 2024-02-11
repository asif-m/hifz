import { colors } from "~/models/style-constants";
import EditableTextboxControlsComponent from "./editable-textbox.component";
export default function AyahPlayTrackEditComponent(props: {
    ayah: {
        chapterNumber: number,
        verseNumber: number,
        timestampFrom: number,
        timestampTo: number,
        index: number,
        setTimestampFrom: (index: number, value: number) => void
        setTimestampTo: (index: number, value: number) => void
    },
    highlight: boolean;
}) {
    const { ayah: { chapterNumber:chapter, verseNumber:verse, timestampFrom, timestampTo, index, setTimestampFrom, setTimestampTo }, highlight } = props;
        
    return (
        <div style={{
            display: "flex", "align-items": "center",
            gap: "3px",
            border: highlight ? `solid ${colors.ayahsTrackBorderColor} 3px` : "",
            "border-radius": "3px",
            margin: "8px",
            "font-size": "10px"
        }}>
            <div style={{ padding: "4px 8px" }}>{`${chapter} : ${verse} `}</div>
            <EditableTextboxControlsComponent value={timestampFrom} isFrom={false} onChange={(value: number) => setTimestampFrom(index, value)} />
            <div>-</div>
            <EditableTextboxControlsComponent value={timestampTo} isFrom={true} onChange={(value: number) => setTimestampTo(index, value)} />
        </div>
    )
}