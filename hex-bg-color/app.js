const body = document.querySelector('body');
const button = document.querySelector('button');
const values = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

button.addEventListener('click', changeColor);

function changeColor() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * values.length);
    hex += values[index];
  }
  body.style.backgroundColor = hex;
}
