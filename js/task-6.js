const inputRef = document.querySelector('#validation-input');
console.log(inputRef);
const dataLength = Number(inputRef.dataset.length);
console.log(dataLength);
inputRef.addEventListener('blur', inputLengthValidation);
function inputLengthValidation(event) {
  const inputValue = event.target.value.length;

  if (inputValue === dataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
