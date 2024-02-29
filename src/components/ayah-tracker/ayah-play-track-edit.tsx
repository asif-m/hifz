import { useStore } from "~/store/store";
import EditableTextboxControlsComponent from "./editable-textbox.component";
import { Accessor, createEffect } from "solid-js";
import { colors } from "~/models/style-constants";

export default function AyahPlayTrackEditComponent(props: {
  index: Accessor<number>;
}) {
  const { index } = props;
  const { captureIndex, ayahInCurrentPageSurah } = useStore();
  const ayahs = ayahInCurrentPageSurah();
  const chapter = ayahs[index()]?.chapterNumber || 0;
  const verse =
    ayahs[index()]?.verseNumber === 0 ? "B" : ayahs[index()]?.verseNumber || 0;
  let divRef: HTMLDivElement;

  createEffect(() => {
    const cIndex = captureIndex();
    const i = index();
    if (cIndex === i && divRef) {
      divRef.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  });

  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        gap: "3px",
        border:
          captureIndex() === index()
            ? `solid ${colors.ayahsTrackBorderColor} 2px`
            : "",
        "border-radius": "2px",
        //margin: "8px",
        "font-size": "10px",
        "min-width": "160px",
      }}
      ref={divRef!}
    >
      <div style={{ padding: "4px 8px" }}>{`${chapter} : ${verse} `}</div>
      <EditableTextboxControlsComponent index={index} type={"to"} />
      <div style={{ padding: "4px 8px" }}>{"<-"}</div>
      <EditableTextboxControlsComponent index={index} type={"from"} />
    </div>
  );
}
