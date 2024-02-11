import { For, createEffect, createSignal } from "solid-js";
import { useStore } from "~/store/store";
import { CLocalStorageHelper } from "~/utils/localstorage-helper";
import { Switch } from "@suid/material";
import { AudioPlayerState } from "~/models/audio-player-state";
import AyahPlayTrackEditComponent from "./ayah-play-track-edit";

interface IAyahDataInLocalStorageIndividual { chapterNumber: number, verseNumber: number, timestampFrom: number, timestampTo: number }
interface IAyahDataInLocalStorage {
    updatedAt: Date;
    data: { [key in number]: { [key in number]: IAyahDataInLocalStorageIndividual } }
}
export default function AyahTrackerComponent() {
    const { pageData, chapterNumber, verseNumber, pageNumber, audioCurrentTime, pressedKey, audioPlayerState, audioTimetrackAutoUpdate, setAudioTimetrackAutoUpdate } = useStore();
    const key = `sameer-nass-audio-data`;
    const [allAudioTimeStamps, setAllAudioTimeStamps] = createSignal<IAyahDataInLocalStorage>({ updatedAt: new Date(), data: {} });
    const [pageAudioTimeStamps, setPageAudioTimeStamps] = createSignal<Array<IAyahDataInLocalStorageIndividual>>([]);
    const [captureIndex, setCaptureIndex] = createSignal(0);
    const [saveClickCounter, setSaveClickCounter] = createSignal(0);

    createEffect(() => {
        setAllAudioTimeStamps(() => CLocalStorageHelper.read(key) as IAyahDataInLocalStorage);
    });

    createEffect(() => {
        const pageInfo = pageData();
        const chapter = chapterNumber();
        const aTS = allAudioTimeStamps();
        if (!pageInfo) {
            return;
        }

        const initialData: Array<IAyahDataInLocalStorageIndividual> = [];
        let hasModifications = false;
        pageInfo.ayahs.forEach((ayah) => {
            const { chapterNumber, verseNumber } = ayah;
            const { timestampFrom, timestampTo } = ayah.reciterTimestamps["Shaykh Samir al-Nass"];
            if (!aTS.data) {
                aTS.data = {};
            }
            if (!aTS.data[chapterNumber]) {
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
            if (chapter === ayah.chapterNumber) {
                initialData.push({
                    chapterNumber: ayah.chapterNumber,
                    verseNumber: ayah.verseNumber,
                    timestampFrom: aTS.data[chapterNumber][verseNumber].timestampFrom,
                    timestampTo: aTS.data[chapterNumber][verseNumber].timestampTo,
                })
            }
        });
        setPageAudioTimeStamps(() => initialData);
        if (hasModifications) {
            save(aTS);
        }
    })

    createEffect(() => {
        const c = chapterNumber();
        setCaptureIndex(() => 0);
    })
    createEffect(() => {
        const autoUpdate = audioTimetrackAutoUpdate();
        const key = pressedKey()
        const playerState = audioPlayerState()
        if (!autoUpdate) {
            return;
        }
        if (key === "Space" && playerState === AudioPlayerState.playing) {
            setCaptureIndex((prev) => prev + 1);
        }
        onSave();
    })
    createEffect(() => {
        const index = captureIndex();
        const currentTime = audioCurrentTime();
        const chapterIndex = chapterNumber();
        const autoUpdate = audioTimetrackAutoUpdate();

        if (!autoUpdate) {
            return;
        }

        setPageAudioTimeStamps((prev) => {
            const firstChapterIndex = prev.findIndex((d) => d.chapterNumber === chapterIndex);
            if (firstChapterIndex === -1) {
                return prev;
            }
            return prev.map((d, i) => {
                if (index + firstChapterIndex === i) {
                    return { ...d, timestampTo: currentTime };
                }
                else if (index + firstChapterIndex + 1 === i) {
                    return { ...d, timestampFrom: currentTime };
                }
                return d;
            });
        });
    })

    createEffect(() => {
        //NOTE: Do not remove this unused variables.
        const chapter = chapterNumber()
        const pageData = pageNumber();
        setAudioTimetrackAutoUpdate(() => true);
    }, [chapterNumber(), pageNumber()])

    createEffect(() => {
        const saveClick = saveClickCounter();
        const pageTime = pageAudioTimeStamps();
        const allAudio = allAudioTimeStamps();

        if (saveClick === 0) {
            return;
        }
        pageTime.forEach((ayah) => {
            allAudio.data[ayah.chapterNumber][ayah.verseNumber] = ayah;
        })
        save(allAudio);
        setAllAudioTimeStamps(allAudio);
    })

    function save(data: IAyahDataInLocalStorage) {
        CLocalStorageHelper.update(key, data);
    }
    function onSave() {
        setSaveClickCounter((prev) => prev + 1);
    }

    function setTimestampFrom(index: number, value: number) {
        setPageAudioTimeStamps((prev) => prev.map((p, i) => i === index ? ({ ...p, timestampFrom: value }) : p))
        onSave();
    }
    function setTimestampTo(index: number, value: number) {
        setPageAudioTimeStamps((prev) => prev.map((p, i) => i === index ? ({ ...p, timestampTo: value }) : p))
        onSave();
    }

    return (<div>
        <Switch
            checked={audioTimetrackAutoUpdate()}
            onChange={(event, value) => {
                setAudioTimetrackAutoUpdate(value);
            }}
            inputProps={{ "aria-label": "controlled" }}
        />
        <For each={pageAudioTimeStamps()}>
            {(ayah, index) => <AyahPlayTrackEditComponent
                ayah={{ ...ayah, index: index(), setTimestampFrom, setTimestampTo }}
                highlight={index() === captureIndex()} />}</For>
        {/* <IconButton aria-label="stop" onclick={() => onSave()}>
            <Save />
        </IconButton> */}
    </div>)
}