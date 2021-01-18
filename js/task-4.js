let counterValue = 0;
const spanRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
function increment() {
  spanRef.textContent = counterValue += 1;
}
function decrement() {
  spanRef.textContent = counterValue -= 1;
}
