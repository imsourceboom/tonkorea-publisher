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
