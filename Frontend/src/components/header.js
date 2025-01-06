export function renderHeader(container) {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="container">
      <h1>Video Distribution App</h1>
      <nav>
        <ul>
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#login" class="nav-link">Login</a></li>
          <li><a href="#dashboard" class="nav-link">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  `;
  container.appendChild(header);
}
