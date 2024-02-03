// @refresh reload
import { useParams } from "@solidjs/router";
import Reader from "~/components/reader";
import { getSurahAndAyahFromSurahUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromSurahUrl(
    params.surah
  );
  return (
    <Reader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
