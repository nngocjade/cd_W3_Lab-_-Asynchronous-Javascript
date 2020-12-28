// STOP BUTTON

let stopButton = document.getElementById("stop-button");
let audioElement = document.getElementById("audio");
let recordButton = document.getElementById("record-button");

let recorder = null;

// an array that holds all the recordings
let trunks = [];

const main = async () => {
  let stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // we only need audio
  recorder = new MediaRecorder(stream);

  // event listeners
  recordButton.addEventListener("click", startRecording);
  stopButton.addEventListener("click", stopRecording);
};

//Functions
const startRecording = () => {
  if ((recordButton.disabled = true)) {
    recorder.start();
    recordButton.style.backgroundColor = "rgba(242, 242, 242, .5)";
    recordButton.style.border = "1px solid red";
    recordButton.style.color = "red";
    recordButton.style.transition = ".2s";
    recordButton.style.width = "3.5rem";
    recordButton.style.height = "3.5rem";
  }
  // if ((stopButton.disabled = true)) {
  //   stopButton.style.backgroundColor = "#f1f3f4";
  //   stopButton.style.border = "none";
  // }
  recorderButton.disabled = false;
};

// console.log(startRecording());

const stopRecording = () => {
  if ((stopButton.disabled = true)) {
    recorder.stop();
    stopButton.style.backgroundColor = "rgba(242, 242, 242, .5)";
    stopButton.style.border = "1px solid red";
    stopButton.style.color = "red";
    stopButton.style.transition = ".2s";
    stopButton.style.width = "3.5rem";
    stopButton.style.height = "3.5rem";
  }
  if ((recordButton.disabled = true)) {
    recordButton.style.backgroundColor = "#f1f3f4";
    recordButton.style.border = "none";
    recordButton.style.color = "rgb(158, 158, 158)";
  }
  expandPlayer();
};

function expandPlayer() {
  let audio = document.getElementById("audio");
  audio.style.width = "45%";
}
function collapsePlayer() {
  let audio = document.getElementById("audio");
  audio.style.width = "0%";
}

main();
