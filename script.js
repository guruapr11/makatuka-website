// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));

// Email signup — wire this to your existing capture backend (e.g. the
// Google Sheets endpoint already used on makatuka.com) instead of this
// placeholder handler.
const form = document.getElementById('signupForm');
const note = document.getElementById('signupNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  // TODO: replace with a fetch() call to your capture endpoint
  console.log('Signup:', email);
  note.textContent = "You're on the list — thanks!";
  form.reset();
});