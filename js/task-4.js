const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};
  for (const input of form.elements) {
    if (input.tagName === 'INPUT') {
      const trimmedValue = input.value.trim();
      if (trimmedValue === '') {
        alert('All form fields must be filled in');
        return;
      }
      formData[input.name] = trimmedValue;
    }
  }
  console.log(formData);
  form.reset();
});
