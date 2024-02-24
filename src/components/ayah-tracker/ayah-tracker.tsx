import { For, batch, createEffect } from "solid-js";
import { useStore } from "~/store/store";
import { CLocalStorageHelper } from "~/utils/localstorage-helper";
import { FormControlLabel, IconButton, Radio, RadioGroup } from "@suid/material";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import AyahPlayTrackEditComponent from "./ayah-play-track-edit";
import { BISMI_INDEX, IReciterTimeStamp } from "~/models/ayah-info-interface";
import NavigateNext from "@suid/icons-material/NavigateNext";
import Download from "@suid/icons-material/Download";
import * as ST from "@suid/types";
import { CSurah } from "~/models/surah";
import AudioPlayerControlsComponent from "../audio/audio-player-controls";
import { useNavigate } from "@solidjs/router";

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
        setChapterNumber,
        setVerseNumber,
        pageNumber,
        audioCurrentTime,
        audioCurrentTimeNonCapture,
        pressedKey,
        setPressedKey,
        audioPlayerState,
        setAudioStartTime,
        audioTrackerState,
        setAudioTrackerState,
        pageSurahAudioTimeStamps,
        setPageSurahAudioTimeStamps,
        ayahInCurrentPageSurah,
        setAyahInCurrentPageSurah,
        setAudioPlayerState,
        captureIndex,
        setCaptureIndex,
        saveClickCounter,
        setSaveClickCounter,
    } = useStore();
    const key = `sameer-nass-audio-data-page-${pageNumber()}`;
    const navigate = useNavigate();

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
        let firstTimestamp = -1;
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
                if (CSurah.shouldAddBismi(chapterNumber, verseNumber)) {
                    aTS.data[chapterNumber][BISMI_INDEX] = {
                        chapterNumber,
                        verseNumber: BISMI_INDEX,
                        timestampFrom,
                        timestampTo
                    }
                }
                aTS.data[chapterNumber][verseNumber] = {
                    chapterNumber,
                    verseNumber,
                    timestampFrom,
                    timestampTo
                }
            }
            if (chapter === ayah.chapterNumber) {
                if (CSurah.shouldAddBismi(chapterNumber, verseNumber)) {
                    //Place holder for Bismi
                    pageSurahAudioTimeStampsLocal.push({
                        timestampFrom: aTS.data[chapterNumber][BISMI_INDEX].timestampFrom || 0,
                        timestampTo: aTS.data[chapterNumber][BISMI_INDEX].timestampTo || 0
                    })
                    ayahInCurrentPageSurahLocal.push({
                        chapterNumber,
                        verseNumber: BISMI_INDEX
                    })
                    firstTimestamp = aTS.data[chapterNumber][BISMI_INDEX].timestampFrom || 0;
                } else {
                    if (firstTimestamp === -1) {
                        firstTimestamp = aTS.data[chapterNumber][verseNumber].timestampFrom || 0;
                    }
                }
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
            setAudioTrackerState(() => AudioTrackerState.CAPTURE);
        } else {
            setAudioTrackerState(() => AudioTrackerState.REVIEW);
        }

        batch(() => {
            setPageSurahAudioTimeStamps(() => pageSurahAudioTimeStampsLocal);
            setAyahInCurrentPageSurah(() => ayahInCurrentPageSurahLocal);
            setAudioStartTime(() => firstTimestamp);
        })
    })

    createEffect(() => {
        const c = chapterNumber();
        setCaptureIndex(() => 0);
    })

    createEffect(() => {
        const isCaptureMode = audioTrackerState() === AudioTrackerState.CAPTURE;
        const key = pressedKey()
        const playerState = audioPlayerState()

        if (isCaptureMode && key === "Space") {
            if(playerState === AudioPlayerState.PAUSE){
                setPressedKey(() => "");
                setAudioPlayerState(() => AudioPlayerState.PLAY);
            }else if(playerState === AudioPlayerState.PLAY){
                setCaptureIndex((prev) => prev + 1);
            }
            return;
        }

        // if(key ==="KeyC"){
        //     setAudioTrackerState(()=> AudioTrackerState.CAPTURE);
        //     return;
        // }
        // if(key ==="KeyR"){
        //     setAudioTrackerState(()=> AudioTrackerState.REVIEW);
        //     return;
        // }
    })

    createEffect(() => {
        const cIndex = captureIndex();
        const currentTime = audioCurrentTime();
        const isCaptureMode = audioTrackerState() === AudioTrackerState.CAPTURE;
        const isPlaying = audioPlayerState() === AudioPlayerState.PLAY;

        if (!isCaptureMode) {
            return;
        }
        if (!isPlaying) {
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
        const currentTime = audioCurrentTimeNonCapture();
        const atState = audioTrackerState();
        const timeStamps = pageSurahAudioTimeStamps();
        const ayahs = ayahInCurrentPageSurah();
        const cIndex = captureIndex();

        if (timeStamps.length === cIndex) {
            batch(() => {
                setAudioTrackerState(() => AudioTrackerState.REVIEW);
                setAudioPlayerState(() => AudioPlayerState.PAUSE);
            })
            return;
        }

        if (atState === AudioTrackerState.REVIEW) {
            for (let i = 0; i < timeStamps.length; i++) {
                const { timestampFrom, timestampTo } = timeStamps[i];
                if (!ayahs[i]) {
                    continue;
                }
                if (currentTime >= timestampFrom && currentTime <= timestampTo) {
                    const { verseNumber } = ayahs[i];
                    if (verseNumber !== 0) {
                        batch(() => {
                            setVerseNumber(() => verseNumber);
                            setCaptureIndex(() => i)
                        })
                    }
                    break;
                }
            }
        } else if (atState === AudioTrackerState.CAPTURE) {
            if (ayahs[cIndex]) {
                const { verseNumber } = ayahs[cIndex];
                if (verseNumber !== 0) {
                    setVerseNumber(() => verseNumber);
                }
            }
        }


    })


    createEffect(() => {
        const saveClick = saveClickCounter();
        const pageTime = pageSurahAudioTimeStamps();
        const ayahInCurrentPageSurahLocal = ayahInCurrentPageSurah();
        const allAudio = getAllAudioTimeStamps();

        if (saveClick === 0) {
            return;
        }

        for (let i = 0; i < ayahInCurrentPageSurahLocal.length; i++) {
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
    function onDownload(){
        for(let i=1;i<=604;i++){
            const name = `sameer-nass-audio-data-page-${i}`
            const data = localStorage.getItem(name);
            if(data){
                console.log({name, data,i});
                setTimeout(()=>{downloadJsonFile(JSON.parse(data), `${name}.json`);}, i*300)
            }
        }
    }
    function downloadJsonFile(data:any, filename: string){
        // Creating a blob object from non-blob data using the Blob constructor
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        // Create a new anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'download';
        a.click();
        a.remove();
    }
    function onNext() {
        const ayahInCurrentPageSurahLocal = ayahInCurrentPageSurah();
        const pData = pageData();
        const { chapterNumber, verseNumber } = ayahInCurrentPageSurahLocal[ayahInCurrentPageSurahLocal.length - 1];
        if (!pData) {
            return;
        }
        const { pageNumber, ayahs } = pData;
        let lastIndex = -1;
        for (let i = 0; i < ayahs.length; i++) {
            const ayah = ayahs[i];
            if (ayah.chapterNumber === chapterNumber && ayah.verseNumber === verseNumber) {
                lastIndex = i;
                break;
            }
        }
        if (lastIndex == -1 || lastIndex === ayahs.length - 1) {
            //Last verse. Go to next page
            navigate(`/page/${pageNumber + 1}`, { replace: true })
            setTimeout(function(){
                location.reload();
            }, 100);
        } else {
            const { chapterNumber, verseNumber } = ayahs[lastIndex + 1];
            navigate(`/surah/${chapterNumber}`, { replace: true })
            setTimeout(function(){
                location.reload();
            }, 100);
        }
    }



    return (<div>
        <div style={{ display: "flex", "flex-direction": "row", "margin-top": "4px" }}>
            <RadioGroup
                value={audioTrackerState()}
                onChange={(event: ST.ChangeEvent<HTMLInputElement>) => {
                    const value = event.target.value as AudioTrackerState
                    // if (value === AudioTrackerState.REVIEW) {
                    //     setAudioPlayerState(() => AudioPlayerState.PAUSE);
                    // }
                    setAudioTrackerState(() => value);
                }}
            >
                <div style={{ "display": "flex" }}>
                    <FormControlLabel value={AudioTrackerState.CAPTURE} control={<Radio />} label={AudioTrackerState.CAPTURE} />
                    <FormControlLabel value={AudioTrackerState.REVIEW} control={<Radio />} label={AudioTrackerState.REVIEW} />
                </div>
            </RadioGroup>
            <AudioPlayerControlsComponent />
            {/* <IconButton aria-label="save" onclick={() => onSave()}>
                <Save />
            </IconButton> */}
            <IconButton aria-label="download" onclick={() => onDownload()}>
                <Download />
            </IconButton>
            <IconButton aria-label="next" onclick={() => {
                onSave();
                setTimeout(()=>{
                    onNext()
                }, 500)
                }}>
                <NavigateNext />
            </IconButton>
        </div>
        <For each={pageSurahAudioTimeStamps()}>
            {(ayah, index) => (
                <AyahPlayTrackEditComponent
                    index={index}
                />)}
        </For>
    </div>)
}