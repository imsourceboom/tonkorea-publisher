import { browserCheck } from "../agentCheck";

const cautionWrapper = document.querySelector(".ie-caution-wrapper");
const browser = browserCheck();

document.addEventListener("DOMContentLoaded", function () {
  if (browser == "ie") {
    if (cautionWrapper !== null) {
      cautionWrapper.style.display = "block";
    }
  }
});
