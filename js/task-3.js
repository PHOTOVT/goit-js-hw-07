const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const greeting = event.target.value.trim();
  output.textContent = greeting ? greeting : 'Anonymous';
});
