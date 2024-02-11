// @refresh reload
import { useParams } from "@solidjs/router";
import QuranReader from "~/components/mus-haf/quran-reader";
import { getSurahAndAyahFromSurahUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromSurahUrl(
    params.surah
  );
  return (
    <QuranReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
