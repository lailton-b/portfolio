/* Menu Hamburger */

const menu = document.querySelector(".menu__menu_hamburger");
const introduction = document.querySelector(".introduction");

menu.addEventListener("click", () => {
  menu.classList.remove("no-animation");
  menu.classList.toggle("close-menu");
  menu.classList.toggle("open-menu");
  introduction.classList.toggle("open-menu");
});

/* Form */

const name = document.querySelector("#nome");
const nameParent = document.querySelector(".nome");
const email = document.querySelector("#email");
const emailParent = document.querySelector(".email");

function handleName() {
  if (name.value.length > 0) {
    nameParent.classList.remove("invalid");
  } else {
    nameParent.classList.add("invalid");
  }
}

function handleEmail() {
  console.log("a");
  if (email.checkValidity()) {
    emailParent.classList.remove("invalid");
  } else {
    emailParent.classList.add("invalid");
  }
}

name.addEventListener("keyup", handleName);
email.addEventListener("keyup", handleEmail);
