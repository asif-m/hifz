import { createSignal } from "solid-js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: { value: number, onChange: (value: number) => void }) {
    const { value, onChange } = props;
    const { setAudioPlayerState, setAudioCurrentTime, setAudioTrackerState } = useStore();
    const [localValue, setLocalValue] = createSignal<string | number>(value);

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
            onFocus={() => {
                setAudioPlayerState(() => AudioPlayerState.STOPPED);
                setAudioTrackerState(() => AudioTrackerState.EDIT);
                setAudioCurrentTime(() => value);
            }}
            onChange={(e) => {
                onValueChange(e.target.value)
            }}
        />
    )
}