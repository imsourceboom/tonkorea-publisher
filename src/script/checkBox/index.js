const allCheck = document.querySelector(
  "main#admin-main table.table-basic--style .all-check input[type='checkbox'] "
);
const checks = Array.from(
  document.querySelectorAll(
    "main#admin-main table.table-basic--style tbody .check input[type='checkbox']"
  )
);

if (allCheck !== null) {
  allCheck.addEventListener("click", () => {
    checks.map((check) => {
      check.checked = allCheck.checked;
    });
  });
}
