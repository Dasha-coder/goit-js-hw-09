const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let idInt;

function onStartClick(event) {
  idInt = setInterval(() => {
    const colorCurrent = getRandomHexColor();
    refs.body.style.backgroundColor = `${colorCurrent}`;
  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  console.dir(event.currentTarget);
}

//idInt = setInterval(onStartClick, 1000);

function onStopClick() {
  clearInterval(idInt);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
