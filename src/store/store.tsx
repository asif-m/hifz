import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageData } from "~/models/page";
import { IArabicWord } from "~/models/word";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import { IReciterTimeStamp, IAyahBase } from "~/models/ayah-info-interface";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number;
    chapterNumber: number;
    pageNumber: number;
    pageData: IPageData;
    lineData: Array<Array<IArabicWord>>;
    audioStartTime: number;
    audioCurrentTime: number;
    audioCurrentTimeNonCapture: number;
    audioLoaded: boolean;
    audioPlayerState: AudioPlayerState;
    pressedKey: string;
    audioTrackerState: AudioTrackerState;
    pageSurahAudioTimeStamps: Array<IReciterTimeStamp>;
    ayahInCurrentPageSurah: Array<IAyahBase>;
    captureIndex: number;
    saveClickCounter: number;
}

export function getInitialStoreData(): IStoreData {
    return {
        verseNumber: 0,
        chapterNumber: 0,
        pageNumber: 0,
        pageData: {
            pageNumber: 0,
            manzils: [],
            juzs: [],
            hizbs: [],
            rubElHizbs: [],
            rukus: [],
            chapterAndAyahRange: [],
            ayahs: []
        },
        lineData: [[]],
        audioStartTime: 0,
        audioCurrentTime: 0,
        audioCurrentTimeNonCapture: 0,
        audioLoaded: false,
        audioPlayerState: AudioPlayerState.PAUSE,
        audioTrackerState: AudioTrackerState.CAPTURE,
        pressedKey: "",
        pageSurahAudioTimeStamps: [],
        ayahInCurrentPageSurah: [],
        captureIndex: 0,
        saveClickCounter: 0,
    }
}

export interface IStoreUseContextData {
    verseNumber: Accessor<number>,
    setVerseNumber: Setter<number>
    chapterNumber: Accessor<number>
    setChapterNumber: Setter<number>
    pageNumber: Accessor<number>
    setPageNumber: Setter<number>
    pageData: Accessor<IPageData>
    setPageData: Setter<IPageData>
    lineData: Accessor<Array<Array<IArabicWord>>>
    setLineData: Setter<Array<Array<IArabicWord>>>
    audioStartTime: Accessor<number>
    setAudioStartTime: Setter<number>
    audioCurrentTime: Accessor<number>
    setAudioCurrentTime: Setter<number>
    audioCurrentTimeNonCapture: Accessor<number>
    setAudioCurrentTimeNonCapture: Setter<number>
    audioLoaded: Accessor<boolean>
    setAudioLoaded: Setter<boolean>
    audioPlayerState: Accessor<AudioPlayerState>
    setAudioPlayerState: Setter<AudioPlayerState>
    audioTrackerState: Accessor<AudioTrackerState>
    setAudioTrackerState: Setter<AudioTrackerState>
    pressedKey: Accessor<string>
    setPressedKey: Setter<string>
    pageSurahAudioTimeStamps: Accessor<Array<IReciterTimeStamp>>
    setPageSurahAudioTimeStamps: Setter<Array<IReciterTimeStamp>>
    ayahInCurrentPageSurah: Accessor<Array<IAyahBase>>
    setAyahInCurrentPageSurah: Setter<Array<IAyahBase>>
    captureIndex: Accessor<number>
    setCaptureIndex: Setter<number>
    saveClickCounter: Accessor<number>
    setSaveClickCounter: Setter<number>
}


export function StoreProvider(props: ComponentProps<IStoreData>) {
    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageNumber, setPageNumber] = createSignal(props.pageNumber);
    const [pageData, setPageData] = createSignal(props.pageData);
    const [lineData, setLineData] = createSignal(props.lineData);
    const [audioStartTime, setAudioStartTime] = createSignal(props.audioStartTime);
    const [audioCurrentTime, setAudioCurrentTime] = createSignal(props.audioCurrentTime);
    const [audioCurrentTimeNonCapture, setAudioCurrentTimeNonCapture] = createSignal(props.audioCurrentTimeNonCapture);
    const [audioLoaded, setAudioLoaded] = createSignal(props.audioLoaded);
    const [audioPlayerState, setAudioPlayerState] = createSignal(props.audioPlayerState);
    const [audioTrackerState, setAudioTrackerState] = createSignal(props.audioTrackerState);
    const [pressedKey, setPressedKey] = createSignal(props.pressedKey);
    const [pageSurahAudioTimeStamps, setPageSurahAudioTimeStamps] = createSignal<Array<IReciterTimeStamp>>(props.pageSurahAudioTimeStamps);
    const [ayahInCurrentPageSurah, setAyahInCurrentPageSurah] = createSignal<Array<IAyahBase>>(props.ayahInCurrentPageSurah)
    const [captureIndex, setCaptureIndex] = createSignal(props.captureIndex);
    const [saveClickCounter, setSaveClickCounter] = createSignal(props.saveClickCounter);

    const value = {
        verseNumber, setVerseNumber,
        chapterNumber, setChapterNumber,
        pageNumber, setPageNumber,
        pageData, setPageData,
        lineData, setLineData,
        audioStartTime, setAudioStartTime,
        audioPlayerState, setAudioPlayerState,
        audioCurrentTime, setAudioCurrentTime,
        audioCurrentTimeNonCapture, setAudioCurrentTimeNonCapture,
        audioLoaded, setAudioLoaded,
        audioTrackerState, setAudioTrackerState,
        pressedKey, setPressedKey,
        pageSurahAudioTimeStamps, setPageSurahAudioTimeStamps,
        ayahInCurrentPageSurah, setAyahInCurrentPageSurah,
        captureIndex, setCaptureIndex,
        saveClickCounter, setSaveClickCounter,
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    return useContext(StoreContext) as IStoreUseContextData;
}
