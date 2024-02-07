// @refresh reload
import { createEffect } from "solid-js";
import WaveSurfer from "wavesurfer.js";
import ZoomPlugin from "../../node_modules/wavesurfer.js/dist/plugins/zoom.esm.js";
import RegionsPlugin from "../../node_modules/wavesurfer.js/dist/plugins/regions.esm.js";
import TimelinePlugin from '../../node_modules/wavesurfer.js/dist/plugins/timeline.esm.js';

import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store.jsx";
import { SURAHS_INFO } from "~/models/surah.js";
import { colors } from "~/models/style-constants.js";

export default function WavesurferWrapperComponent() {
  const {chapterNumber} = useStore()
  const timeStamps: Array<IReciterTimeStamp> = [
    {
      timestampFrom: 0,
      timestampTo: 2,
    },
    {
      timestampFrom: 3,
      timestampTo: 4,
    },
    {
      timestampFrom: 5,
      timestampTo: 10,
    },
    {
      timestampFrom: 11,
      timestampTo: 20,
    },
  ];

  
  createEffect(() => {
    const bottomTimline = TimelinePlugin.create({
      height: 20,
      timeInterval: 1,
      primaryLabelInterval: 1,
      style: {
        fontSize: '10px',
        color: 'white',
      },
    })

    const ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: colors.wave,
      progressColor: colors.waveProgress,
      //url: `/audio/Sameer Nass/1-سورة الفاتحة.mp3`,
      url: `/audio/Sameer Nass/${SURAHS_INFO[chapterNumber()-1].audioFile["Sameer Nass"]}`,
      minPxPerSec: 100,
      plugins:[bottomTimline],
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
    const wsRegions = ws.registerPlugin(RegionsPlugin.create());
    ws.on("decode", () => {
      // Regions
      timeStamps.forEach((timeStamp, index) => {
        wsRegions.addRegion({
          start: timeStamp.timestampFrom,
          end: timeStamp.timestampTo,
          content: `${index + 1}`,
          color: index===2? colors.waveActiveAyahRegion: colors.waveAyahRegion,
          drag: false,
          resize: true,
        });
      });
    });
    ws.on('interaction', () => {
      ws.play()
    })
    ws.on('ready', () => {
      ws.setTime(120)
    })
  }, [chapterNumber()]);

  return (
    <div style={{width:"100%"}} id="waveform">
      
    </div>
  );
}
