const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const spanRef = document.querySelector('#text');
console.log(spanRef);
inputRef.addEventListener('input', inputFontSizeControl);
function inputFontSizeControl(event) {
  spanRef.style.fontSize = event.target.value + 'px';
}
