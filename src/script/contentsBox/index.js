import { contentsBox } from "../detail";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (contentsBox !== null) {
  const logo = document.querySelector(".profile .info .logo");
  const name = document.querySelector(".profile .info .author .name");

  logo.textContent = name.textContent.split("")[0].toUpperCase();
  logo.style.backgroundColor = `${getRandomColor()}`;
}
