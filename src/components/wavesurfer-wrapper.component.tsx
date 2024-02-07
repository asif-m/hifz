// @refresh reload
import { createEffect } from "solid-js";
import WaveSurfer from "wavesurfer.js";
import ZoomPlugin from "../../node_modules/wavesurfer.js/dist/plugins/zoom.esm.js";
import RegionsPlugin from "../../node_modules/wavesurfer.js/dist/plugins/regions.esm.js";

import { IReciterTimeStamp } from "~/models/ayah-info-interface";
import { useStore } from "~/store/store.jsx";
import { SURAHS_INFO } from "~/models/surah.js";

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
  ];

  // Give regions a random color when they are created
  const random = (min, max) => Math.random() * (max - min) + min;
  const randomColor = () =>
    `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`;

  createEffect(() => {
    console.log(`/audio/Sameer Nass/${SURAHS_INFO[chapterNumber()-1].audioFile["Sameer Nass"]}`)
    const ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: "rgb(0, 200, 200)",
      progressColor: "rgb(0, 100, 100)",
      //url: `/audio/Sameer Nass/1-سورة الفاتحة.mp3`,
      url: `/audio/Sameer Nass/${SURAHS_INFO[chapterNumber()-1].audioFile["Sameer Nass"]}`,
      //minPxPerSec: 100,
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
          color: randomColor(),
          drag: false,
          resize: true,
        });
      });
    });
    ws.on('interaction', () => {
      ws.play()
    })
  }, [chapterNumber()]);

  return (
    <div style={{width:"100%"}} id="waveform">
      
    </div>
  );
}
