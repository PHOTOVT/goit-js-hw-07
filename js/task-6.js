const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  destroyBoxes();

  const boxesArray = Array.from({ length: amount }, (_, index) => {
    const size = 30 + index * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxes.append(...boxesArray);

  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
