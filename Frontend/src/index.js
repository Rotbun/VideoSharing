import { renderHeader } from './components/header.js';
import { handleRouteChange } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');

  renderHeader('consumer'); // Example: Set 'consumer' or 'creator' dynamically
  handleRouteChange(window.location.hash, appContainer);

  window.addEventListener('hashchange', () => {
    handleRouteChange(window.location.hash, appContainer);
  });
});
