/* Menu Hamburger */

const menu = document.querySelector('.menu__menu_hamburger');
const introduction = document.querySelector('.introduction');

menu.addEventListener('click', () => {
  menu.classList.remove('no-animation');
  menu.classList.toggle('close-menu');
  menu.classList.toggle('open-menu');
  introduction.classList.toggle('open-menu');
});

/* Form */

// Name validation

const name = document.querySelector('#nome');
const nameParent = document.querySelector('.nome');

function handleName() {
  if (name.value.length > 0) {
    nameParent.classList.remove('invalid');
  } else {
    nameParent.classList.add('invalid');
  }
}

name.addEventListener('keyup', handleName);

// E-mail validation

const email = document.querySelector('#email');
const emailParent = document.querySelector('.email');
let emailError = false;

function handleEmailBlur() {
  if (!email.checkValidity()) {
    emailParent.classList.add('invalid');
    emailError = true;
  }
}

function handleEmailKey() {
  if (emailError) {
    if (email.checkValidity()) {
      emailParent.classList.remove('invalid');
      emailError = false;
    }
  } else return;
}

email.addEventListener('keyup', handleEmailKey);
email.addEventListener('blur', handleEmailBlur);
