/* Menu Hamburger */

const menu = document.querySelector(".menu__menu_hamburger");
const introduction = document.querySelector(".introduction");

menu.addEventListener("click", () => {
  menu.classList.remove("no-animation");
  menu.classList.toggle("close-menu");
  menu.classList.toggle("open-menu");
  introduction.classList.toggle("open-menu");
});
