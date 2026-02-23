// Données portfolio : liste des projets + projet mis en avant.
// Ajouter un objet dans `projects` suffit pour l'afficher automatiquement.
export const projectsPageData = {
  hero: {
    backLinkHref: 'index.html',
    backLinkLabel: 'Back to CV',
    title: 'Selected Projects',
    subtitle: 'AI, Machine Learning & Data Engineering'
  },
  projects: [
    {
      title: 'Metro Affluence Prediction',
      description: 'Machine learning model predicting neighborhood affluence using transit data, demographic features, and geospatial analysis.',
      tags: ['Random Forest', 'XGBoost', 'Feature Engineering'],
      image: '',
      ctaLabel: 'View Project'
    },
    {
      title: 'CV Parsing API',
      description: 'LLM-powered API that extracts structured JSON from resumes with 95% accuracy using GPT-4 and custom prompt engineering.',
      tags: ['LLM', 'OpenAI', 'FastAPI'],
      image: '',
      ctaLabel: 'View Project'
    },
    {
      title: 'Reinforcement Learning Pacman',
      description: 'Implemented Q-learning and Deep Q-Networks for autonomous Pacman agent achieving superhuman performance.',
      tags: ['Deep RL', 'PyTorch', 'Q-Learning'],
      image: '',
      ctaLabel: 'View Project'
    },
    {
      title: 'Climate Data PCA Compression',
      description: 'Dimensionality reduction pipeline compressing global climate datasets by 80% while preserving 95% variance.',
      tags: ['PCA', 'NumPy', 'Data Compression'],
      image: '',
      ctaLabel: 'View Project'
    },
    {
      title: 'AI Marketing Bot',
      description: 'Conversational AI chatbot for lead generation using NLP, sentiment analysis, and personalized response generation.',
      tags: ['NLP', 'BERT', 'Transformer'],
      image: '',
      ctaLabel: 'View Project'
    },
    {
      title: 'Java Strategy Game',
      description: 'Turn-based strategy game with AI opponents using minimax algorithm and alpha-beta pruning for decision making.',
      tags: ['Java', 'Game Theory', 'Minimax'],
      image: '',
      ctaLabel: 'View Project'
    }
  ],
  featured: {
    sectionTitle: 'Featured Project',
    number: '01',
    title: 'Real-Time Fraud Detection System',
    description: 'Enterprise-grade fraud detection system processing millions of transactions daily using ensemble methods and anomaly detection.',
    longDescription:
      'The system combines supervised learning (Gradient Boosting, Neural Networks) with unsupervised techniques (Isolation Forest, One-Class SVM) to identify fraudulent patterns in real-time. Deployed on AWS with auto-scaling, maintaining 99.9% uptime while adapting to evolving fraud patterns through continuous learning.',
    metrics: [
      { value: '98.7%', label: 'Accuracy' },
      { value: '0.3%', label: 'False Positive' },
      { value: '< 50ms', label: 'Processing' },
      { value: '5M+/day', label: 'Transactions' }
    ],
    techStackLabel: 'Tech Stack',
    techTags: ['Deep Learning', 'AWS', 'Kafka', 'Docker', 'PostgreSQL'],
    ctaLabel: 'Read Case Study'
  },
  cta: {
    title: "Let's build intelligent systems.",
    description: "I'm always interested in collaborating on challenging data science problems and innovative AI projects.",
    buttonLabel: 'Contact Me',
    buttonHref: 'mailto:contact@example.com'
  },
  footer: {
    copyright: '© 2026 Alexander Chen. All rights reserved.'
  }
};
