let textEl = document.querySelector('#text')
let speedEl = document.querySelector('#speed');
const text = "I'am Loving Programming!";
let idx = 1
let speed = 400 / speedEl.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0,idx);

    idx++;

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText,speed);
}
