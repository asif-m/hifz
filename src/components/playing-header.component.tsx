import { useStore } from "~/store/store";
import WavesurferWrapperComponent from "./audio/wavesurfer-wrapper.component";
import AudioPlayerControlsComponent from "./audio/audio-player-controls";
import { IChapterAndAyahRange } from "~/models/page";

export default function PlayingHeader() {
  const { pageData } = useStore();

  function getSurahAyah(chapterAndAyahs: Array<IChapterAndAyahRange>) {
    return chapterAndAyahs.map((c) => `${c.chapterNumber}:${c.verseFrom}-${c.verseTo}`)
  }


  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        "justify-content": "space-between",
        margin: "16px"
      }}>
        <div style={{ "min-width": "150px", width: "5%" }}>
          <div>Page        : {pageData().pageNumber}</div>
          <div>Ruku        : {pageData().rukus.join(', ')}</div>
          <div>Rub-El-Hizb : {pageData().rubElHizbs.join(', ')}</div>
          <div>Hizb        : {pageData().hizbs.join(', ')}</div>
          <div>Manzil      : {pageData().manzils.join(', ')}</div>
          <div>Juz         : {pageData().juzs.join(', ')}</div>
          <div>Ayahs         : {getSurahAyah(pageData().chapterAndAyahRange).join(', ')}</div>
          <AudioPlayerControlsComponent />
        </div>
        <div style={{ width: "95%", margin: "16px" }}>
          <WavesurferWrapperComponent />
        </div>
      </div>
    </div>
  );
}


