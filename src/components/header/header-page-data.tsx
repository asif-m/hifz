import { For } from "solid-js";
import { Chip } from "@suid/material";
import { IChapterAndAyahRange } from "~/models/page";
import { useStore } from "~/store/store";

const StylizedChip = (props: { label: number | string }) => {
    const { label } = props;
    return <Chip style={{ margin: "2px", "font-size": "10px", height: "20px" }} label={label} />
}
export default function HeaderPageData() {
    const { pageData } = useStore();

    function getSurahAyah(chapterAndAyahs: Array<IChapterAndAyahRange>) {
        return chapterAndAyahs.map((c) => `${c.chapterNumber} : ${c.verseFrom}-${c.verseTo}`)
    }

    return (<div
        style={{
            width: "100%",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-evenly",
            "font-size": "8px"
        }}>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Page</div>
            <div>
                <Chip style={{ margin: "2px", "font-size": "10px", height: "20px" }} label={pageData().pageNumber} />
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Juz</div>
            <div>
                <For each={pageData().juzs}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Ruku</div>
            <div>
                <For each={pageData().rukus}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Rub-El-Hizb</div>
            <div>
                <For each={pageData().rubElHizbs}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Hizb</div>
            <div>
                <For each={pageData().hizbs}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Manzil</div>
            <div>
                <For each={pageData().manzils}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>

        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Ayahs</div>
            <div>
                <For each={getSurahAyah(pageData().chapterAndAyahRange)}>{label => <StylizedChip label={label} />}</For>
            </div>
        </div>
    </div>)
}