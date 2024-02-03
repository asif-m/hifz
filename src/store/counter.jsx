import { createSignal, createContext, useContext } from "solid-js";

const CounterContext = createContext();
export function CounterProvider(props) {

    const [verseNumber, setVerseNumber] = createSignal(props.verseNumber || 0);
    const [chapterNumber, setChapterNumber] = createSignal(props.chapterNumber || 0);

    const value = {
        verseNumber,
        setVerseNumber,
        chapterNumber,
        setChapterNumber
    };

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    return useContext(CounterContext);
}
