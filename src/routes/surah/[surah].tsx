// @refresh reload
import { useParams } from "@solidjs/router";

export default function Index() {

  const params = useParams();
  return <div>Surah :  {params.surah}</div>;
}
