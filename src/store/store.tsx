import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageDate, PAGE_INFO } from "~/models/page";

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
}


export function StoreProvider(props: ComponentProps<IStoreData>) {

    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageData, setPageData] = createSignal(props.pageData);

    const derivedPageNumber = () => {
        const chapter = chapterNumber();
        const verse = verseNumber();
        if(chapter ===0 || verse === 0){
            return 0;
        }
        for (let i = 0; i < PAGE_INFO.length; i++) {
            if (chapter > PAGE_INFO[i].chapterNumber) {
                continue;
            }
            if (verse > PAGE_INFO[i].verseNumber) {
                continue;
            }
            return i + 1;
        }
        return 0;
    }


    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber,
        derivedPageNumber,
        pageData,
        setPageData
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
