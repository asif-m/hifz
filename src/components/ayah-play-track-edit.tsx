import { TextField } from "@suid/material";
import { colors } from "~/models/style-constants";
export default function AyahPlayTrackEditComponent(props: {
    ayah: {
        chapterNumber: number,
        verseNumber: number,
        timestampFrom: number,
        timestampTo: number,
        index: number,
        setTimestampFrom: (index: number, value: number) => void
        setTimestampTo: (index: number, value: number) => void
    },
    highlight : boolean;
}) {

    const { ayah: { chapterNumber, verseNumber, timestampFrom, timestampTo, index, setTimestampFrom, setTimestampTo }, highlight } = props;


    return (
        <div style={{ 
            display: "flex","align-items":"center", 
            gap:"3px" ,
            border : highlight? `solid ${colors.ayahsTrackBorderColor} 3px` : "",
            "border-radius":"3px",
            margin:"4px",
            "min-width":"100px"
            }}>
            <div style={{"min-width":"75px"}}>{`${chapterNumber} : ${verseNumber} `}</div>
            <div style={{"min-width":"75px"}}>
            <TextField
                
                type="number"
                value={timestampFrom}
                InputLabelProps={{
                    shrink: true,
                    style:{"text-align": 'right'}
                }}
                variant="standard"
                onChange={(event, value) => setTimestampFrom(index, parseInt(value))}
            />
            </div>
            <div>-</div>
            <div style={{"min-width":"75px"}}>

            
            <TextField
                style={{"min-width":"75px"}}
                type="number"
                value={timestampTo}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                onChange={(event, value) => setTimestampTo(index, parseInt(value))}
            />
            </div>
        </div>
    )
}