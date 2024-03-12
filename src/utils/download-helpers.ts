export function downloadAudio(
  wavesurfer: any,
  start: number,
  end: number,
  fileName: string,
) {
  const pcmData = wavesurfer.exportPCM(start, end);

    // Convert PCM data to a Blob
    const slicedBlob = new Blob([new DataView(pcmData)], {
      type: 'audio/wav' // Adjust the MIME type as needed
    });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(slicedBlob);
    downloadLink.download = fileName
    downloadLink.click();
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
