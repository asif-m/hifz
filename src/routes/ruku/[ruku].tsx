import { useParams } from "@solidjs/router";
import QuranReader from "~/components/mus-haf/quran-reader";
import { RUKU_INFO } from "~/models/ruku";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.ruku,
    RUKU_INFO
  );
  return (
    <QuranReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
