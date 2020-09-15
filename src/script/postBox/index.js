import Clipboard from "clipboard";
import { contentsBox } from "../detail";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (contentsBox !== null) {
  const userThumbnail = Array.from(
    document.querySelectorAll(".user-thumbnail")
  );
  const userName = Array.from(document.querySelectorAll(".username"));
  // const heartButtons = Array.from(document.querySelectorAll("button.heart"));
  const linkButton = document.querySelector("button.link");
  const commentBox = Array.from(document.querySelectorAll(".comment-box"));
  const replyMoreButtons = Array.from(
    document.querySelectorAll(".re-reply-toggle-btn")
  );
  const replyFormTriggerButtons = Array.from(
    document.querySelectorAll(".re-reply-form-trigger")
  );
  const reReplyWrap = Array.from(
    document.querySelectorAll(".re-reply-comment-wrap")
  );
  const replyForm = Array.from(
    document.querySelectorAll(".comment-box .write-component-wrap")
  );
  const replyFormCancelButtons = Array.from(
    document.querySelectorAll(
      ".comment-box .write-component-wrap button.cancel-btn"
    )
  );

  userThumbnail.map((thumbnail, thumbnailIndex) => {
    userName.map((name, nameIndex) => {
      if (thumbnailIndex === nameIndex) {
        thumbnail.textContent = name.textContent.split("")[0].toUpperCase();
        thumbnail.style.backgroundColor = `${getRandomColor()}`;
      }
    });
  });

  // heartButtons.map((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     e.currentTarget.classList.toggle("clicked");
  //   });
  // });

  const link = new Clipboard(linkButton);
  linkButton.dataset.clipboardText = `${window.location.origin}${window.location.pathname}`;

  const tooltips = () => {
    linkButton.classList.add("modal");

    setTimeout(() => {
      linkButton.classList.remove("modal");
    }, 1500);
  };

  link.on("success", tooltips);

  if (commentBox !== null) {
    if (replyMoreButtons !== null) {
      replyMoreButtons.map((btn, i) => {
        btn.addEventListener("click", (e) => {
          reReplyWrap.map((wrap, j) => {
            if (i === j) {
              btn.classList.toggle("active");
              wrap.classList.toggle("active");
            }
          });
        });
      });
    }

    replyFormTriggerButtons.map((btn, i) => {
      btn.addEventListener("click", () => {
        replyForm.map((form, j) => {
          if (i === j) {
            form.classList.add("active");
          }
        });
      });
    });

    replyFormCancelButtons.map((btn, i) => {
      btn.addEventListener("click", () => {
        replyForm.map((form, j) => {
          if (i === j) {
            form.classList.remove("active");
          }
        });
      });
    });
  }
}
