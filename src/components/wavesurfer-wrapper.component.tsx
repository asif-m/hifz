// @refresh reload
import { createEffect, createSignal } from "solid-js";

import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
import WaveSurfer from 'wavesurfer.js'

import { IReciterTimeStamp } from "~/models/ayah-info-interface";

export default function WavesurferWrapperComponent() {
  
  const timeStamps: IReciterTimeStamp = [{
    timestampFrom: 0,
    timestampTo: 50,
  },
  {
    timestampFrom: 51,
    timestampTo: 150,
  }
]

const random = (min, max) => Math.random() * (max - min) + min
const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`


  createEffect(()=>{
    const ws = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        url: '/audio/Sameer Nass/1-سورة الفاتحة.mp3',
      })
      // Initialize the Regions plugin

  },[])

  return (
    <div>
    <div id="waveform"></div>
  </div>
  );
}
