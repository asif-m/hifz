import { colors } from "~/models/style-constants";

export default function BismiComponent() {

    return (
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
        }}>
            <div style={{
                color: colors.bismiText,
                "font-family": "UthmanicHafs",
                "font-size": "4.4vh",
            }}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </div>
        </div>
    )
}