// @refresh reload
import { createEffect, createSignal } from "solid-js";
import WaveSurfer from "wavesurfer.js";
import ZoomPlugin from "../../node_modules/wavesurfer.js/dist/plugins/zoom.esm.js";
import RegionsPlugin from "../../node_modules/wavesurfer.js/dist/plugins/regions.esm.js";
import TimelinePlugin from "../../node_modules/wavesurfer.js/dist/plugins/timeline.esm.js";

import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store.jsx";
import { SURAHS_INFO } from "~/models/surah.js";
import { colors } from "~/models/style-constants.js";

export default function WavesurferWrapperComponent() {
  const { chapterNumber,audioStartTime ,audioPlayerState } = useStore();

  const [waveSurfer, setWaveSurfer] = createSignal<WaveSurfer | null>(null);
  const [wsRegions, setWsRegions] = createSignal<any>();
  const timeStamps: Array<IReciterTimeStamp> = [
    // {
    //   timestampFrom: 0,
    //   timestampTo: 2,
    // },
    // {
    //   timestampFrom: 3,
    //   timestampTo: 4,
    // },
    // {
    //   timestampFrom: 5,
    //   timestampTo: 10,
    // },
    // {
    //   timestampFrom: 11,
    //   timestampTo: 20,
    // },
  ];

  createEffect(() => {
    const ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: colors.wave,
      progressColor: colors.waveProgress,
      url: `/audio/Sameer Nass/${SURAHS_INFO[0].audioFile["Sameer Nass"]}`,
      minPxPerSec: 100,
      renderFunction: (channels, ctx) => {
        const { width, height } = ctx.canvas
        const scale = channels[0].length / width
        const step = 10

        ctx.translate(0, height / 2)
        ctx.strokeStyle = ctx.fillStyle
        ctx.beginPath()

        for (let i = 0; i < width; i += step * 2) {
          const index = Math.floor(i * scale)
          const value = Math.abs(channels[0][index])
          let x = i
          let y = value * height

          ctx.moveTo(x, 0)
          ctx.lineTo(x, y)
          ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true)
          ctx.lineTo(x + step, 0)

          x = x + step
          y = -y
          ctx.moveTo(x, 0)
          ctx.lineTo(x, y)
          ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false)
          ctx.lineTo(x + step, 0)
        }

        ctx.stroke()
        ctx.closePath()
      },
    });
    // Initialize the Zoom plugin
    ws.registerPlugin(
      ZoomPlugin.create({
        // the amount of zoom per wheel step, e.g. 0.5 means a 50% magnification per scroll
        scale: 0.5,
        // Optionally, specify the maximum pixels-per-second factor while zooming
        maxZoom: 100,
      })
    );

    //Initialize timeline plugin.
    ws.registerPlugin(TimelinePlugin.create({
      height: 20,
      timeInterval: 1,
      primaryLabelInterval: 1,
      style: {
        fontSize: '10px',
        color: 'white',
      },
    }))

    //Initialize Regions plugin
    const wsRegions = ws.registerPlugin(RegionsPlugin.create());

    setWaveSurfer(ws);
    setWsRegions(wsRegions);
    
  });

  createEffect(() => {
    const chapterIndex = chapterNumber() - 1;
    const ws = waveSurfer();
    if (!ws || chapterIndex===-1) {
      return;
    }
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
    const audioPlayer = audioPlayerState();
    const ws = waveSurfer();
    if(!ws){
      return;
    }
    ws.playPause();
  });

  

  createEffect(()=>{
    const ws = waveSurfer();
    if(!ws){
      return;
    }
    ws.on('loading', (percent) => {
      console.log('Loading', percent + '%')
    })
    
    /** When the audio has been decoded */
    ws.on('decode', (duration) => {
      console.log('Decode', duration + 's')
    })
    
    /** When the audio is both decoded and can play */
    ws.on('ready', (duration) => {
      const startTime = audioStartTime();
      console.log({startTime});
      ws.setTime(startTime);
      console.log('Ready', duration + 's')
    })
    
    /** When visible waveform is drawn */
    ws.on('redrawcomplete', () => {
      console.log('Redraw began')
    })
    
    /** When all audio channel chunks of the waveform have drawn */
    ws.on('redrawcomplete', () => {
      console.log('Redraw complete')
    })
    
    /** When the audio starts playing */
    ws.on('play', () => {
      console.log('Play')
    })
    
    /** When the audio pauses */
    ws.on('pause', () => {
      console.log('Pause')
    })
    
    /** When the audio finishes playing */
    ws.on('finish', () => {
      console.log('Finish')
    })
    
    /** On audio position change, fires continuously during playback */
    ws.on('timeupdate', (currentTime) => {
      //console.log('Time', currentTime + 's')
    })
    
    /** When the user seeks to a new position */
    ws.on('seeking', (currentTime) => {
      console.log('Seeking', currentTime + 's')
    })
    
  })



  return (
    <div style={{ width: "100%" }}>
      <div id="waveform"></div>
    </div>
  );
}
