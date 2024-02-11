import { IconButton } from "@suid/material";
import PlayCircle from "@suid/icons-material/PlayCircle";
import StopCircle from "@suid/icons-material/StopCircle";
import { useStore } from "~/store/store";
import { AudioPlayerState } from "~/models/audio-player-state";
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
                <Show when={audioPlayerState() === AudioPlayerState.stopped}>
                    <IconButton aria-label="play" onclick={() => setAudioPlayerState(AudioPlayerState.playing)}>
                        <PlayCircle />
                    </IconButton>
                </Show>
                <Show when={audioPlayerState() === AudioPlayerState.playing}>
                    <IconButton aria-label="stop" onclick={() => setAudioPlayerState(AudioPlayerState.stopped)}>
                        <StopCircle />
                    </IconButton>
                </Show>
            </Show>
        </div>
    )
}