import { createSignal, createContext, useContext } from "solid-js";
import type { ComponentProps } from "~/utils/component-type";

const StoreContext = createContext();

export interface IStoreData {
    verseNumber: number,
    chapterNumber: number
}

export const STORE_INITIAL_VALUE: IStoreData = {
    verseNumber: 0,
    chapterNumber: 0
}

export function StoreProvider(props: ComponentProps<IStoreData>) {

    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber);

    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    return useContext(StoreContext);
}
