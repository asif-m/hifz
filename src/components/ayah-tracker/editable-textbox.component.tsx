import { Accessor, batch, createEffect, createSignal } from "solid-js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state";
import { IAyahBase } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store";
import { parseStringToFixed } from "~/utils/param-convertor";

export default function EditableTextboxControlsComponent(props: {
  index: Accessor<number>;
  type: "from" | "to";
}) {
  const { type, index } = props;
  const {
    setVerseNumber,
    setChapterNumber,
    pageSurahAudioTimeStamps,
    setPageSurahAudioTimeStamps,
    ayahInCurrentPageSurah,
    captureIndex,
    setCaptureIndex,
    setAudioPlayerState,
    setAudioCurrentTime,
    setAudioTrackerState,
    audioTrackerState,
    pressedKey,
    audioLoaded,
  } = useStore();
  const { timestampFrom, timestampTo } = pageSurahAudioTimeStamps()[index()];
  const isFrom = type === "from";
  const value = isFrom ? timestampFrom : timestampTo;
  const onChange = isFrom ? onFromChange : onToChange;
  const [localValue, setLocalValue] = createSignal<string | number>(value);
  const { chapterNumber, verseNumber } = (ayahInCurrentPageSurah()[index()] ||
    {}) as IAyahBase;

  const [focusCounter, setFocusCounter] = createSignal(0);
  const [focusIndex, setFocusIndex] = createSignal(-1);
  let inputRef: HTMLInputElement | undefined = undefined;

  createEffect(() => {
    const key = pressedKey();
    const i = index();
    const cIndex = captureIndex();
    const length = pageSurahAudioTimeStamps().length;
    const loaded = audioLoaded();

    const reminder = Math.min(cIndex, length) % length;
    const isCurrentEditbox = i === reminder;

    if (!loaded) {
      return;
    }

    if (!inputRef) {
      return;
    }

    if (!isFrom) {
      return;
    }

    if (key === "KeyA") {
      blurIfCurrentAndFocusOnIntended(isCurrentEditbox, 0);
      return;
    }

    if (key === "KeyZ") {
      const nextIndex = (reminder - 1 + length) % length;
      blurIfCurrentAndFocusOnIntended(isCurrentEditbox, nextIndex);
      return;
    }

    if (key === "KeyX") {
      const nextIndex = (reminder + 1) % length;
      blurIfCurrentAndFocusOnIntended(isCurrentEditbox, nextIndex);
      return;
    }
  });
  createEffect(() => {
    const atState = audioTrackerState();
    const fCounter = focusCounter();
    const i = index();
    if (fCounter === 0) {
      return;
    }

    if (atState === AudioTrackerState.CAPTURE) {
      batch(() => {
        setAudioTrackerState(() => AudioTrackerState.REVIEW);
        setAudioPlayerState(() => AudioPlayerState.PAUSE);
        setAudioCurrentTime(() => value);
        setCaptureIndex(() => i);
      });
    }

    if (atState === AudioTrackerState.REVIEW) {
      batch(() => {
        setAudioCurrentTime(() => timestampFrom);
        setCaptureIndex(() => i);
        setChapterNumber(() => chapterNumber);
        setVerseNumber(() => verseNumber);
        setAudioPlayerState(() => AudioPlayerState.PLAY);
      });
    }
  });

  createEffect(() => {
    const i = index();
    const loaded = audioLoaded();
    const fIndex = focusIndex();

    if (!loaded) {
      return;
    }

    if (!inputRef) {
      return;
    }

    if (!isFrom) {
      return;
    }

    if (fIndex !== i) {
      return;
    }
    setTimeout(() => {
      inputRef?.focus();
    }, 350);
  });

  function blurIfCurrentAndFocusOnIntended(
    isCurrentEditbox: boolean,
    nextIndex: number,
  ) {
    setAudioTrackerState(() => AudioTrackerState.REVIEW);
    if (isCurrentEditbox) {
      inputRef?.blur();
    }
    setFocusIndex((prev) => (prev === -1 ? 0 : nextIndex));
  }
  function onFromChange(v: number) {
    const aIndex = index();
    setPageSurahAudioTimeStamps((prev) =>
      prev.map((t, i, array) => {
        if (i === aIndex) {
          return { ...t, timestampFrom: v };
        }
        if (aIndex !== 0 && i === aIndex - 1) {
          return { ...t, timestampTo: v };
        }
        return t;
      }),
    );
  }

  function onToChange(v: number) {
    const aIndex = index();
    setPageSurahAudioTimeStamps((prev) =>
      prev.map((t, i) => (i === aIndex ? { ...t, timestampTo: v } : t)),
    );
  }

  function isValidNumber(value: any): boolean {
    // Check if the value is of type number and not NaN
    return typeof value === "number" && !isNaN(value);
  }

  function onValueChange(v: string) {
    batch(() => {
      setLocalValue(() => v);
      if (v === "") {
        return;
      }
      try {
        const time = parseStringToFixed(v);
        if (!isValidNumber(time)) {
          return;
        }
        onChange(time);
        setAudioCurrentTime(() => time);
      } catch (e) {}
    });
  }

  return (
    <input
      type="number"
      ref={inputRef}
      name="price"
      pattern="[0-9]+([\.,][0-9]+)?"
      step="0.1"
      value={localValue()}
      style={{ width: "65px" }}
      readOnly={audioTrackerState() === AudioTrackerState.CAPTURE}
      onFocus={() => {
        setFocusCounter((prev) => prev + 1);
      }}
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
    />
  );
}
