const startButton = document.querySelector('[data-start');
const stopButton = document.querySelector('[data-stop');

let allowColorChange = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  allowColorChange = true;
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
  allowColorChange = false;
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
});

setInterval(() => {
  if (allowColorChange) {
    document.body.style.backgroundColor = getRandomHexColor();
  }
}, 1000);
