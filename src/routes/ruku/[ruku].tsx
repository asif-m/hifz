import { useParams } from "@solidjs/router";
import AyathReader from "~/components/ayath-reader";
import { RUKU_INFO } from "~/models/ruku";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.ruku,
    RUKU_INFO
  );
  return (
    <AyathReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
