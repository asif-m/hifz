import { useStore } from "~/store/store";

export default function PlayingHeader() {
  const { derivedTitleData } = useStore();

  return (
    <div style={{ display: "flex", 
    "flex-direction": "row", 
    "align-items": "center",
     "justify-content": "space-between", 
     margin: "16px", 
     width:"100%"
     }}>
      <LabelValue label={"Page"} value={derivedTitleData().pageNumbers.join(', ')}></LabelValue>
      <LabelValue label={"Ruku"} value={derivedTitleData().rukus.join(', ')}></LabelValue>
      <LabelValue label={"Rub-El-Hizb"} value={derivedTitleData().rehizbs.join(', ')}></LabelValue>
      <LabelValue label={"Hizb"} value={derivedTitleData().hizbs.join(', ')}></LabelValue>
      <LabelValue label={"Manazil"} value={derivedTitleData().manazils.join(', ')}></LabelValue>
      <LabelValue label={"Juz"} value={derivedTitleData().juzs.join(', ')}></LabelValue>
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
