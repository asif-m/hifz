import { colors } from "~/models/style-constants";

export const waveSurferConfig = {
  container: "#waveform",
  waveColor: colors.wave,
  progressColor: colors.waveProgress,
  minPxPerSec: 100,
  // audioRate:1.5,
  renderFunction: (
    channels: Array<Float32Array | number[]>,
    ctx: CanvasRenderingContext2D
  ) => {
    const { width, height } = ctx.canvas;
    const scale = channels[0].length / width;
    const step = 10;

    ctx.translate(0, height / 2);
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();

    for (let i = 0; i < width; i += step * 2) {
      const index = Math.floor(i * scale);
      const value = Math.abs(channels[0][index]);
      let x = i;
      let y = value * height;

      ctx.moveTo(x, 0);
      ctx.lineTo(x, y);
      ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true);
      ctx.lineTo(x + step, 0);

      x = x + step;
      y = -y;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, y);
      ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false);
      ctx.lineTo(x + step, 0);
    }

    ctx.stroke();
    ctx.closePath();
  },
};

export const zoomPluginConfig = {
  // the amount of zoom per wheel step, e.g. 0.5 means a 50% magnification per scroll
  scale: 0.5,
  // Optionally, specify the maximum pixels-per-second factor while zooming
  maxZoom: 100,
};

export const timelinePluginConfig = {
  height: 20,
  timeInterval: 1,
  primaryLabelInterval: 1,
  formatTimeCallback: (second: number) => second,
  style: {
    fontSize: "10px",
    color: "white",
  },
};

export const regionPlugins = {};
