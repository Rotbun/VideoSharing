export function loadCreatorDashboard(container) {
  container.innerHTML = `
    <h1>Creator Dashboard</h1>
    <form id="uploadForm">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>
      <label for="video">Video File:</label>
      <input type="file" id="video" name="video" accept="video/*" required>
      <button type="submit">Upload</button>
    </form>
  `;

  const form = document.getElementById('uploadForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch('/api/videos/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Video uploaded successfully!');
      } else {
        alert('Video upload failed.');
      }
    } catch (err) {
      console.error('Error uploading video:', err);
    }
  });
}
