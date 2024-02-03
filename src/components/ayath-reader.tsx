import { IAyahBase } from "~/models/ayah-info-interface";
import PlayingHeader from "./playing-header.component";

export default function AyathReader(props: IAyahBase) {
  
  return (
    <PlayingHeader {...props}/>
  );
}
