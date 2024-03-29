// @refresh reload
import { Show, batch, createEffect, createSignal } from "solid-js";
import { Button, CircularProgress } from "@suid/material";
import WaveSurfer from "wavesurfer.js";
import ZoomPlugin from "wavesurfer.js/dist/plugins/zoom.esm.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";

import { IAyahBase, IReciterTimeStamp } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store.jsx";
import { SURAHS_INFO } from "~/models/surah.js";
import { colors } from "~/models/style-constants.js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state.jsx";
import {
  regionPlugins,
  timelinePluginConfig,
  waveSurferConfig,
  zoomPluginConfig,
} from "./wave-surfer-config";
import { getSilenceRegions } from "~/utils/audio-helper";
import {
  parseFloatToFloatFixed,
  parseStringToFixed,
} from "~/utils/param-convertor";
import { downloadAudio } from "~/utils/download-helpers";

export type TRegionData = IReciterTimeStamp & IAyahBase;
export default function WavesurferWrapperComponent() {
  const {
    chapterNumber,
    audioStartTime,
    setAudioCurrentTime,
    setAudioCurrentTimeNonCapture,
    audioCurrentTime,
    audioPlayerState,
    audioLoaded,
    setAudioLoaded,
    setAudioPlayerState,
    audioTrackerState,
    pageSurahAudioTimeStamps,
    setPageSurahAudioTimeStamps,
    ayahInCurrentPageSurah,
    captureIndex,
    setSilentRegions,
    silentRegions,
  } = useStore();

  const [waveSurfer, setWaveSurfer] = createSignal<WaveSurfer | null>(null);
  const [wsRegions, setWsRegions] = createSignal<any>();
  const [timeStamps, setTimeStamps] = createSignal<Array<TRegionData>>([]);

  createEffect(() => {
    const ws = WaveSurfer.create(waveSurferConfig);

    // Initialize the Zoom plugin
    ws.registerPlugin(ZoomPlugin.create(zoomPluginConfig));

    //Initialize timeline plugin.
    ws.registerPlugin(TimelinePlugin.create(timelinePluginConfig));

    //Initialize Regions plugin
    const wsRegions = ws.registerPlugin(RegionsPlugin.create(regionPlugins));
    batch(() => {
      setWaveSurfer(ws);
      setWsRegions(wsRegions);
    });
  });

  createEffect(() => {
    const chapterIndex = chapterNumber() - 1;
    const ws = waveSurfer();
    if (!ws || chapterIndex === -1) {
      return;
    }
    setAudioLoaded(() => false);
    ws.load(
      `/audio/Sameer Nass/${SURAHS_INFO[chapterIndex].audioFile["Sameer Nass"]}`,
    );
  });

  createEffect(() => {
    //Note : Do not delete this local variable.
    //Here we have to toggle the player based on this signal
    const audioPlayer = audioPlayerState();
    const ws = waveSurfer();
    if (!ws) {
      return;
    }

    if (audioPlayer === AudioPlayerState.PLAY) {
      ws.play();
    } else if (audioPlayer === AudioPlayerState.PAUSE) {
      ws.pause();
    }
  });

  createEffect(() => {
    const ws = waveSurfer();
    if (!ws) {
      return;
    }

    /** When the audio has been decoded */
    ws.on("decode", (duration) => {
      //console.log('Decode', duration + 's')
      batch(() => {
        const decodedData = ws.getDecodedData();
        if (decodedData) {
          const regions = getSilenceRegions(
            decodedData.getChannelData(0),
            duration,
          );
          setSilentRegions(() => regions);
        }
        setAudioLoaded(() => true);
      });
    });

    /** When the audio is both decoded and can play */
    ws.on("ready", (duration) => {
      //console.log('Ready', duration + 's')
      ws.setTime(audioStartTime());
    });

    /** When the audio finishes playing */
    ws.on("finish", () => {
      batch(() => {
        // setChapterNumber((prev)=> prev ===114? 1: prev+1);
        // setVerseNumber(0);
        // setAudioLoaded(false);
        setAudioPlayerState(() => AudioPlayerState.PAUSE);
      });
      //console.log('Finish');
    });
    /** On audio position change, fires continuously during playback */
    ws.on("timeupdate", (currentTime) => {
      batch(() => {
        setAudioCurrentTimeNonCapture(() => currentTime);
        if (audioTrackerState() === AudioTrackerState.CAPTURE) {
          setAudioCurrentTime(() => parseFloatToFloatFixed(currentTime));
        }
        //console.log('Time', currentTime + 's')
      });
    });

    // ws.on('loading', (percent) => {
    //   //console.log('Loading', percent + '%')
    // })

    // /** When visible waveform is drawn */
    // ws.on('redraw', () => {
    //   //console.log('Redraw began')
    // })

    // /** When all audio channel chunks of the waveform have drawn */
    // ws.on('redrawcomplete', () => {
    //   //console.log('Redraw complete')
    // })

    // /** When the audio starts playing */
    // ws.on('play', () => {
    //   //console.log('Play')
    // })

    // /** When the audio pauses */
    // ws.on('pause', () => {
    //   //console.log('Pause')
    // })

    // /** When the user seeks to a new position */
    // ws.on('seeking', (currentTime) => {
    //   //console.log('Seeking', currentTime + 's')
    // })
  });

  createEffect(() => {
    const ws = waveSurfer();
    const currentTime = audioCurrentTime();
    const isCaptureMode = audioTrackerState() === AudioTrackerState.CAPTURE;
    if (!ws) {
      return;
    }
    if (isCaptureMode) {
      return;
    }
    ws.setTime(currentTime);
  });

  createEffect(() => {
    const ws = waveSurfer();
    const ts = pageSurahAudioTimeStamps();
    const ayahs = ayahInCurrentPageSurah();
    if (!ws) {
      return;
    }
    setTimeStamps(() =>
      ts.map((timeStamp: IReciterTimeStamp, i) => ({
        ...timeStamp,
        ...ayahs[i],
      })),
    );
  });

  createEffect(() => {
    const regions = wsRegions();
    const cIndex = captureIndex();
    const sRegions = silentRegions();
    const tStamps = timeStamps();
    regions.clearRegions();

    tStamps.forEach((timeStamp, index) => {
      regions.addRegion({
        id: index + 1,
        start: timeStamp.timestampFrom,
        end: timeStamp.timestampTo,
        content: `${timeStamp.verseNumber}`,
        color:
          index === cIndex
            ? colors.waveActiveAyahRegion:
            (index%2===0 ?colors.waveAyahRegionEven: colors.waveAyahRegionOdd),
        drag: false,
        resize: true,
      });
    });
  });

  createEffect(() => {
    const wsr = wsRegions();
    if (!wsr) {
      return;
    }
    wsr.on("region-updated", (region: any) => {
      const { id, start, end } = region;
      const timestampFrom = parseStringToFixed(start);
      const timestampTo = parseStringToFixed(end);
      const index = id - 1;
      setPageSurahAudioTimeStamps((prev) =>
        prev.map((a, i) => {
          if (index === i) {
            return { ...a, timestampFrom, timestampTo };
          }
          return a;
        }),
      );
    });
  });

  function downloadAudioTS(){
    const ws = waveSurfer();
    downloadAudio(ws, 5, 10, "a.mp3")
  }

  return (
    <div style={{ width: "100%", height:"20px" }}>
      <Show when={!audioLoaded()}>
        <div style={{ display: "flex", "justify-content": "center" }}>
          <CircularProgress color="success" />
        </div>
      </Show>
      <div
        id="waveform"
        style={{ "scrollbar-color": `${colors.scrollbarColor}` }}
      ></div>
      <Button onClick={()=>downloadAudioTS()}>D</Button>
    </div>
  );
}
