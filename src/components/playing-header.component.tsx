import { IPageData } from "~/models/page";
import WavesurferWrapperComponent from "./wavesurfer-wrapper.component";

export default function PlayingHeader(props: { pageInfo: IPageData }) {
  const { pageInfo} = props;
  if(!pageInfo){
    return null;
  }
  const { pageNumber, rukus, rubElHizbs, hizbs, manzils, juzs }  = pageInfo;
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
        <LabelValue label={"Page"} value={pageNumber}></LabelValue>
        <LabelValue label={"Ruku"} value={rukus.join(', ')}></LabelValue>
        <LabelValue label={"Rub-El-Hizb"} value={rubElHizbs.join(', ')}></LabelValue>
        <LabelValue label={"Hizb"} value={hizbs.join(', ')}></LabelValue>
        <LabelValue label={"Manazil"} value={manzils.join(', ')}></LabelValue>
        <LabelValue label={"Juz"} value={juzs.join(', ')}></LabelValue>
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
