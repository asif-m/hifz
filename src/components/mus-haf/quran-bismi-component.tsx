import { colors } from "~/models/style-constants";

export default function QuranBismiComponent() {
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      }}
    >
      <div
        style={{
          color: colors.bismiText,
          "font-family": "UthmanicHafs",
          "font-size": "4.4vh",
          direction: "rtl",
        }}
      >
        بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
      </div>
    </div>
  );
}
