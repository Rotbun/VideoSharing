export async function renderVideoList(container) {
  try {
    const response = await fetch('/api/videos');
    const videos = await response.json();

    const videoList = document.createElement('div');
    videoList.className = 'video-list';

    videos.forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.innerHTML = `<h3>${video.title}</h3><p>${video.hashtags}</p>`;
      videoList.appendChild(videoItem);
    });

    container.appendChild(videoList);
  } catch (err) {
    console.error('Error fetching videos:', err);
  }
}
