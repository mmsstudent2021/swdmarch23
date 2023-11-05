const recordBtn = document.querySelector("#recordBtn");
const output = document.querySelector("#output");

const recognition = new webkitSpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;

// recognition.onresult = (event) => {
    // console.log(event.result);
//   const result = event.results[event.results.length - 1];
//   const transcript = result[0].transcript;
//   transcription.textContent = transcript;
// };

recognition.addEventListener("soundstart",() => {
    recordBtn.innerText = "loading"
})

recognition.addEventListener("soundend",(event) => {
    recordBtn.innerText = "Record"
})

recognition.addEventListener("result",(event) => {
    console.log(event.results[0][0].transcript);
    output.innerText = event.results[0][0].transcript
})


recordBtn.addEventListener("click", () => {
  recognition.start();

});
