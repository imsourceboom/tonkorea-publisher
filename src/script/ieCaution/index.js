import { browserCheck } from "../agentCheck";

const cautionWrapper = document.querySelector(".ie-caution-wrapper");
const cautionClose = document.querySelector(".ie-caution-wrapper img.close");
const browser = browserCheck();

document.addEventListener("DOMContentLoaded", function () {
  if (browser == "ie") {
    if (cautionWrapper !== null) {
      cautionWrapper.style.display = "block";

      cautionClose.addEventListener("click", function () {
        cautionWrapper.style.display = "none";
      });
    }
  }
});
