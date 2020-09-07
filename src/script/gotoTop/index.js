import { throttling } from "../util";
const button = document.createElement("a");

button.setAttribute("href", "#body");

button.style.cssText = `
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    z-index: 999999;
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 2px 5px 15px rgba(169, 239, 241, 0.432);
    backdrop-filter: blur(4px);
    background-image: url(https://icongr.am/clarity/arrow.svg?size=30&color=6b6b6b);
    background-position: center;
    background-size: 25px;
    background-repeat: no-repeat;
`;

body.appendChild(button);

window.addEventListener(
  "scroll",
  throttling(() => {
    let pageY = window.pageYOffset;
    console.log(pageY);

    if (pageY >= 55) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  })
);
