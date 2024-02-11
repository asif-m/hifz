import { TextField } from "@suid/material";
import { createSignal } from "solid-js";
import { AudioPlayerState } from "~/models/audio-player-state";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: { value: number, onChange: (value: number) => void }) {
    const { value, onChange} = props;
    const { setAudioPlayerState, setAudioCurrentTime, setAudioTimetrackAutoUpdate } = useStore();
    const [localValue, setLocalValue] = createSignal<string|number>(value);

    function onValueChange(v: string) {
        setLocalValue(()=>v)
        if(v===""){
            return;
        }
        try {
            const time = parseFloat(parseFloat(v).toPrecision(1));
            onChange(time);
            setAudioCurrentTime(() => time);
        } catch (e) {

        }
    }

    return (
        <TextField
            value={localValue()}
            inputProps={{ style: { "font-size": "8px" } }} // font size of input text
            InputLabelProps={{ style: { "font-size": "8px" } }} // font size of input label
            variant="standard"
            onFocus={() => {
                setAudioPlayerState(() => AudioPlayerState.stopped);
                setAudioTimetrackAutoUpdate(() => false);
                setAudioCurrentTime(() => value);
            }}
            onChange={(event, v) => { onValueChange(v) }}
        />
    )
}