const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let allowColorChange = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startColorChange = () => {
  allowColorChange = true;
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
};
const stopColorChange = () => {
  allowColorChange = false;
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
};

startButton.addEventListener('click', startColorChange);

stopButton.addEventListener('click', stopColorChange);

const colorSwitcher = setInterval(() => {
  if (allowColorChange) {
    document.body.style.backgroundColor = getRandomHexColor();
  }
}, 1000);
