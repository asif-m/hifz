import { Save } from "@suid/icons-material";
import { IconButton } from "@suid/material";
import { For, createEffect, createSignal } from "solid-js";
import { useStore } from "~/store/store";
import { CLocalStorageHelper } from "~/utils/localstorage-helper";

interface IAyahDataInLocalStorageIndividual{chapterNumber: number, verseNumber:number, timestampFrom:number, timestampTo:number}
interface IAyahDataInLocalStorage{
    updatedAt:Date;
    data: Array<IAyahDataInLocalStorageIndividual>
}
export default function AyahTrackerComponent() {
    const {pageData, pageNumber} = useStore();
    const [audioTimeStamps, setAudioTimeStamps] = createSignal<Array<IAyahDataInLocalStorageIndividual>>([]);
    

    createEffect(()=>{
        const page =pageNumber();
        if(page ===0){
            return;
        }
        const key = `Quran Page Audio : ${page}`;
        const {data=[]} = CLocalStorageHelper.read(key) as IAyahDataInLocalStorage;
        const initialData:Array<IAyahDataInLocalStorageIndividual> = [];
        pageData().ayahs.forEach((ayah)=>{
            const index = data.findIndex((a)=> a.chapterNumber === ayah.chapterNumber && a.verseNumber === ayah.verseNumber);
            let timestampFrom = ayah.reciterTimestamps["Shaykh Samir al-Nass"].timestampFrom;
            let timestampTo = ayah.reciterTimestamps["Shaykh Samir al-Nass"].timestampTo;
            if(index !==-1){
                timestampFrom = data[index].timestampFrom;
                timestampTo = data[index].timestampTo;
            }
            initialData.push({
                chapterNumber: ayah.chapterNumber,
                verseNumber: ayah.verseNumber,
                timestampFrom: timestampFrom,
                timestampTo: timestampTo,
            })
        });
        setAudioTimeStamps(()=>initialData)
    })

    function onSave(){
        //CLocalStorageHelper.update(key,audioTimeStamps )
    }


    return (<div>
        <For each={audioTimeStamps()}>{ayah => 
        <div>{`${ayah.chapterNumber}:${ayah.verseNumber}  (${ayah.timestampFrom}-${ayah.timestampTo})`}</div>}</For>
        <IconButton aria-label="Save" onclick={onSave}>
                        <Save />
                    </IconButton>
    </div>)
}