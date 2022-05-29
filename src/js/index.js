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
