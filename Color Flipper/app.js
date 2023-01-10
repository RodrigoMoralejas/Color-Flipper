const colors = ["green", "red", "blue", "violet", "gray", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number between 0 - 3 colors [index 0]
  const randomNumber = getRandonNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

getRandonNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
