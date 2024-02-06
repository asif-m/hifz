import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";
import type { Accessor, Setter } from 'solid-js';
import { IPageDate, CPage } from "~/models/page";
import { IAyah } from "~/models/ayah-info-interface";
import { IArabicWord } from "~/models/word";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number,
    chapterNumber: number,
    pageData: { [key in string]: IPageDate }
}

export interface ITitleData{
    manazils: Array<number>,
    juzs:Array<number>,
    hizbs:Array<number>,
    rehizbs:Array<number>,
    rukus:Array<number>, 
    pageNumbers:Array<number>, 
    chapters:Array<{chapterNumber: number, verseNumberFrom:number, verseNumberTo:number}>
}

export function getInitialStoreData(): IStoreData {
    return {
        verseNumber: 0,
        chapterNumber: 0,
        pageData: {},
    }
}

export interface IStoreUseContextData {
    verseNumber: Accessor<number>,
    setVerseNumber: Setter<number>
    chapterNumber: Accessor<number>
    setChapterNumber: Setter<number>
    derivedPageNumber: Accessor<number>
    pageData: Accessor<{ [key in string]: IPageDate }>
    setPageData: Setter<{ [key in string]: IPageDate }>
    derivedLineData: Accessor<Array<Array<IArabicWord>>>
    derivedTitleData: Accessor<ITitleData>
}


export function StoreProvider(props: ComponentProps<IStoreData>) {

    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);
    const [pageData, setPageData] = createSignal(props.pageData);

    const derivedPageNumber = () => {
        const chapter = chapterNumber();
        const verse = verseNumber();
        return CPage.getPageNumberForAyah(chapter, verse);
    }

    const derivedLineData = () => {
        const pData = pageData();
        const page = derivedPageNumber();
        const lineData: { [key in string]: Array<{}> } = {};
        pData[page]?.data.forEach((ayahData) => {
            ayahData.words.forEach((word) => {
                const lineNumber = word.lineNumber;
                if (!lineData[lineNumber]) {
                    lineData[lineNumber] = [];
                }
                lineData[lineNumber].push(word)
            })
        })
        const res = Object.keys(lineData).map((lineNumber) => lineData[lineNumber]);
        return res;
    }

    const derivedTitleData = ()=>{
        const pData = pageData();
        const page = derivedPageNumber();
        const titleData: ITitleData = {
            manazils: [],juzs:[],hizbs:[],rehizbs:[],rukus:[], pageNumbers:[], chapters:[]
        }
        function AddIfNotExisting(ayahData:IAyah ,val: number, array:Array<number>){
            if(array.some(v=> v===val)){
                return;
            }
            array.push(val)
        }
        pData[page]?.data.forEach((ayahData) => {

            AddIfNotExisting(ayahData, ayahData.manzilNumber, titleData.manazils);
            AddIfNotExisting(ayahData, ayahData.juzNumber, titleData.juzs);
            AddIfNotExisting(ayahData, ayahData.hizbNumber, titleData.hizbs);
            AddIfNotExisting(ayahData, ayahData.rubElHizbNumber, titleData.rehizbs);
            AddIfNotExisting(ayahData, ayahData.rukuNumber, titleData.rukus)
            AddIfNotExisting(ayahData, ayahData.pageNumber, titleData.pageNumbers)

        })
        return titleData;

    }

    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber,
        derivedPageNumber,
        pageData,
        setPageData,
        derivedLineData,
        derivedTitleData
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
