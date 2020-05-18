const btnWrapper = document.querySelector(".telegram-login-wrapper");
const telegramBtn = document.querySelector(
  ".telegram-login-wrapper button.tgme_widget_login_button"
);

console.log(btnWrapper);

if (telegramBtn !== null) {
  telegramBtn.textContent = "로그인";
  telegramBtn.style.cssText = "font-size: 15px;";
}
