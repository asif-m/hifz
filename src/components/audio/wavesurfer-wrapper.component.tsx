// @refresh reload
import { Show, batch, createEffect, createSignal } from "solid-js";
import { CircularProgress } from "@suid/material";
import WaveSurfer from "wavesurfer.js";
import ZoomPlugin from "wavesurfer.js/dist/plugins/zoom.esm.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";

import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store.jsx";
import { SURAHS_INFO } from "~/models/surah.js";
import { colors } from "~/models/style-constants.js";
import { AudioPlayerState, AudioTrackerState } from "~/models/audio-state.jsx";
import { timelinePluginConfig, waveSurferConfig, zoomPluginConfig } from "./wave-surfer-config";

export default function WavesurferWrapperComponent() {
  const { chapterNumber,
    audioStartTime,
    setAudioCurrentTime,
    setAudioCurrentTimeNonCapture,
    audioCurrentTime,
    audioPlayerState,
    audioLoaded,
    setAudioLoaded,
    setAudioPlayerState,
    audioTrackerState,
  } = useStore();

  const [waveSurfer, setWaveSurfer] = createSignal<WaveSurfer | null>(null);
  const [wsRegions, setWsRegions] = createSignal<any>();
  const timeStamps: Array<IReciterTimeStamp> = [
    // {
    //   timestampFrom: 0,
    //   timestampTo: 2,
    // },
  ];

  createEffect(() => {
    const ws = WaveSurfer.create(waveSurferConfig);

    // Initialize the Zoom plugin
    ws.registerPlugin(ZoomPlugin.create(zoomPluginConfig));

    //Initialize timeline plugin.
    ws.registerPlugin(TimelinePlugin.create(timelinePluginConfig))

    //Initialize Regions plugin
    const wsRegions = ws.registerPlugin(RegionsPlugin.create());

    setWaveSurfer(ws);
    setWsRegions(wsRegions);
  });

  createEffect(() => {
    const chapterIndex = chapterNumber() - 1;
    const ws = waveSurfer();
    if (!ws || chapterIndex === -1) {
      return;
    }
    setAudioLoaded(() => false)
    ws.load(`/audio/Sameer Nass/${SURAHS_INFO[chapterIndex].audioFile["Sameer Nass"]}`)
  });

  createEffect(() => {
    const ws = waveSurfer();
    const regions = wsRegions();

    if (!ws || !regions) {
      return;
    }

    ws.on("decode", () => {
      // Regions
      regions.clearRegions();
      timeStamps.forEach((timeStamp, index) => {
        regions.addRegion({
          start: timeStamp.timestampFrom,
          end: timeStamp.timestampTo,
          content: `${index + 1}`,
          color: index === 2 ? colors.waveActiveAyahRegion : colors.waveAyahRegion,
          drag: false,
          resize: true,
        });
      });
    });
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
    ws.on('decode', (duration) => {
      //console.log('Decode', duration + 's')
      setAudioLoaded(() => true);
    })

    /** When the audio is both decoded and can play */
    ws.on('ready', (duration) => {
      //console.log('Ready', duration + 's')
      ws.setTime(audioStartTime());
    })

    /** When the audio finishes playing */
    ws.on('finish', () => {
      batch(() => {
        // setChapterNumber((prev)=> prev ===114? 1: prev+1);
        // setVerseNumber(0);
        // setAudioLoaded(false);
        setAudioPlayerState(() => AudioPlayerState.PAUSE);
      })
      //console.log('Finish');
    })
    /** On audio position change, fires continuously during playback */
    ws.on('timeupdate', (currentTime) => {
      setAudioCurrentTimeNonCapture(() => currentTime);
      if (audioTrackerState() === AudioTrackerState.CAPTURE) {
        setAudioCurrentTime(() => parseFloat(currentTime.toFixed(1)))
      }
      //console.log('Time', currentTime + 's')
    })

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

  })

  createEffect(() => {
    const ws = waveSurfer();
    const currentTime = audioCurrentTime();
    const autoUpdate = audioTrackerState() === AudioTrackerState.CAPTURE
    if (!ws) {
      return;
    }
    if (autoUpdate) {
      return;
    }
    ws.setTime(currentTime);
  })

  return (
    <div style={{ width: "100%" }}>
      <Show when={!audioLoaded()}>
        <div style={{ display: "flex", "justify-content": "center" }}>
          <CircularProgress color="success" />
        </div>
      </Show>
      <div id="waveform" style={{ "scrollbar-color": `${colors.scrollbarColor}` }}></div>
    </div>
  );
}
