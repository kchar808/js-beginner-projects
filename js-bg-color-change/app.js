const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['violet', 'orange', 'pink', 'red']

button.addEventListener('click', changeColor);

function changeColor() {
  const index = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[index];
}