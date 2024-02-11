import { TextField } from "@suid/material";
import { AudioPlayerState } from "~/models/audio-player-state";
import { useStore } from "~/store/store";

export default function EditableTextboxControlsComponent(props: { value: number, isFrom: boolean, onChange: (value: number) => void }) {
    const { value, onChange, isFrom } = props;
    const { setAudioPlayerState, setAudioCurrentTime, setAudioTimetrackAutoUpdate } = useStore();
    
    function onValueChange(v:string){
        try{
            const time = parseFloat(parseFloat(v).toPrecision(1));
            onChange(time);
            setAudioCurrentTime(() => time);
        }catch(e){

        }
    }
    return (
        <div>
         <TextField
                    value={value}
                    inputProps={{ style: { "font-size": "8px" }}} // font size of input text
                    InputLabelProps={{ style: { "font-size": "8px" } }} // font size of input label
                    variant="standard"
                    onFocus={() => {
                        setAudioPlayerState(() => AudioPlayerState.stopped);
                        setAudioTimetrackAutoUpdate(() => false);
                        setAudioCurrentTime(() => value);
                    }}
                    onChange={(event, v) => {onValueChange(v)}}
                />
        </div>
    )
}