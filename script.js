// STOP BUTTON

let stopButton = document.getElementById("stop-button");
let audioElement = document.getElementById("audio");
let recordButton = document.getElementById("record-button");

let recorder = null;

// an array that holds all the recordings
let chunks = [];

const main = async () => {
  let stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // we only need audio
  recorder = new MediaRecorder(stream);

  // record and stop event listeners
  recordButton.addEventListener("click", startRecording);
  stopButton.addEventListener("click", stopRecording);

  // window.addEventListener("click", outSideClick);

  // save data once available
  recorder.ondataavailable = saveCurrentRecording;

  // send to media player
  recorder.onstop = sendToMediaPlayer;
};

//Functions
const startRecording = () => {
  recorder.start();
  recordButton.disabled = true;
  recordButton.style.backgroundColor = "rgba(242, 242, 242, .5)";
  recordButton.style.border = "1px solid red";
  recordButton.style.color = "red";
  recordButton.style.transition = ".2s";
  recordButton.style.width = "3.5rem";
  recordButton.style.height = "3.5rem";

  collapsePlayer();

  stopButton.disabled = false;
  stopButton.style.backgroundColor = "#f1f3f4";
  stopButton.style.border = "none";
  stopButton.style.color = "rgb(158, 158, 158)";
};

// console.log(startRecording());

const stopRecording = () => {
  recorder.stop();
  stopButton.disabled = true;
  stopButton.style.backgroundColor = "rgba(242, 242, 242, .5)";
  stopButton.style.border = "1px solid red";
  stopButton.style.color = "red";
  stopButton.style.transition = ".2s";
  stopButton.style.width = "3.5rem";
  stopButton.style.height = "3.5rem";

  recordButton.disabled = false;
  recordButton.style.backgroundColor = "#f1f3f4";
  recordButton.style.border = "none";
  recordButton.style.color = "rgb(158, 158, 158)";

  expandPlayer();
};

function expandPlayer() {
  audioElement.style.width = "45%";
}
function collapsePlayer() {
  audioElement.style.width = "0%";
}

const saveCurrentRecording = (event) => {
  chunks.push(event.data);
  console.log(chunks);
};

const sendToMediaPlayer = () => {
  const blob = new Blob(chunks, {
    type: "audio/mp4; codecs=opus",
  });
  const url = URL.createObjectURL(blob);
  audioElement.setAttribute("src", url);

  //clear the recorded chunks if preferred
  // chunks = [];
};

// function outSideClick(e) {
//   if (e.target != recordButton || e.target != stopButton || audioElement) {
//     recordButton.disabled = false;
//     recordButton.style.backgroundColor = "#f1f3f4";
//     recordButton.style.border = "none";
//     recordButton.style.color = "rgb(158, 158, 158)";
//     stopButton.disabled = false;
//     stopButton.style.backgroundColor = "#f1f3f4";
//     stopButton.style.border = "none";
//     stopButton.style.color = "rgb(158, 158, 158)";
//   }
// }

main();
