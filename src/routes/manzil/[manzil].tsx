import { useParams } from "@solidjs/router";
import QuranReader from "~/components/mus-haf/quran-reader";
import { MANZIL_INFO } from "~/models/manzil";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.manzil,
    MANZIL_INFO
  );
  return (
    <QuranReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
