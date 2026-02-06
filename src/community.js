import './style.css'
import { events } from './data/events.js'
import { socials } from './data/social.js'

const eventsList = document.getElementById('events-list');
const socialList = document.getElementById('social-list');

// Render Socials
if (socialList) {
  socialList.innerHTML = socials.map(s => `
    <a href="${s.url}" target="_blank" class="community-card" 
       style="border: 1px solid transparent;"
       onmouseover="this.style.background='${s.color}15'; this.style.borderColor='${s.color}';"
       onmouseout="this.style.background='var(--bg-card)'; this.style.borderColor='transparent';">
      <i class="${s.icon}" style="color: ${s.color};"></i>
      <div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
    </a>
  `).join('');
}

// Additional Styles for Community Page
const style = document.createElement('style');
style.textContent = `
  .event-card {
    background: var(--bg-card);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    gap: 24px;
    transition: all 0.3s ease;
    align-items: center;
  }
  .event-card:hover {
    background: var(--bg-card-hover);
    border-color: var(--primary);
    transform: translateX(5px);
  }
  .event-date {
    background: #222;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    min-width: 80px;
    border: 1px solid #333;
  }
  .date-day {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    display: block;
    line-height: 1;
  }
  .date-month {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
  }
  .event-info h3 {
    margin-bottom: 8px;
    font-size: 1.2rem;
  }
  .event-meta {
    font-size: 0.9rem;
    color: var(--text-muted);
    display: flex;
    gap: 16px;
    margin-bottom: 12px;
  }
  .event-meta i {
    color: var(--primary);
    margin-right: 6px;
  }
  
  /* Community Cards */
  .community-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    border-radius: 12px;
    background: var(--bg-card);
    transition: 0.3s;
    border: 1px solid transparent;
    text-decoration: none; /* Fix link underline */
    color: inherit; /* Fix link color */
  }
  .community-card i {
    font-size: 2rem;
    width: 40px; /* Fixed width for alignment */
    text-align: center;
  }
  .community-card h3 {
    font-size: 1rem;
    margin-bottom: 4px;
    color: white; /* Ensure title is white */
  }
  .community-card p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0;
  }
  
  @media (max-width: 600px) {
    .event-card { flex-direction: column; text-align: center; gap: 16px; }
    .event-date { width: 100%; display: flex; justify-content: center; gap: 8px; align-items: baseline; }
  }
`;
document.head.appendChild(style);

// Helper to format date
const getMonthName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('es-ES', { month: 'short' }).replace('.', '');
};
const getDay = (dateString) => {
  const date = new Date(dateString);
  return date.getDate() + 1; // Fix JS date offset issue
};

if (events.length > 0) {
  eventsList.innerHTML = events.map(event => `
    <div class="event-card">
      <div class="event-date">
        <span class="date-day">${getDay(event.date)}</span>
        <span class="date-month">${getMonthName(event.date)}</span>
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <div class="event-meta">
          <span><i class="fa-regular fa-clock"></i> ${event.time}</span>
          <span><i class="fa-solid fa-video"></i> ${event.platform}</span>
        </div>
        <p style="color: #ccc; font-size: 0.95rem; margin-bottom: 12px;">${event.description}</p>
        <a href="${event.link}" target="_blank" class="btn" style="padding: 8px 20px; font-size: 0.9rem;">
          Unirse
        </a>
      </div>
    </div>
  `).join('');
} else {
  eventsList.innerHTML = '<p style="text-align:center; padding: 40px; color: var(--text-muted);">No hay eventos programados por el momento.</p>';
}
