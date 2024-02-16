import { For, batch, createEffect, createSignal } from "solid-js";
import { useStore } from "~/store/store";
import { CLocalStorageHelper } from "~/utils/localstorage-helper";
import { FormControlLabel, IconButton, Radio, RadioGroup } from "@suid/material";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import AyahPlayTrackEditComponent from "./ayah-play-track-edit";
import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import Save from "@suid/icons-material/Save";
import * as ST from "@suid/types";

interface IAyahDataInLocalStorageIndividual {
    chapterNumber: number,
    verseNumber: number,
    timestampFrom?: number,
    timestampTo?: number
}

interface IAyahDataInLocalStorage {
    updatedAt: Date;
    data: { [key in number]: { [key in number]: IAyahDataInLocalStorageIndividual } }
}

export default function AyahTrackerComponent() {
    const {
        pageData,
        chapterNumber,
        pageNumber,
        audioCurrentTime,
        pressedKey,
        audioPlayerState,
        setAudioStartTime,
        audioTrackerState,
        setAudioTrackerState,
        pageSurahAudioTimeStamps,
        setPageSurahAudioTimeStamps,
        ayahInCurrentPageSurah,
        setAyahInCurrentPageSurah
    } = useStore();
    const key = `sameer-nass-audio-data`;

    const [captureIndex, setCaptureIndex] = createSignal(0);
    const [saveClickCounter, setSaveClickCounter] = createSignal(0);

    function getAllAudioTimeStamps() {
        return CLocalStorageHelper.read(key) as IAyahDataInLocalStorage;
    }

    createEffect(() => {
        const pageInfo = pageData();
        const chapter = chapterNumber();
        const aTS = getAllAudioTimeStamps();

        if (!pageInfo) {
            return;
        }

        let pageSurahAudioTimeStampsLocal: Array<IReciterTimeStamp> = [];
        let ayahInCurrentPageSurahLocal: Array<{ chapterNumber: number, verseNumber: number }> = []


        let hasModifications = false;
        let  firstTimestamp =0;
        pageInfo.ayahs.forEach((ayah) => {
            const { chapterNumber, verseNumber, reciterTimestamps } = ayah;
            const { timestampFrom, timestampTo } = reciterTimestamps["Shaykh Samir al-Nass"];


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
                if (chapterNumber !== 9 && verseNumber == 1) {
                    //Place holder for Bismi
                    pageSurahAudioTimeStampsLocal.push({
                        timestampFrom: aTS.data[chapterNumber][verseNumber].timestampFrom || 0,
                        timestampTo: aTS.data[chapterNumber][verseNumber].timestampTo || 0
                    })
                    ayahInCurrentPageSurahLocal.push({
                        chapterNumber,
                        verseNumber: 0
                    })
                }
                firstTimestamp = aTS.data[chapterNumber][verseNumber].timestampFrom ||0;
                pageSurahAudioTimeStampsLocal.push({
                    timestampFrom: aTS.data[chapterNumber][verseNumber].timestampFrom || 0,
                    timestampTo: aTS.data[chapterNumber][verseNumber].timestampTo || 0
                })

                ayahInCurrentPageSurahLocal.push({
                    chapterNumber,
                    verseNumber
                })
            }
        });

        if (hasModifications) {
            saveToLocalStorage(aTS);
        }

        batch(() => {
            setPageSurahAudioTimeStamps(() => pageSurahAudioTimeStampsLocal);
            setAyahInCurrentPageSurah(() => ayahInCurrentPageSurahLocal);
            setAudioStartTime(()=>firstTimestamp);
        })

    })

    createEffect(() => {
        const c = chapterNumber();
        setCaptureIndex(() => 0);
    })

    createEffect(() => {
        //NOTE: Do not remove this unused variables.
        const chapter = chapterNumber()
        const pageData = pageNumber();
        setAudioTrackerState(() => AudioTrackerState.CAPTURE);
    }, [chapterNumber(), pageNumber()])

    createEffect(() => {
        const autoUpdate = audioTrackerState() === AudioTrackerState.CAPTURE;
        const key = pressedKey()
        const playerState = audioPlayerState()
        if (!autoUpdate) {
            return;
        }
        if (key === "Space" && playerState === AudioPlayerState.PLAYING) {
            setPageSurahAudioTimeStamps((prev) => {
                const newValue = [...prev];
                const lastItem = prev[prev.length - 1];
                newValue.push({ timestampFrom: lastItem.timestampTo, timestampTo: lastItem.timestampTo })
                return newValue;
            })
            setCaptureIndex((prev) => prev + 1);
        }
    })

    createEffect(() => {
        const cIndex = captureIndex();
        const currentTime = audioCurrentTime();
        const autoUpdate = audioTrackerState() === AudioTrackerState.CAPTURE;

        if (!autoUpdate) {
            return;
        }

        setPageSurahAudioTimeStamps((prev) => {
            return prev.map((d, i) => {
                if (cIndex + 1 === i) {
                    return { ...d, timestampFrom: currentTime };
                } else if (cIndex === i) {
                    return { ...d, timestampTo: currentTime };
                }
                return d;
            });
        });
    })



    createEffect(() => {
        const saveClick = saveClickCounter();
        const pageTime = pageSurahAudioTimeStamps();
        const ayahInCurrentPageSurahLocal = ayahInCurrentPageSurah();
        const allAudio = getAllAudioTimeStamps();

        if (saveClick === 0) {
            return;
        }

        for (let i = 0; i < ayahInCurrentPageSurahLocal.length - 1; i++) {
            const { timestampFrom, timestampTo } = pageTime[i];
            const { chapterNumber, verseNumber } = ayahInCurrentPageSurahLocal[i]
            allAudio.data[chapterNumber][verseNumber] = {
                chapterNumber,
                verseNumber,
                timestampFrom,
                timestampTo
            };
        }
        saveToLocalStorage(allAudio);
    })

    function saveToLocalStorage(data: IAyahDataInLocalStorage) {
        CLocalStorageHelper.update(key, data);
    }
    function onSave() {
        setSaveClickCounter((prev) => prev + 1);
    }



    return (<div>
        <div style={{ display: "flex", "flex-direction": "row","margin-top":"4px" }}>
            <RadioGroup
                value={audioTrackerState()}
                onChange={(event: ST.ChangeEvent<HTMLInputElement>) => {
                    setAudioTrackerState(()=>event.target.value as AudioTrackerState);
                  }}
            >
                <div style={{"display":"flex"}}>
                    <FormControlLabel value={AudioTrackerState.CAPTURE} control={<Radio />} label="C" />
                    <FormControlLabel value={AudioTrackerState.EDIT} control={<Radio />} label="E" />
                    <FormControlLabel value={AudioTrackerState.REVIEW} control={<Radio />} label="R" />
                </div>
            </RadioGroup>
            <IconButton aria-label="stop" onclick={() => onSave()}>
                <Save />
            </IconButton>
        </div>
        <For each={pageSurahAudioTimeStamps()}>
            {(ayah, i) => (
                <AyahPlayTrackEditComponent
                    index={i()}
                />)}
        </For>
    </div>)
}