import { renderHeader } from '../components/header.js';

export function loadHomePage(container) {
  container.innerHTML = ''; // Clear content

  // Add a hero section
  const hero = document.createElement('section');
  hero.classList.add('hero');
  hero.innerHTML = `
    <h2>Explore the World of Short Videos</h2>
    <p>Join the platform and enjoy amazing content.</p>
    <button id="explore-btn">Explore Now</button>
  `;
  container.appendChild(hero);

  // Add a click listener to the button
  document.getElementById('explore-btn').addEventListener('click', () => {
    alert('Explore feature coming soon!');
  });
}
