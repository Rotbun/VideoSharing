import { loadHomePage } from './pages/homePage.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Load the home page by default
  loadHomePage(app);

  // Set up navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('href').substring(1);

      if (target === 'home') {
        loadHomePage(app);
      }
      // Additional navigation logic can be added here
    });
  });
});
