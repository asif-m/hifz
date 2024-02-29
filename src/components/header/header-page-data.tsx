import { For } from "solid-js";
import { Chip } from "@suid/material";
import { IChapterAndAyahRange } from "~/models/page";
import { useStore } from "~/store/store";
import { useNavigate } from "@solidjs/router";
import { StylizedChip } from "./stylized-chip";
import { navigateToUrlAndReload } from "~/utils/navigation";

export default function HeaderPageData() {
  const { pageData } = useStore();
  const navigate = useNavigate();
  function getSurahAyah(c: IChapterAndAyahRange) {
    return `${c.chapterNumber} : ${c.verseFrom}-${c.verseTo}`;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "space-evenly",
        "font-size": "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Page</div>
        <div>
          <Chip
            style={{ margin: "2px", "font-size": "10px", height: "20px" }}
            label={pageData().pageNumber}
            onClick={() => {
              navigateToUrlAndReload(navigate, `/page/${pageData().pageNumber}`);
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Juz</div>
        <div>
          <For each={pageData().juzs}>
            {(label) => <StylizedChip label={label} path={`/juz/${label}`} />}
          </For>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Ruku</div>
        <div>
          <For each={pageData().rukus}>
            {(label) => <StylizedChip label={label} path={`/ruku/${label}`} />}
          </For>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Rub-El-Hizb</div>
        <div>
          <For each={pageData().rubElHizbs}>
            {(label) => (
              <StylizedChip label={label} path={`/rehizb/${label}`} />
            )}
          </For>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Hizb</div>
        <div>
          <For each={pageData().hizbs}>
            {(label) => <StylizedChip label={label} path={`/hizb/${label}`} />}
          </For>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Manzil</div>
        <div>
          <For each={pageData().manzils}>
            {(label) => (
              <StylizedChip label={label} path={`/manzil/${label}`} />
            )}
          </For>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
        }}
      >
        <div>Ayahs</div>
        <div>
          <For each={pageData().chapterAndAyahRange}>
            {(data) => (
              <StylizedChip
                label={getSurahAyah(data)}
                path={`/surah/${data.chapterNumber}:${data.verseFrom}`}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
