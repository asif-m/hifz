import { useParams } from "@solidjs/router";
import QuranReader from "~/components/mus-haf/quran-reader";
import { PAGE_INFO } from "~/models/page";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.page,
    PAGE_INFO,
  );
  return (
    <QuranReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
