// @refresh reload
import { useParams } from "@solidjs/router";
import AyathReader from "~/components/ayath-reader";
import { HIZB_INFO } from "~/models/hizb";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.hizb,
    HIZB_INFO
  );
  return (
    <AyathReader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
