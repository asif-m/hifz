import { For } from "solid-js";
import { Chip } from "@suid/material";
import { IChapterAndAyahRange } from "~/models/page";
import { useStore } from "~/store/store";

export default function HeaderPageData() {
    const { pageData } = useStore();

    function getSurahAyah(chapterAndAyahs: Array<IChapterAndAyahRange>) {
        return chapterAndAyahs.map((c) => `${c.chapterNumber}:${c.verseFrom}-${c.verseTo}`)
    }

    return (<div
        style={{
            width: "100%",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-evenly"
        }}>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Page</div>
            <div>
                <Chip style={{ margin: "2px" }} label={pageData().pageNumber} />
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Ruku</div>
            <div>
                <For each={pageData().rukus}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Rub-El-Hizb</div>
            <div>
                <For each={pageData().rubElHizbs}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Hizb</div>
            <div>
                <For each={pageData().hizbs}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Manzil</div>
            <div>
                <For each={pageData().manzils}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Juz</div>
            <div>
                <For each={pageData().juzs}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }}>
            <div>Ayahs</div>
            <div>
                <For each={getSurahAyah(pageData().chapterAndAyahRange)}>{label => <Chip style={{ margin: "2px" }} label={label} />}</For>
            </div>
        </div>
    </div>)
}