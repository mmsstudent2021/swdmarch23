const speechBtn = document.querySelector("#speechBtn");
const myText = document.querySelector("#myText");

const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

speechBtn.addEventListener("click", () => {
  utterance.text = myText.value;
  utterance.rate = 0.5;
  utterance.pitch = 1.5;
  speechSynthesis.speak(utterance);
});

utterance.addEventListener("start", () => {
  console.log("start speech");
});

utterance.addEventListener("end", () => {
  console.log("end speech");
});
