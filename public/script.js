const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.open('https://www.crosscountrymovers.info', '_self');
});