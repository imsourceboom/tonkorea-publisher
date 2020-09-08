import Clipboard from "clipboard";
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
  const heartButtons = Array.from(document.querySelectorAll("button.heart"));
  const linkButton = document.querySelector("button.link");

  logo.textContent = name.textContent.split("")[0].toUpperCase();
  logo.style.backgroundColor = `${getRandomColor()}`;

  heartButtons.map((btn) => {
    btn.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("clicked");
    });
  });

  const link = new Clipboard(linkButton);
  linkButton.dataset.clipboardText = `${window.location.origin}${window.location.pathname}`;

  const tooltips = () => {
    linkButton.classList.add("modal");

    setTimeout(() => {
      linkButton.classList.remove("modal");
    }, 1500);
  };

  link.on("success", tooltips);
}
