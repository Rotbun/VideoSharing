import { renderVideoList } from '../components/videoList.js';

export function loadHomePage(container) {
  container.innerHTML = '<h1>Welcome to the Video Distribution App!</h1>';
  renderVideoList(container);
}
