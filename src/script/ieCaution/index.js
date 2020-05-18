import { browserCheck } from "../agentCheck";

const cautionWrapper = document.querySelector(".ie-caution-wrapper");
const browser = browserCheck();

if (browser == "ie") {
  cautionWrapper.style.display = "block";
}
