import { useStore } from "~/store/store";
import EditableTextboxControlsComponent from "./editable-textbox.component";
import { Accessor, Show } from "solid-js";
import { colors } from "~/models/style-constants";
import { AudioTrackerState } from "~/models/audio-state";

export default function AyahPlayTrackEditComponent(props: {
    index: Accessor<number>,
}) {
    const { index } = props;
    const { pageSurahAudioTimeStamps, captureIndex, setPageSurahAudioTimeStamps, ayahInCurrentPageSurah, audioTrackerState } = useStore();
    const ayahs = ayahInCurrentPageSurah();
    const chapter = ayahs[index()]?.chapterNumber || 0;
    const verse = ayahs[index()]?.verseNumber === 0 ? "B" : (ayahs[index()]?.verseNumber || 0)


    function onDelete() {
        const timestamps = pageSurahAudioTimeStamps();
        const { timestampTo: timestampToOfItemDeleted } = timestamps[index()];
        const aIndex = index();
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => {
                if (i === aIndex - 1) {
                    return { ...t, timestampTo: timestampToOfItemDeleted }
                }
                if (i >= aIndex && i < timestamps.length - 1) {
                    const { timestampTo, timestampFrom } = timestamps[i + 1]
                    return { ...t, timestampTo, timestampFrom }
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
            border: captureIndex() === index() ? `solid ${colors.ayahsTrackBorderColor} 2px` : "",
            "border-radius": "2px",
            //margin: "8px",
            "font-size": "10px",
            "min-width": "160px"
        }}>
            <div style={{ padding: "4px 8px" }}>{`${chapter} : ${verse} `}</div>
            <EditableTextboxControlsComponent index={index} type={"from"} />
            <div style={{ padding: "4px 8px" }}>-</div>
            <EditableTextboxControlsComponent index={index} type={"to"} />
            <div>
                <Show when={index() !== 0 && audioTrackerState() === AudioTrackerState.EDIT}>
                    <div role={"button"} style={{ cursor: "pointer" }} onclick={() => onDelete()}>
                        ⌫
                    </div>
                </Show>
            </div>
        </div>
    )
}