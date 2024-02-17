import { IconButton } from "@suid/material";
import PlayCircle from "@suid/icons-material/PlayCircle";
import PauseCircle from "@suid/icons-material/PauseCircle";
import { useStore } from "~/store/store";
import { AudioPlayerState } from "~/models/audio-state";
import { Show } from "solid-js";

export default function AudioPlayerControlsComponent() {
    const { audioPlayerState, setAudioPlayerState, audioLoaded } = useStore()

    return (
        <div style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
        }}>
            <Show when={audioLoaded()}>
                <Show when={audioPlayerState() === AudioPlayerState.PAUSE}>
                    <IconButton aria-label="play" onclick={() => setAudioPlayerState(AudioPlayerState.PLAY)}>
                        <PlayCircle />
                    </IconButton>
                </Show>
                <Show when={audioPlayerState() === AudioPlayerState.PLAY}>
                    <IconButton aria-label="stop" onclick={() => setAudioPlayerState(AudioPlayerState.PAUSE)}>
                        <PauseCircle />
                    </IconButton>
                </Show>
            </Show>
        </div>
    )
}