import { For, createEffect, createSignal } from "solid-js";
import { useStore } from "~/store/store";
import { CLocalStorageHelper } from "~/utils/localstorage-helper";

interface IAyahDataInLocalStorageIndividual { chapterNumber: number, verseNumber: number, timestampFrom: number, timestampTo: number }
interface IAyahDataInLocalStorage {
    updatedAt: Date;
    data: {[key in number]:{[key in number]:IAyahDataInLocalStorageIndividual}}
}
export default function AyahTrackerComponent() {
    const { pageData } = useStore();
    const key = `sameer-nass-audio-data`;
    const [allAudioTimeStamps, setAllAudioTimeStamps] = createSignal<IAyahDataInLocalStorage>({updatedAt: new Date(), data:{}});
    const [pageAudioTimeStamps, setPageAudioTimeStamps] = createSignal<Array<IAyahDataInLocalStorageIndividual>>([]);

    createEffect(() => {
        setAllAudioTimeStamps(()=> CLocalStorageHelper.read(key) as IAyahDataInLocalStorage);
    });

    createEffect(() => {
        const pageInfo = pageData();
        const aTS = allAudioTimeStamps();
        if(!pageInfo){
            return;
        }

        const initialData: Array<IAyahDataInLocalStorageIndividual> = [];
        let hasModifications = false;
        pageInfo.ayahs.forEach((ayah) => {
            const {chapterNumber, verseNumber}  =ayah;
            let timestampFrom = ayah.reciterTimestamps["Shaykh Samir al-Nass"].timestampFrom;
            let timestampTo = ayah.reciterTimestamps["Shaykh Samir al-Nass"].timestampTo;
            if(!aTS.data){
                aTS.data = {};
            }
            if(!aTS.data[chapterNumber]){
                aTS.data[chapterNumber] = {};
            }
            if (!aTS.data[chapterNumber][verseNumber]) {
                hasModifications = true;
                aTS.data[chapterNumber][verseNumber] = {
                    chapterNumber,
                    verseNumber,
                    timestampFrom,
                    timestampTo
                }
            }
            initialData.push({
                chapterNumber: ayah.chapterNumber,
                verseNumber: ayah.verseNumber,
                timestampFrom: aTS.data[chapterNumber][verseNumber].timestampFrom,
                timestampTo: aTS.data[chapterNumber][verseNumber].timestampTo,
            })
        });
        setPageAudioTimeStamps(() => initialData);
        if(hasModifications){
            save(aTS);
        }
    })

    function save(data: IAyahDataInLocalStorage){
        CLocalStorageHelper.update(key, data);
    }

    return (<div>
        <For each={pageAudioTimeStamps()}>{ayah =>
            <div>{`${ayah.chapterNumber}:${ayah.verseNumber}  (${ayah.timestampFrom}-${ayah.timestampTo})`}</div>}</For>
    </div>)
}