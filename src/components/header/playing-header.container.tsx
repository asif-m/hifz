import AudioPlayerControlsComponent from "../audio/audio-player-controls";
import HeaderPageData from "./header-page-data";
import { Show } from "solid-js";
import AyahTrackerComponent from "../ayah-tracker/ayah-tracker";
import { useStore } from "~/store/store";
import WavesurferWrapperComponent from "../audio/wavesurfer-wrapper.component";
import { headerHeight } from "~/models/style-constants";

export default function PlayingHeaderContainer() {
  const { audioLoaded } = useStore();
  return (
    <div style={{ width: "100%", margin: "16px", display:"flex", "flex-direction":"row" }}>
      
      <div style={{ width: "80%"}}>
        <div style={{ display: "flex" }}>
          <AudioPlayerControlsComponent />
          <HeaderPageData />
        </div>
        <div style={{ margin: "16px" }}>
          <WavesurferWrapperComponent />
        </div>
      </div>
      <div style={{ width: "20%", "max-height":`${headerHeight}px`, overflow:"scroll"}}>
        <Show when={audioLoaded()}>
          <AyahTrackerComponent />
        </Show>
      </div>
    </div>
  );
}


