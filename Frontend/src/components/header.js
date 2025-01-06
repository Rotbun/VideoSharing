export function renderHeader(userRole) {
  const header = document.getElementById('header');
  header.innerHTML = `
    <nav>
      <a href="#home">Home</a>
      ${userRole === 'creator' ? '<a href="#dashboard">Dashboard</a>' : ''}
      <a href="#login">Login</a>
    </nav>
  `;
}
