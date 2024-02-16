import { useStore } from "~/store/store";
import EditableTextboxControlsComponent from "./editable-textbox.component";
import { Show } from "solid-js";

export default function AyahPlayTrackEditComponent(props: {
    index: number,
}) {
    const { index } = props;
    const { pageSurahAudioTimeStamps, setPageSurahAudioTimeStamps, ayahInCurrentPageSurah } = useStore();
    const ayahs = ayahInCurrentPageSurah();
    const timestamps = pageSurahAudioTimeStamps();
    const chapter = ayahs[index]?.chapterNumber || 0;
    const verse = ayahs[index]?.verseNumber === 0 ? "B" : (ayahs[index]?.verseNumber || 0)


    function onFromChange(v: number) {
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => (i === index) ? { ...t, timestampFrom: v } : t)
        )
    }
    function onToChange(v: number) {
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => (i === index) ? { ...t, timestampTo: v } : t)
        )
    }
    function onDelete() {
        const timestamps = pageSurahAudioTimeStamps();
        const {timestampTo:timestampToOfItemDeleted} = timestamps[index];
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => {
                if(i === index-1){
                    return { ...t, timestampTo: timestampToOfItemDeleted }
                }
                if(i>=index && i<timestamps.length-1){
                    const {timestampTo, timestampFrom} = timestamps[i+1]
                    return { ...t, timestampTo, timestampFrom}
                }
                return t;
            })
        )
    }

    return (
        <div style={{
            display: "flex", 
            "align-items": "center",
            gap: "3px",
            //border: highlight ? `solid ${colors.ayahsTrackBorderColor} 3px` : "",
            //"border-radius": "3px",
            //margin: "8px",
            "font-size": "10px",
            "min-width":"160px"
        }}>
            <div style={{ padding: "4px 8px" }}>{`${chapter} : ${verse} `}</div>
            <EditableTextboxControlsComponent value={timestamps[index].timestampFrom} onChange={(v) => onFromChange(v)} />
            <div  style={{ padding: "4px 8px" }}>-</div>
            <EditableTextboxControlsComponent value={timestamps[index].timestampTo} onChange={(v) => onToChange(v)} />
            <div>
                <Show when={index !== 0}>
                    <div role={"button"} style={{ cursor: "pointer" }} onclick={() => onDelete()}>
                        ⌫
                    </div>
                </Show>
            </div>
        </div>
    )
}