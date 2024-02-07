import { useStore } from "~/store/store";
import WavesurferWrapperComponent from "./wavesurfer-wrapper.component";

export default function PlayingHeader() {
  const {pageData} = useStore();
  console.log(pageData())
  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "space-between",
        margin: "16px",
        width: "100%"
      }}>
        <LabelValue label={"Page"} value={pageData().pageNumber}></LabelValue>
        <LabelValue label={"Ruku"} value={pageData().rukus.join(', ')}></LabelValue>
        <LabelValue label={"Rub-El-Hizb"} value={pageData().rubElHizbs.join(', ')}></LabelValue>
        <LabelValue label={"Hizb"} value={pageData().hizbs.join(', ')}></LabelValue>
        <LabelValue label={"Manazil"} value={pageData().manzils.join(', ')}></LabelValue>
        <LabelValue label={"Juz"} value={pageData().juzs.join(', ')}></LabelValue>
      </div>
      <WavesurferWrapperComponent />
    </div>
  );
}

function LabelValue(props: { label: string; value: string | number }) {
  const { label, value } = props;
  return (<div style={{ border: "1px solid rgb(0,200,0)", "text-align": "center" }}>
    <div style={{ padding: "4px" }}>{value}</div>
    <div style={{ padding: "4px", "font-size": "small", background: "rgb(0,200,0)", color: "black" }}>{label}</div>
  </div>)
}
