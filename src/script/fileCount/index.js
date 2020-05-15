const btnOne = document.querySelector("#input_file_1.file-button-1");
const btnTwo = document.querySelector("#input_file_2.file-button-2");

function fileCountFunc(e) {
  if (e.target.files.length === 1) {
    e.target.parentElement.nextElementSibling.innerText =
      e.target.files[0].name;
  }

  if (e.target.files.length > 1) {
    e.target.parentElement.nextElementSibling.innerText =
      e.target.files.length + " files";
  }
}

if (btnOne !== null || btnTwo !== null) {
  btnOne.addEventListener("change", fileCountFunc);
  btnTwo.addEventListener("change", fileCountFunc);
}
