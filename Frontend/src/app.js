import { loadHomePage } from './pages/homePage.js';
import { loadLoginPage } from './pages/loginPage.js';
import { loadCreatorDashboard } from './pages/creatorDashboard.js';

export function handleRouteChange(route, container) {
  switch (route) {
    case '#home':
      loadHomePage(container);
      break;
    case '#login':
      loadLoginPage(container);
      break;
    case '#dashboard':
      loadCreatorDashboard(container);
      break;
    default:
      loadHomePage(container);
  }
}
