const portfolioContainer = document.querySelector('.portfolio-items');
// console.log(portfolioContainer);
portfolioContainer.addEventListener('click', e => {
  e.preventDefault();

  const modalToggle = e.target.closest('.portfolio-item__link');

  if (!modalToggle) return;

  const modal = modalToggle.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  modal.classList.add('is-open');

  closeButton.addEventListener('click', _ => {
    modal.classList.remove('is-open');
  })

})
