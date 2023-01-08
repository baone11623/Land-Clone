window.addEventListener("load", function () {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const btnSignUp = $(".header-formlogin__register");
  const btnSignIn = $(".header-formlogin__login");
  const modalContainer = $(".js-modal-container");
  const signUp = $(".sign-up");
  const signIn = $(".sign-in");
  const btnBackSignUp = $(".auth-form__control-back");
  const btnBackSignIn = $(".sign-in .auth-form__control-back");
  const overlay = $(".modal__overlay");
  const btnSignUpSm = $(".onsm .header-formlogin__register");
  const btnSignInSm = $(".onsm .header-formlogin__login");

  // sign up
  btnSignUp.addEventListener("click", function (e) {
    console.log("check");
    signIn.classList.remove("active");
    modalContainer.classList.add("active");
    signUp.classList.add("active");
  });
  btnSignInSm.addEventListener("click", function (e) {
    console.log("check");
    signIn.classList.remove("active");
    modalContainer.classList.add("active");
    signUp.classList.add("active");
  });
  btnBackSignUp.addEventListener("click", function (e) {
    modalContainer.classList.remove("active");
    signIn.classList.remove("active");
    signUp.classList.remove("active");
  });
  overlay.addEventListener("click", function (e) {
    e.preventDefault();
    modalContainer.classList.remove("active");
    signIn.classList.remove("active");
    signUp.classList.remove("active");
  });

  // sign in
  btnSignIn.addEventListener("click", function (e) {
    signUp.classList.remove(".active");
    modalContainer.classList.add("active");
    signIn.classList.add("active");
  });
  btnSignUpSm.addEventListener("click", function (e) {
    signUp.classList.remove(".active");
    modalContainer.classList.add("active");
    signIn.classList.add("active");
  });
  btnBackSignIn.addEventListener("click", function (e) {
    modalContainer.classList.remove("active");
    signUp.classList.remove("active");
    signIn.classList.remove("active");
  });
  // change form
  const changeSignUp = $(".js-sign-in");
  const changeSignIn = $(".js-sign-up");
  changeSignUp.addEventListener("click", function (e) {
    signUp.classList.remove("active");
    signIn.classList.add("active");
  });
  changeSignIn.addEventListener("click", function () {
    signIn.classList.remove("active");
    signUp.classList.add("active");
  });
});
