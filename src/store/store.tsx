import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageData } from "~/models/page";
import { IArabicWord } from "~/models/word";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number,
    chapterNumber: number,
    pageNumber: number;
    pageData: IPageData,
    lineData:Array<Array<IArabicWord>>
}

export function getInitialStoreData(): IStoreData {
    return {
        verseNumber: 0,
        chapterNumber: 0,
        pageNumber:0,
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
        lineData:[[]]
    }
}

export interface IStoreUseContextData {
    verseNumber: Accessor<number>,
    setVerseNumber: Setter<number>
    chapterNumber: Accessor<number>
    setChapterNumber: Setter<number>
    pageNumber: Accessor<number>
    setPageNumber: Setter<number>
    pageData: Accessor<IPageData >
    setPageData: Setter<IPageData>
    lineData: Accessor<Array<Array<IArabicWord>>>
    setLineData:Setter<Array<Array<IArabicWord>>>
}


export function StoreProvider(props: ComponentProps<IStoreData>) {
    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageNumber, setPageNumber] = createSignal(props.pageNumber);
    const [pageData, setPageData] = createSignal(props.pageData);
    const [lineData, setLineData] = createSignal(props.lineData);

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
        setLineData
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
