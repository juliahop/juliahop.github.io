const form = document.getElementsByTagName('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const btn = document.querySelector('.btn');

// using event bubbling to listen to multiple elements
document.addEventListener('keyup', event => {
  if (event.target !== name && event.target !== email && event.target !== msg) {
    return
  }
  const isValidName = name.checkValidity();
  const isValidEmail = email.checkValidity();
  const isValidMsg = msg.checkValidity();

  if (isValidName && isValidEmail && isValidMsg) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
