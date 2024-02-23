import { Accessor, batch, createEffect, createSignal } from "solid-js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import { IAyahBase } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: { index: Accessor<number>, type: "from" | "to" }) {
    const { type, index } = props;
    const { setVerseNumber, setChapterNumber, pageSurahAudioTimeStamps, setPageSurahAudioTimeStamps, ayahInCurrentPageSurah, setCaptureIndex, setAudioPlayerState, setAudioCurrentTime, setAudioTrackerState, audioTrackerState } = useStore();
    const { timestampFrom, timestampTo } = pageSurahAudioTimeStamps()[index()]
    const isFrom = (type === "from")
    const value = isFrom ? timestampFrom : timestampTo;
    const onChange = isFrom ? onFromChange : onToChange;
    const [localValue, setLocalValue] = createSignal<string | number>(value);
    const { chapterNumber, verseNumber } = (ayahInCurrentPageSurah()[index()] || {}) as IAyahBase;

    const [focusCounter, setFocusCounter] = createSignal(0);

    createEffect(() => {
        const atState = audioTrackerState();
        const fCounter = focusCounter()
        const i = index();
        if (fCounter === 0) {
            return;
        }

        if (atState === AudioTrackerState.CAPTURE) {
            batch(() => {
                setAudioTrackerState(() => AudioTrackerState.REVIEW);
                setAudioPlayerState(() => AudioPlayerState.PAUSE);
                setAudioCurrentTime(() => value);
                setCaptureIndex(() => i)
            });
        }

        if (atState === AudioTrackerState.REVIEW) {
            batch(() => {
                setAudioCurrentTime(() => timestampFrom);
                setCaptureIndex(() => i);
                setChapterNumber(() => chapterNumber)
                setVerseNumber(() => verseNumber)
                setAudioPlayerState(() => AudioPlayerState.PLAY);
            });
        }
    })

    function onFromChange(v: number) {
        const aIndex = index();
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => (i === aIndex) ? { ...t, timestampFrom: v } : t)
        )
    }
    function onToChange(v: number) {
        const aIndex = index();
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => (i === aIndex) ? { ...t, timestampTo: v } : t)
        )
    }

    function isValidNumber(value: any): boolean {
        // Check if the value is of type number and not NaN
        return typeof value === 'number' && !isNaN(value);
    }

    function onValueChange(v: string) {
        setLocalValue(() => v)
        if (v === "") {
            return;
        }
        try {
            const time = parseFloat(parseFloat(v).toFixed(2));
            if (!isValidNumber(time)) {
                return;
            }
            onChange(time);
            setAudioCurrentTime(() => time);
        } catch (e) {

        }
    }

    return (
        <input type="number"
            name="price"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            value={localValue()}
            style={{ width: "65px" }}
            readOnly={audioTrackerState() === AudioTrackerState.CAPTURE}
            onFocus={() => {
                setFocusCounter((prev) => prev + 1);
            }}
            onChange={(e) => {
                onValueChange(e.target.value)
            }}
        />
    )
}