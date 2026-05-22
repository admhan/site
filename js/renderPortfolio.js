import { projectsPageData } from './projects.js';

let lang = localStorage.getItem('portfolio-lang') || 'fr';

function projectNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function renderProjectCta(project) {
  if (!project.ctaHref) return '';
  return `
    <a href="${project.ctaHref}" target="_blank" rel="noopener noreferrer" class="btn-project">
      ${project.ctaLabel}
      <svg class="icon-tiny" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  `;
}

function injectLangStyles() {
  if (document.getElementById('lang-toggle-style')) return;
  const style = document.createElement('style');
  style.id = 'lang-toggle-style';
  style.textContent = `
    .lang-switch {
      position: fixed;
      top: 1.5rem;
      right: 2rem;
      z-index: 100;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .lang-btn {
      background: none;
      border: none;
      font-family: inherit;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0.2rem 0.35rem;
      opacity: 0.38;
      transition: opacity 0.2s;
      color: inherit;
    }
    .lang-btn:hover { opacity: 0.7; }
    .lang-active {
      opacity: 1;
      border-bottom: 1px solid currentColor;
    }
    .lang-sep {
      opacity: 0.22;
      font-size: 0.72rem;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
}

function renderPortfolioPage() {
  injectLangStyles();
  const d = projectsPageData[lang];
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="lang-switch" aria-label="Language switcher">
      <button class="lang-btn ${lang === 'fr' ? 'lang-active' : ''}" data-lang="fr">FR</button>
      <span class="lang-sep">/</span>
      <button class="lang-btn ${lang === 'en' ? 'lang-active' : ''}" data-lang="en">EN</button>
    </div>

    <section class="portfolio-hero">
      <div class="container">
        <a href="${d.hero.backLinkHref}" class="back-link">
          <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          ${d.hero.backLinkLabel}
        </a>
        <div class="hero-line"></div>
        <h1 class="portfolio-title">${d.hero.title}</h1>
        <p class="portfolio-subtitle">${d.hero.subtitle}</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="projects-grid">
          ${d.projects.map((project, index) => `
            <div class="project-card">
              <div class="project-image">
                ${project.image
                  ? `<img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy" />`
                  : `<div class="project-placeholder" aria-hidden="true"><span class="project-number">${projectNumber(index)}</span></div>`
                }
              </div>
              <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                  ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${renderProjectCta(project)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section section-cream">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${d.featured.sectionTitle}</h2>
          <div class="section-line"></div>
        </div>
        <div class="featured-grid">
          <div class="featured-left">
            <div class="featured-image">
              <span class="featured-number">${d.featured.number}</span>
            </div>
            <div class="metrics-grid">
              ${d.featured.metrics.map((metric) => `
                <div class="metric-card">
                  <p class="metric-value">${metric.value}</p>
                  <p class="metric-label">${metric.label}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="featured-right">
            <h3 class="featured-title">${d.featured.title}</h3>
            <p class="featured-description">${d.featured.description}</p>
            <p class="featured-description-long">${d.featured.longDescription}</p>
            <div class="tech-stack">
              <p class="tech-stack-label">${d.featured.techStackLabel}</p>
              <div class="tech-tags">
                ${d.featured.techTags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
              </div>
            </div>
            ${d.featured.ctaHref ? `
              <a href="${d.featured.ctaHref}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                ${d.featured.ctaLabel}
                <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white cta-section">
      <div class="container-small">
        <h2 class="cta-title">${d.cta.title}</h2>
        <p class="cta-description">${d.cta.description}</p>
        <a href="${d.cta.buttonHref}" class="btn btn-primary">${d.cta.buttonLabel}</a>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">${d.footer.copyright}</p>
        </div>
      </div>
    </footer>
  `;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('portfolio-lang', lang);
      renderPortfolioPage();
    });
  });
}

document.addEventListener('DOMContentLoaded', renderPortfolioPage);
