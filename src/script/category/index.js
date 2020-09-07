const forumSection = document.getElementById("forum");

if (forumSection !== null) {
  const input = document.querySelector(
    '#forum label.search--box-component input[type="text"]'
  );
  const buttons = Array.from(document.querySelectorAll(".category-button"));

  input.addEventListener("keyup", (e) => {
    if (e.currentTarget.value !== "") {
      e.currentTarget.parentElement.classList.add("active");
    } else {
      e.currentTarget.parentElement.classList.remove("active");
    }
  });

  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");

      if (
        !e.currentTarget.classList.contains("active") &&
        e.target.nodeName === "LI"
      ) {
        console.log(e.target.nodeName);
        e.currentTarget.children[1].textContent =
          e.target.childNodes[0].textContent;
      }
    });
  });
}
