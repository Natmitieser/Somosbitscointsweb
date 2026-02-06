import './style.css'
import { videos } from './data/videos.js'

const grid = document.getElementById('library-grid');
const searchInput = document.getElementById('search-input');
const resultCount = document.getElementById('result-count');
const noResults = document.getElementById('no-results');

function renderVideos(videoList) {
    if (videoList.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        resultCount.textContent = '0 resultados encontrados';
        return;
    }

    noResults.style.display = 'none';
    resultCount.textContent = `${videoList.length} video${videoList.length !== 1 ? 's' : ''} encontrado${videoList.length !== 1 ? 's' : ''}`;

    grid.innerHTML = videoList.map(video => `
    <a href="${video.url}" target="_blank" class="video-card">
      <div class="card-thumb">
        <img src="${video.thumbnail}" alt="${video.title}">
        <div class="play-icon">
          <svg viewBox="0 0 24 24" style="width:24px;height:24px;fill:white;margin-left:4px;"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="card-content">
        <span class="card-category">${video.category || 'General'}</span>
        <h3 class="card-title">${video.title}</h3>
        <p class="card-desc">${video.description}</p>
      </div>
    </a>
  `).join('');
}

// Initial render
renderVideos(videos);

// Search Logic
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = videos.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query)
    );
    renderVideos(filtered);
});
