import * as countries from "../data/countries";

const join = document.getElementById("join");
// 국적
// const koreaRadio = document.querySelector("#join .country #korea");
// const otherRadio = document.querySelector("#join .country #other-country");
const otherSelect = document.querySelector("#join .country select");
// 회원유형
const personalRadio = document.querySelector("#join .member-kind #personal");
const companyRadio = document.querySelector("#join .member-kind #company");
const companyInputs = Array.from(
  document.querySelectorAll("#join .member-kind .company-box input")
);
// 관심분야
const ecosystemCheck = document.querySelector(
  "#join .interest .ecosystem #ecosystem"
);
const ecosystemInput = document.querySelector(
  "#join .interest .ecosystem input[type='text']"
);
const otherInterestCheck = document.querySelector(
  "#join .interest .other-interest #other-interest"
);
const otherInterestInput = document.querySelector(
  "#join .interest .other-interest input[type='text']"
);

if (join !== null) {
  const firstOption = document.createElement("option");
  // firstOption.setAttribute("disabled", "true");
  firstOption.setAttribute("selected", "true");
  firstOption.value = "";
  firstOption.innerHTML = "대한민국";
  otherSelect.appendChild(firstOption);

  countries.default.map((country) => {
    const option = document.createElement("option");
    option.setAttribute("value", "");
    option.innerHTML = `${country}`;
    otherSelect.appendChild(option);
  });

  // 국적
  // koreaRadio.addEventListener("click", function (e) {
  //   otherSelect.disabled = true;
  //   otherSelect.value = "";
  //   otherSelect.style.opacity = 0.5;
  // });
  // otherRadio.addEventListener("click", function (e) {
  //   otherSelect.disabled = false;
  //   otherSelect.style.opacity = 1;
  // });

  // 회원유형
  if (personalRadio !== null) {
    personalRadio.addEventListener("click", function (e) {
      companyInputs.map((input) => {
        input.disabled = true;
        input.value = "";
        input.style.opacity = 0.5;
        input.parentElement.previousElementSibling.style.opacity = 0.5;
      });
    });
  }

  if (companyRadio !== null) {
    companyRadio.addEventListener("click", function (e) {
      companyInputs.map((input) => {
        input.disabled = false;
        input.style.opacity = 1;
        input.parentElement.previousElementSibling.style.opacity = 1;
      });
    });
  }

  // 관심분야
  if (ecosystemCheck !== null) {
    ecosystemCheck.addEventListener("click", function (e) {
      if (e.currentTarget.checked) {
        ecosystemInput.disabled = false;
        ecosystemInput.style.opacity = 1;
      } else {
        ecosystemInput.disabled = true;
        ecosystemInput.value = "";
        ecosystemInput.style.opacity = 0.5;
      }
    });
  }

  if (otherInterestCheck !== null) {
    otherInterestCheck.addEventListener("click", function (e) {
      if (e.currentTarget.checked) {
        otherInterestInput.disabled = false;
        otherInterestInput.style.opacity = 1;
      } else {
        otherInterestInput.disabled = true;
        otherInterestInput.value = "";
        otherInterestInput.style.opacity = 0.5;
      }
    });
  }
}
