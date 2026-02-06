import './style.css'
import { videos } from './data/videos.js'

document.querySelector('#app').innerHTML = `
  ${document.querySelector('#app').innerHTML}
`

// Featured Videos Logic
const featuredGrid = document.getElementById('featured-grid');

if (featuredGrid) {
  const featuredVideos = videos.filter(v => v.featured).slice(0, 3);

  featuredGrid.innerHTML = featuredVideos.map(video => createVideoCard(video)).join('');
}

function createVideoCard(video) {
  return `
    <a href="${video.url}" target="_blank" class="video-card">
      <div class="card-thumb">
        <img src="${video.thumbnail}" alt="${video.title}">
        <div class="play-icon">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="card-content">
        <span class="card-category">${video.category || 'General'}</span>
        <h3 class="card-title">${video.title}</h3>
        <p class="card-desc">${video.description}</p>
      </div>
    </a>
  `;
}
