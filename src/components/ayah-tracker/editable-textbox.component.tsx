import { Accessor, createSignal } from "solid-js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: {index: Accessor<number>, type: "from"|"to"}) {
    const { type, index } = props;
    const { pageSurahAudioTimeStamps, setPageSurahAudioTimeStamps,setCaptureIndex, setAudioPlayerState, setAudioCurrentTime, setAudioTrackerState , audioTrackerState} = useStore();
    const {timestampFrom, timestampTo} = pageSurahAudioTimeStamps()[index()]
    const isFrom =(type === "from") 
    const value =  isFrom? timestampFrom : timestampTo;
    const onChange = isFrom? onFromChange:onToChange;
    const [localValue, setLocalValue] = createSignal<string | number>(value);

    function onFromChange(v: number) {
        const aIndex =  index();
        setPageSurahAudioTimeStamps((prev) => prev
            .map((t, i) => (i === aIndex) ? { ...t, timestampFrom: v } : t)
        )
    }
    function onToChange(v: number) {
        const aIndex =  index();
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
            step="0.5"
            value={localValue()}
            style={{width:"65px"}}
            readOnly = {audioTrackerState() !== AudioTrackerState.EDIT}
            onFocus={() => {
                setAudioPlayerState(() => AudioPlayerState.STOPPED);
                setAudioTrackerState(() => AudioTrackerState.EDIT);
                setAudioCurrentTime(() => value);
                setCaptureIndex(()=>index())
            }}
            onChange={(e) => {
                onValueChange(e.target.value)
            }}
        />
    )
}