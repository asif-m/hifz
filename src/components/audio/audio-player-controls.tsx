import { IconButton } from "@suid/material";
import PlayCircle from "@suid/icons-material/PlayCircle";
import StopCircle from "@suid/icons-material/StopCircle";
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
                <Show when={audioPlayerState() === AudioPlayerState.STOPPED}>
                    <IconButton aria-label="play" onclick={() => setAudioPlayerState(AudioPlayerState.PLAYING)}>
                        <PlayCircle />
                    </IconButton>
                </Show>
                <Show when={audioPlayerState() === AudioPlayerState.PLAYING}>
                    <IconButton aria-label="stop" onclick={() => setAudioPlayerState(AudioPlayerState.STOPPED)}>
                        <StopCircle />
                    </IconButton>
                </Show>
            </Show>
        </div>
    )
}