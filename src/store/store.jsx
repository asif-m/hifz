import { createSignal, createContext, useContext } from "solid-js";

const StoreContext = createContext();

export const STORE_INITIALVALUE = {
    verseNumber:0,
    chapterNumber:0
}

export function StoreProvider(props) {

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
