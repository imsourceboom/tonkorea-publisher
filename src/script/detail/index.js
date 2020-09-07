export const contentsBox = document.querySelector(
  "article.container.contents-box"
);
const img = Array.from(
  document.querySelectorAll("article.container.contents-box img")
);
const iframe = Array.from(
  document.querySelectorAll("article.container.contents-box iframe")
);
// const alert= document.querySelector('section#detail .alert')
// const share= document.querySelector('section#detail .share')
// const detail = document.querySelector("section#detail");

// if (detail !== null) {
if (contentsBox !== null) {
  // iframe 태그들을 div.youtube-wrap 로 감싸기
  iframe.forEach((e) => {
    const youtubeWrap = document.createElement("div");
    youtubeWrap.setAttribute("class", "youtube-wrap");
    youtubeWrap.innerHTML = e.outerHTML;
    e.parentNode.insertBefore(youtubeWrap, e);
    e.remove();
  });
  // img 태그들을 div.image-box 로 감싸기
  img.forEach((i) => {
    const imageBox = document.createElement("div");
    imageBox.setAttribute("class", "image-box");
    imageBox.innerHTML = i.outerHTML;
    i.parentNode.insertBefore(imageBox, i);
    i.remove();
  });
  // 공유버튼 누르면 팝업창
  // share.addEventListener("click", () => {
  //   alert.classList.add("on");
  //   setTimeout(() => {
  //     alert.classList.remove("on");
  //   }, 2000);
  // });
}
// ]
