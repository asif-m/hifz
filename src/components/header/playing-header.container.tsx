import HeaderPageData from "./header-page-data";
import { Show } from "solid-js";
import AyahTrackerComponent from "../ayah-tracker/ayah-tracker";
import { useStore } from "~/store/store";
import WavesurferWrapperComponent from "../audio/wavesurfer-wrapper.component";
import {
  ayahTrackerWidth,
  colors,
  headerHeight,
} from "~/models/style-constants";

export default function PlayingHeaderContainer() {
  const { audioLoaded } = useStore();
  return (
    <div
      style={{
        width: "100%",
        margin: "4px",
        display: "flex",
        "flex-direction": "row",
        "max-height": `${headerHeight}px`,
        height: `${headerHeight}px`,
      }}
    >
      <div
        style={{
          width: `${ayahTrackerWidth}px`,
          "min-width": `${ayahTrackerWidth}px`,

          "overflow-y": "scroll",
          "scrollbar-color": `${colors.scrollbarColor}`,
        }}
      >
        <Show when={audioLoaded()}>
          <AyahTrackerComponent />
        </Show>
      </div>
      <div style={{ width: `calc(100% - ${ayahTrackerWidth}px)` }}>
        <div style={{ display: "flex" }}>
          <HeaderPageData />
        </div>
        <div style={{ margin: "16px" }}>
          <WavesurferWrapperComponent />
        </div>
      </div>
    </div>
  );
}
