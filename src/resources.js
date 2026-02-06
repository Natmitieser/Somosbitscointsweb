import './style.css'
import { glossary } from './data/glossary.js'
import { tools } from './data/tools.js'

// --- Tools Logic ---
const toolsGrid = document.getElementById('tools-grid');

toolsGrid.innerHTML = tools.map(tool => `
  <a href="${tool.url}" target="_blank" style="text-decoration: none;">
    <div style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 24px; height: 100%; transition: 0.3s; display: flex; flex-direction: column;" 
         onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='${tool.color}';" 
         onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.05)';">
      <div style="background: ${tool.color}20; width: 50px; height: 50px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
        <i class="${tool.icon}" style="color: ${tool.color}; font-size: 1.5rem;"></i>
      </div>
      <h3 style="margin-bottom: 8px; font-size: 1.25rem;">${tool.name}</h3>
      <div style="font-size: 0.8rem; color: ${tool.color}; text-transform: uppercase; font-weight: 700; margin-bottom: 8px;">${tool.type}</div>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">${tool.description}</p>
    </div>
  </a>
`).join('');

// --- Glossary Logic ---
const glossaryGrid = document.getElementById('glossary-grid');
const searchInput = document.getElementById('glossary-search');

function renderGlossary(terms) {
  glossaryGrid.innerHTML = terms.map(item => `
    <div style="background: #111; border-left: 3px solid var(--primary); padding: 20px; border-radius: 0 12px 12px 0;">
      <h3 style="color: var(--primary); margin-bottom: 8px; font-family: monospace; font-size: 1.2rem;">${item.term}</h3>
      <p style="color: #ddd; font-size: 0.95rem;">${item.definition}</p>
    </div>
  `).join('');
}

renderGlossary(glossary);

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = glossary.filter(g =>
    g.term.toLowerCase().includes(query) ||
    g.definition.toLowerCase().includes(query)
  );
  renderGlossary(filtered);
});

// --- Simple Price Ticker (Mock or Fetch) ---
// --- Simple Price Ticker (Binance API) ---
async function fetchPrice() {
  const priceEl = document.getElementById('btc-price');
  try {
    // Fetch from Binance API (BTC/USDT)
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await response.json();
    const price = parseFloat(data.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    priceEl.textContent = price;
    priceEl.style.color = '#00ff00'; // Green text
  } catch (e) {
    console.error("Price fetch failed:", e);
    // If API fails, show a dash or 'Desconectado' instead of a fake number
    priceEl.textContent = "---";
    priceEl.style.color = 'var(--text-muted)';
  }
}

fetchPrice();
setInterval(fetchPrice, 30000); // Update every 30s
