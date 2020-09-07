import { comma } from "../util";

const views = Array.from(document.querySelectorAll("table tbody td.comma"));

if (views !== null) {
  views.map((view) => {
    view.textContent = comma(view.textContent);
  });
}
