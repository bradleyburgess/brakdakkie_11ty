import initCottages from './cottages';
import initAbout from './about';
import initReviews from './reviews';

(() => {
  const toggleBoolean = (value) => (value === 'false' || value === 'false' ? 'true' : 'false');
  const toggleHamburgerText = (value) => (value === 'Open Menu' ? 'Close Menu' : 'Open Menu');

  const html = document.querySelector('html');
  const hamburgerToggle = document.getElementById('hamburger-toggle');
  const hamburgerLabel = document.getElementById('hamburger-label');

  hamburgerToggle.addEventListener('click', () => {
    html.classList.toggle('menu-open');
    hamburgerToggle.ariaExpanded = toggleBoolean(hamburgerToggle.ariaExpanded);
    hamburgerLabel.innerText = toggleHamburgerText(hamburgerLabel.innerText);
  });
})();

(() => {
  const path = new URL(window.location).pathname;
  if (path === '/') initReviews();
  if (path === '/cottages/') initCottages();
  if (path === '/about/') initAbout();
})();
