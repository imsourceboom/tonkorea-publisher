import { browserCheck } from "../agentCheck";

const languageSelect = Array.from(
  document.querySelectorAll(".language-select")
);
const images = Array.from(document.querySelectorAll(".language-select > img"));
const selects = Array.from(document.querySelectorAll(".language-select ul"));
const flags = Array.from(document.querySelectorAll(".language-select ul li"));

if (languageSelect !== null) {
  languageSelect.map((button) => {
    button.addEventListener("click", (e) => {
      selects.map((select) => {
        select.classList.toggle("active");
      });
    });
  });

  flags.map((flag) => {
    flag.addEventListener("click", function () {
      if (this.dataset.country == "korea") {
        images.map((image) => {
          image.src = "/assets/images/flag/korea.svg";
          image.style.opacity = 1;
        });
      }
      if (this.dataset.country == "kingdom") {
        images.map((image) => {
          image.src = "/assets/images/flag/kingdom.svg";
          image.style.opacity = 1;
        });
      }
      if (this.dataset.country == "china") {
        images.map((image) => {
          image.src = "/assets/images/flag/china.svg";
          image.style.opacity = 1;
        });
      }
      if (this.dataset.country == "japan") {
        images.map((image) => {
          image.src = "/assets/images/flag/japan.svg";
          image.style.opacity = 1;
        });
      }
      if (this.dataset.country == "vietnam") {
        images.map((image) => {
          image.src = "/assets/images/flag/vietnam.svg";
          image.style.opacity = 1;
        });
      }
    });
  });
}

// ie 전용 언어 선택
document.addEventListener("DOMContentLoaded", function () {
  const browser = browserCheck();

  if (browser == "chrome") {
    const languages = [
      {
        name: "한국어",
        data: "korean",
      },
      {
        name: "영어",
        data: "english",
      },
    ];

    const ieSelect = document.createElement("select");

    languages.map((lang) => {
      const option = document.createElement("option");

      option.textContent = lang.name;
      option.setAttribute("data-country", lang.data);
      ieSelect.appendChild(option);
    });

    ieSelect.style.cssText =
      "font-size: 14px; border: none; background-color: white; margin-top: -3px; cursor: pointer;";

    languageSelect.map((selector) => {
      selector.outerHTML = ieSelect.outerHTML;
    });
  }
});
