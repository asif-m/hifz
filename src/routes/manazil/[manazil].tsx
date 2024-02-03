import { useParams } from "@solidjs/router";
import AyathReader from "~/components/ayath-reader";
import { MANAZIL_INFO } from "~/models/manazil";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.manazil,
    MANAZIL_INFO
  );
  return (
    <AyathReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
