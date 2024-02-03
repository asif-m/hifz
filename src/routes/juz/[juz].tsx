import { useParams } from "@solidjs/router";
import Reader from "~/components/reader";
import { JUZ_INFO } from "~/models/juz";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.juz,
    JUZ_INFO
  );
  return (
    <Reader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
