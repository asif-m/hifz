import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageDate, getPageNumberForAyah } from "~/models/page";
import { IArabicWord } from "~/models/ayah-info-interface";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number,
    chapterNumber: number,
    pageData: IPageDate | null,
}

export function getInitialStoreData(): IStoreData {
    return {
        verseNumber: 0,
        chapterNumber: 0,
        pageData: null,
    }
}

export interface IStoreUseContextData {
    verseNumber: Accessor<number>,
    setVerseNumber: Setter<number>
    chapterNumber: Accessor<number>
    setChapterNumber: Setter<number>
    derivedPageNumber: Accessor<number>
    pageData: Accessor< IPageDate | null>
    setPageData: Setter<IPageDate | null>
    derivedLineData:Accessor<Array<Array<IArabicWord>>>
}


export function StoreProvider(props: ComponentProps<IStoreData>) {

    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageData, setPageData] = createSignal(props.pageData);

    const derivedPageNumber = () => {
        const chapter = chapterNumber();
        const verse = verseNumber();
        return getPageNumberForAyah(chapter, verse);
    }

    const derivedLineData = ()=>{
        const pData = pageData();
        const lineData:{[key in string]:Array<{}>} = {};
        pData?.data.forEach((ayahData)=>{
            ayahData.words.forEach((word)=>{
                const lineNumber = word.lineNumber;
                if(!lineData[lineNumber]){
                    lineData[lineNumber] = [];
                }
                lineData[lineNumber].push(word)
            })
        })
        const res = Object.keys(lineData).map((lineNumber)=> lineData[lineNumber]);
        console.log(res);
        return res;
    }

    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber,
        derivedPageNumber,
        pageData,
        setPageData,
        derivedLineData
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
