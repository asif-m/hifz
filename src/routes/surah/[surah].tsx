// @refresh reload
import { useParams } from "@solidjs/router";
import AyathReader from "~/components/ayath-reader";
import { getSurahAndAyahFromSurahUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromSurahUrl(
    params.surah
  );
  return (
    <AyathReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}