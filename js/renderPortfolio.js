import { projectsPageData } from './projects.js';

function projectNumber(index) {
  return String(index + 1).padStart(2, '0');
}

function renderPortfolioPage() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <section class="portfolio-hero">
      <div class="container">
        <a href="${projectsPageData.hero.backLinkHref}" class="back-link">
          <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          ${projectsPageData.hero.backLinkLabel}
        </a>
        <div class="hero-line"></div>
        <h1 class="portfolio-title">${projectsPageData.hero.title}</h1>
        <p class="portfolio-subtitle">${projectsPageData.hero.subtitle}</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="projects-grid">
          ${projectsPageData.projects
            .map(
              (project, index) => `
                <div class="project-card">
                  <div class="project-image">
                    <span class="project-number">${projectNumber(index)}</span>
                  </div>
                  <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                      ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="btn-project">
                      ${project.ctaLabel}
                      <svg class="icon-tiny" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section-cream">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${projectsPageData.featured.sectionTitle}</h2>
          <div class="section-line"></div>
        </div>
        <div class="featured-grid">
          <div class="featured-left">
            <div class="featured-image">
              <span class="featured-number">${projectsPageData.featured.number}</span>
            </div>
            <div class="metrics-grid">
              ${projectsPageData.featured.metrics
                .map(
                  (metric) => `
                    <div class="metric-card">
                      <p class="metric-value">${metric.value}</p>
                      <p class="metric-label">${metric.label}</p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>
          <div class="featured-right">
            <h3 class="featured-title">${projectsPageData.featured.title}</h3>
            <p class="featured-description">${projectsPageData.featured.description}</p>
            <p class="featured-description-long">${projectsPageData.featured.longDescription}</p>
            <div class="tech-stack">
              <p class="tech-stack-label">${projectsPageData.featured.techStackLabel}</p>
              <div class="tech-tags">
                ${projectsPageData.featured.techTags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('')}
              </div>
            </div>
            <button class="btn btn-primary">
              ${projectsPageData.featured.ctaLabel}
              <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white cta-section">
      <div class="container-small">
        <h2 class="cta-title">${projectsPageData.cta.title}</h2>
        <p class="cta-description">${projectsPageData.cta.description}</p>
        <a href="${projectsPageData.cta.buttonHref}" class="btn btn-primary">${projectsPageData.cta.buttonLabel}</a>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">${projectsPageData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', renderPortfolioPage);
