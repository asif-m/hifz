import { For, createSignal } from "solid-js";
import { useStore } from "~/store/store";
import { IconButton } from "@suid/material";
import Save from "@suid/icons-material/Save";

interface IAyahDataInLocalStorageIndividual { chapterNumber: number, verseNumber: number, timestampFrom: number, timestampTo: number }
interface IAyahDataInLocalStorage {
    updatedAt: Date;
    data: Array<IAyahDataInLocalStorageIndividual>
}
export default function AyahTrackerComponent() {
    const { pageData, pageNumber } = useStore();
    const [audioTimeStamps, setAudioTimeStamps] = createSignal<Array<IAyahDataInLocalStorageIndividual>>([]);

     function onSave(){}
    return (<div>
        <For each={audioTimeStamps()}>{ayah =>
            <div>{`${ayah.chapterNumber}:${ayah.verseNumber}  (${ayah.timestampFrom}-${ayah.timestampTo})`}</div>}</For>
        <IconButton aria-label="Save" onclick={onSave}>
            <Save />
        </IconButton> 
    </div>)
}