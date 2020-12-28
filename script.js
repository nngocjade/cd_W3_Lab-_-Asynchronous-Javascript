// STOP BUTTON

let stopBtn = document.getElementById("stop-button");
stopBtn.addEventListener("click", stopRecording);

function stopRecording() {
  expandPlayer();
}

function expandPlayer() {
  let audio = document.getElementById("audio");
  audio.style.width = "45%";
}
