import SmoothScroll from "smooth-scroll";

const detailPage = document.querySelector("section#detail");

if (detailPage == null) {
  new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true,
  });
}

new SmoothScroll('a[href="#attach-box"]', {
  speed: 300,
  speedAsDuration: true,
  offset: 100,
});
