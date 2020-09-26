const header = document.querySelector("body > header");
const footer = document.querySelector("body > footer");
const formSection = document.querySelector("main section#form");

if (formSection !== null) {
  header.style.cssText =
    "width: 0; height: 0; position: fixed; z-index:  -99999999; opacity: 0; top: -100%; left: -100%;";
  footer.style.cssText =
    "width: 0; height: 0; position: fixed; z-index:  -99999999; opacity: 0; top: -100%; left: -100%;";

  const link = document.createElement("link");
  link.setAttribute("rel", "preconnect");
  link.setAttribute(
    "href",
    "https://icongr.am/feather/check.svg?size=24&color=0062ff"
  );
  document.head.appendChild(link);

  const textInputs = Array.from(
    document.querySelectorAll('input[type="text"]')
  );
  const requiredInputs = Array.from(
    document.querySelectorAll('.required + input[type="text"]')
  );
  const checkBox = document.querySelector('input[type="checkbox"]#is-usa');
  const label = document.querySelector("label.comment");
  const submit = document.querySelector('input[type="submit"]');

  const valueCheck = () => {
    if (
      requiredInputs[0].value !== "" &&
      requiredInputs[1].value !== "" &&
      requiredInputs[2].value !== "" &&
      requiredInputs[3].value !== "" &&
      requiredInputs[4].value !== "" &&
      checkBox.checked == true
    ) {
      submit.style.cssText =
        "color: white; background-color: #0088cc; cursor: pointer;";
      submit.removeAttribute("disabled");
    } else {
      submit.style.cssText = "background-color: lightgrey;";
      submit.setAttribute("disabled", "");
    }
  };

  const lengthCheck = (input) => {
    input = input.target;
    const groupBox = input.parentElement.parentElement;
    const alert = input.parentElement.nextElementSibling.nextElementSibling;

    if (input.value.length == Number(input.getAttribute("maxlength"))) {
      groupBox.classList.add("length");
      alert.textContent = `최대 ${input.getAttribute(
        "maxlength"
      )}자까지 입력 가능합니다.`;

      setTimeout(() => {
        groupBox.classList.remove("length");
        alert.textContent = "";
      }, 2000);
    }
  };

  requiredInputs.map((input, index) => {
    input.addEventListener("keyup", (e) => {
      valueCheck();

      if (index === 1) {
        // 영문 소대문자와 숫자만 허용
        input.value = input.value.replace(/[^a-zA-Z0-9+]*$/, "");
        let arr = input.value.split("");
        if (arr[0] !== "@") {
          arr.unshift("@");
          input.value = arr.join("");
        }
      }
    });

    if (index === 1) {
      input.addEventListener("focusout", () => {
        if (input.value == "@") {
          input.value = "";
        }
      });
    }
  });

  textInputs.map((input) => {
    input.addEventListener("keyup", (e) => {
      lengthCheck(e);
    });
  });

  label.addEventListener("click", () => {
    if (checkBox.checked == true) {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }

    valueCheck();
  });
}
