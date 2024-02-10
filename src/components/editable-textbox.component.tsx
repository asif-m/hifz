import { TextField } from "@suid/material";
import { Show, createSignal } from "solid-js";

export default function EditableTextboxControlsComponent(props: { value: number, onChange: (value: number) => void }) {
    const { value, onChange } = props;
    const [editing, setEditing] = createSignal(false);
    return (
        <div>
            <Show when={editing()}>
                <TextField
                    type="number"
                    value={value}
                    inputProps={{style: {"font-size": "8px"}}} // font size of input text
                    InputLabelProps={{style: {"font-size": "8px"}}} // font size of input label
                    variant="standard"
                    onBlur={()=>setEditing(()=>false)}
                    onChange={(event, value) => onChange(parseFloat(parseFloat(value).toPrecision(1)))}
                />
            </Show>
            <Show when={!editing()}>
               <div role="button" onClick={()=>setEditing(()=>true)}>{value}</div>
            </Show>
        </div>
    )
}