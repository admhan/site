import { homeData } from './homeData.js';

const icons = {
  code: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  `,
  ml: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
      <path d="M8.5 8.5v.01"></path>
      <path d="M16 15.5v.01"></path>
      <path d="M12 12v.01"></path>
      <path d="M11 17v.01"></path>
      <path d="M7 14v.01"></path>
    </svg>
  `,
  data: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `
};

function renderHomePage() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <section class="hero">
      <div class="hero-bg-accent"></div>
      <div class="hero-bg-accent-2"></div>
      <div class="container hero-content">
        <div class="hero-line"></div>
        <h1 class="hero-title">${homeData.hero.name}</h1>
        <p class="hero-subtitle">${homeData.hero.subtitle}</p>
        <p class="hero-description">${homeData.hero.description}</p>
        <div class="hero-buttons">
          <button id="cv-button" class="btn btn-primary">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            ${homeData.hero.cvButtonLabel}
          </button>
          <a href="${homeData.hero.portfolioCtaHref}" class="btn btn-outline">${homeData.hero.portfolioCtaLabel}</a>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${homeData.about.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="about-grid">
          <div class="about-image">
            <div class="image-placeholder">
              <div class="image-icon">${icons.code}</div>
            </div>
          </div>
          <div class="about-content">
            ${homeData.about.paragraphs.map((text) => `<p class="about-text">${text}</p>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-cream">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${homeData.expertise.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-grid">
          ${homeData.expertise.items
            .map(
              (item) => `
                <div class="skill-card">
                  <div class="skill-icon">${icons[item.icon] ?? icons.code}</div>
                  <h3 class="skill-title">${item.title}</h3>
                  <ul class="skill-list">
                    ${item.skills.map((skill) => `<li>${skill}</li>`).join('')}
                  </ul>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container-small">
        <div class="section-header">
          <h2 class="section-title">${homeData.experience.title}</h2>
          <div class="section-line"></div>
        </div>
        <div class="timeline">
          ${homeData.experience.timeline
            .map(
              (item) => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <p class="timeline-date">${item.date}</p>
                  <h3 class="timeline-title">${item.role}</h3>
                  <p class="timeline-company">${item.company}</p>
                  <p class="timeline-description">${item.description}</p>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="social-links">
            ${homeData.footer.socialLinks
              .map(
                (link) => `
                  <a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="social-link" aria-label="${link.label}">
                    ${icons[link.icon] ?? ''}
                  </a>
                `
              )
              .join('')}
          </div>
          <p class="footer-text">${homeData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  `;

  const cvButton = document.querySelector('#cv-button');
  cvButton?.addEventListener('click', () => {
    window.alert(homeData.hero.cvButtonActionMessage);
  });
}

document.addEventListener('DOMContentLoaded', renderHomePage);
