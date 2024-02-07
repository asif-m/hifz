import { useStore } from "~/store/store";
import WavesurferWrapperComponent from "./wavesurfer-wrapper.component";

export default function PlayingHeader() {
  const { pageData } = useStore();
  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "space-between",
        margin: "16px"
      }}>
        <div style={{"min-width":"150px", width:"5%"}}>
          <div>Page        : {pageData().pageNumber}</div>
          <div>Ruku        : {pageData().rukus.join(', ')}</div>
          <div>Rub-El-Hizb : {pageData().rubElHizbs.join(', ')}</div>
          <div>Hizb        : {pageData().hizbs.join(', ')}</div>
          <div>Manzil      : {pageData().manzils.join(', ')}</div>
          <div>Juz         : {pageData().juzs.join(', ')}</div>
        </div>
        <div style={{width:"95%"}}>
          <WavesurferWrapperComponent />
        </div>
      </div>
    </div>
  );
}


