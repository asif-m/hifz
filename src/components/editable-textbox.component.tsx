import { TextField } from "@suid/material";
import { Show, createSignal } from "solid-js";
import { AudioPlayerState } from "~/models/audio-player-state";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: { value: number, isFrom : boolean, onChange: (value: number) => void }) {
    const { value, onChange, isFrom } = props;
    const {setAudioPlayerState, setAudioCurrentTime, setAudioTimetrackAutoUpdate} = useStore();
    const [editing, setEditing] = createSignal(false);
    function getTime(v: string){
        return parseFloat(parseFloat(v).toPrecision(1));
    }
    return (
        <div>
            <Show when={editing()}>
                <TextField
                    type="number"
                    value={value}
                    inputProps={{style: {"font-size": "8px"}}} // font size of input text
                    InputLabelProps={{style: {"font-size": "8px"}}} // font size of input label
                    variant="standard"
                    onFocus={()=>{
                        setAudioPlayerState(()=> AudioPlayerState.stopped);
                        setAudioCurrentTime(()=> value);
                    }}
                    onBlur={()=>setEditing(()=>false)}
                    onChange={(event, v) => {
                        const time = getTime(v);
                        onChange(time);
                        setAudioCurrentTime(()=> time);
                    }}
                />
            </Show>
            <Show when={!editing()}>
               <div role="button" onClick={()=>{
                    setAudioTimetrackAutoUpdate(()=>false);
                    setEditing(()=>true)
                }}>{value}</div>
            </Show>
        </div>
    )
}