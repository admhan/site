// Données de la page d'accueil (index).
// Ajouter/modifier du contenu ici met automatiquement à jour le rendu.
export const homeData = {
  hero: {
    name: 'Alexander Chen',
    subtitle: 'Data Scientist • AI Engineer • Database Architect',
    description:
      'Building intelligent systems that transform data into actionable insights. Specialized in machine learning, statistical modeling, and scalable data infrastructure.',
    cvButtonLabel: 'Download CV',
    cvButtonActionMessage: 'CV download would be triggered here',
    portfolioCtaLabel: 'View Portfolio',
    portfolioCtaHref: 'portfolio.html'
  },
  about: {
    title: 'About',
    paragraphs: [
      "I'm a passionate Data Scientist and AI Engineer with expertise in building end-to-end machine learning systems. My work spans from exploratory data analysis to deploying production-grade models that drive business decisions.",
      'With a strong foundation in statistics, computer science, and software engineering, I bridge the gap between theoretical models and practical applications. I specialize in creating scalable data pipelines, implementing advanced ML algorithms, and designing database architectures that support high-performance analytics.',
      "When I'm not training models or optimizing queries, I contribute to open-source projects and explore cutting-edge research in reinforcement learning and natural language processing."
    ]
  },
  expertise: {
    title: 'Expertise',
    items: [
      {
        title: 'Programming',
        icon: 'code',
        skills: ['Python (Expert)', 'C/C++ (Advanced)', 'Java (Advanced)', 'R (Proficient)']
      },
      {
        title: 'Machine Learning',
        icon: 'ml',
        skills: ['Classification & Regression', 'Deep Learning (CNNs, RNNs)', 'PCA & Dimensionality Reduction', 'Reinforcement Learning']
      },
      {
        title: 'Data & Tools',
        icon: 'data',
        skills: ['SQL & NoSQL Databases', 'Pandas, NumPy, Scikit-learn', 'TensorFlow, PyTorch', 'Matplotlib, Seaborn, Plotly']
      }
    ]
  },
  experience: {
    title: 'Experience',
    timeline: [
      {
        date: '2022 - Present',
        role: 'Senior Data Scientist',
        company: 'TechCorp AI Solutions',
        description:
          'Leading a team of data scientists in developing ML-powered recommendation systems. Built end-to-end pipelines processing 10M+ daily transactions, improving prediction accuracy by 35%.'
      },
      {
        date: '2020 - 2022',
        role: 'Machine Learning Engineer',
        company: 'DataFlow Analytics',
        description:
          'Developed and deployed production ML models for fraud detection and customer churn prediction. Implemented A/B testing frameworks and automated model retraining pipelines.'
      },
      {
        date: '2018 - 2020',
        role: 'Data Analyst',
        company: 'Insight Ventures',
        description:
          'Conducted exploratory data analysis and built interactive dashboards for business intelligence. Automated reporting workflows reducing manual effort by 60%.'
      }
    ]
  },
  footer: {
    socialLinks: [
      { href: 'https://github.com', label: 'GitHub', icon: 'github' },
      { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
      { href: 'mailto:contact@example.com', label: 'Email', icon: 'email' }
    ],
    copyright: '© 2026 Alexander Chen. All rights reserved.'
  }
};
