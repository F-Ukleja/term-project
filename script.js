const toggle = document.getElementById('themeToggle');
const html   = document.documentElement;

toggle.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? '☀️' : '🌙';
});
