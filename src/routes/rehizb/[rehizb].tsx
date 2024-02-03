import { useParams } from "@solidjs/router";
import Reader from "~/components/reader";
import { RUB_EL_HIZB_INFO } from "~/models/rub-el-hizb";
import { getSurahAndAyahFromUrl } from "~/utils/param-convertor";

export default function Index() {
  const params = useParams();
  const { verseNumber, chapterNumber } = getSurahAndAyahFromUrl(
    params.rehizb,
    RUB_EL_HIZB_INFO
  );
  return (
    <Reader verseNumber={verseNumber} chapterNumber={chapterNumber} />
  );
}
