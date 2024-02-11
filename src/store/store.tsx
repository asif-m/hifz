import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageData } from "~/models/page";
import { IArabicWord } from "~/models/word";
import { AudioPlayerState } from "~/models/audio-player-state";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number;
    chapterNumber: number;
    pageNumber: number;
    pageData: IPageData;
    lineData: Array<Array<IArabicWord>>;
    audioStartTime: number;
    audioCurrentTime: number;
    audioLoaded: boolean;
    audioPlayerState: AudioPlayerState;
    pressedKey: string;
    audioTimetrackAutoUpdate: boolean;
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
        audioCurrentTime:0,
        audioLoaded: false,
        audioPlayerState: AudioPlayerState.stopped,
        audioTimetrackAutoUpdate : true,
        pressedKey : "",
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
    audioLoaded: Accessor<boolean>
    setAudioLoaded: Setter<boolean>
    audioPlayerState: Accessor<AudioPlayerState>
    setAudioPlayerState: Setter<AudioPlayerState>
    audioTimetrackAutoUpdate: Accessor<boolean>
    setAudioTimetrackAutoUpdate: Setter<boolean>
    pressedKey: Accessor<string>
    setPressedKey: Setter<string>
}


export function StoreProvider(props: ComponentProps<IStoreData>) {
    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageNumber, setPageNumber] = createSignal(props.pageNumber);
    const [pageData, setPageData] = createSignal(props.pageData);
    const [lineData, setLineData] = createSignal(props.lineData);
    const [audioStartTime, setAudioStartTime] = createSignal(props.audioStartTime);
    const [audioCurrentTime, setAudioCurrentTime] = createSignal(props.audioCurrentTime);
    const [audioLoaded, setAudioLoaded] = createSignal(props.audioLoaded);
    const [audioPlayerState, setAudioPlayerState] = createSignal(props.audioPlayerState);
    const [audioTimetrackAutoUpdate,setAudioTimetrackAutoUpdate] =createSignal(props.audioTimetrackAutoUpdate);
    const [pressedKey, setPressedKey] = createSignal(props.pressedKey);

    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber,
        pageNumber,
        setPageNumber,
        pageData,
        setPageData,
        lineData,
        setLineData,
        audioStartTime,
        setAudioStartTime,
        audioPlayerState,
        audioCurrentTime,
        setAudioCurrentTime,
        setAudioPlayerState,
        audioLoaded,
        setAudioLoaded,
        audioTimetrackAutoUpdate,
        setAudioTimetrackAutoUpdate,
        pressedKey,
        setPressedKey
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
