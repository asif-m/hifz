export function downloadAudio(
  wavesurfer: any,
  start: number,
  end: number,
  fileName: string,
) {
  const audioData = wavesurfer.backend.buffer.slice(start, end);
  const blob = new Blob([audioData], { type: "audio/mp3" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.mp3`;
  link.click();
}
export function downloadJsonFile(data: any, filename: string) {
  // Creating a blob object from non-blob data using the Blob constructor
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  // Create a new anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "download";
  a.click();
  a.remove();
}
