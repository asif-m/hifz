import WavesurferWrapperComponent from "../audio/wavesurfer-wrapper.component";
import AudioPlayerControlsComponent from "../audio/audio-player-controls";
import HeaderPageData from "./header-page-data";

export default function PlayingHeaderContainer() {
  return (
    <div style={{ width: "100%", margin: "16px" }}>
      <div style={{display:"flex"}}>
        <AudioPlayerControlsComponent />
        <HeaderPageData />
      </div>
      <div style={{ margin: "16px" }}>
        <WavesurferWrapperComponent />
      </div>
    </div>
  );
}


