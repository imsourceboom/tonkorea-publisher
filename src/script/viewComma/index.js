import { comma } from "../util";

const views = Array.from(document.querySelectorAll(".comma"));

if (views !== null) {
  views.map((view) => {
    view.textContent = comma(view.textContent);
  });
}
