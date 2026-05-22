// Données de la page d'accueil (index).
// Ajouter/modifier du contenu ici met automatiquement à jour le rendu.
export const homeData = {
  hero: {
    name: 'Adam Hannachi',
    subtitle: 'ML & AI Engineer • Data Scientist • Master IASD — Paris-Dauphine PSL',
    description:
      'Specializing in Deep Learning, NLP, and Generative AI. I design and deploy production-grade machine learning systems — from uplift models for marketing optimization to reinforcement learning agents and LLM-powered pipelines. Graduating September 2026, available for full-time positions from October 2026.',
    cvButtonLabel: 'Download CV',
    cvButtonHref: 'CV Adam Hananachi CDI-Tech.pdf',
    portfolioCtaLabel: 'View Projects',
    portfolioCtaHref: 'portfolio.html'
  },
  about: {
    title: 'About',
    image: 'photos/adhannachi.JPG',
    paragraphs: [
      "I'm a Machine Learning & AI Engineer completing a Master's in Artificial Intelligence, Systems and Data (IASD) at Université Paris-Dauphine PSL — a selective program co-accredited with ENS and Mines Paris. My academic path started with a Classe Préparatoire (Maths & Physics) at Lycée Paul Éluard, continued through an engineering track at Université Paris-Saclay, then pivoted into a full AI specialization at Dauphine.",
      "My work bridges research depth and engineering rigor. I have built uplift models for customer-targeting decisions at SÉZANE, designed MCP-based AI tooling for enterprise adoption at House of Communication, and developed LLM-powered CV parsing and semantic matching systems at SPIDR. I am equally at home implementing distributed graph algorithms on Apache Spark or fine-tuning language models for domain-specific tasks.",
      "I am particularly drawn to problems that sit at the intersection of statistical modeling and production engineering — whether that means training a deep RL agent pixel-by-pixel, architecting a RAG pipeline, or extracting causal signals from observational data."
    ]
  },
  expertise: {
    title: 'Expertise',
    items: [
      {
        title: 'Deep Learning & Generative AI',
        icon: 'ml',
        skills: [
          'Neural Networks: MLP, CNN, RNN',
          'LLM Fine-tuning & RAG',
          'Reinforcement Learning: DQN, PPO',
          'Prompt Engineering · LangChain · OpenAI API'
        ]
      },
      {
        title: 'Machine Learning & NLP',
        icon: 'code',
        skills: [
          'Classification · Regression · Clustering',
          'Uplift Modeling & Causal Inference',
          'BERT · Word2Vec · HuggingFace Transformers',
          'Feature Engineering & Model Optimization'
        ]
      },
      {
        title: 'Engineering & Data Stack',
        icon: 'data',
        skills: [
          'Python · PyTorch · Scikit-learn',
          'FastAPI · Apache Spark · Docker',
          'PostgreSQL · MongoDB · MySQL',
          'Pandas · NumPy · Matplotlib · Seaborn'
        ]
      }
    ]
  },
  education: {
    title: 'Education',
    timeline: [
      {
        date: '2024 – 2026',
        degree: 'Master — Intelligence Artificielle, Systèmes et Données (IASD)',
        institution: 'Université Paris-Dauphine PSL · ENS · Mines Paris',
        description:
          'Selective research-oriented Master (48 ECTS, co-accredited with ENS and Mines Paris). Core courses: Foundations of ML, Optimization for ML, Large Language Models, Deep Learning for Image Analysis, Reinforcement Learning, Data Science Lab, Data Acquisition & Storage. Electives include Causal Inference, Graph Analytics, Monte Carlo Search & Games, Knowledge Graphs, and ML on Big Data. Mandatory 5-month research or industry thesis (Apr–Sep 2026).'
      },
      {
        date: '2023 – 2024',
        degree: 'Licence — Informatique, Mathématiques pour la décision et les données',
        institution: 'Université Paris-Dauphine',
        description:
          'Strong foundation in algorithms, probability, statistics, database systems, and mathematical optimization for data-driven decision making.'
      },
      {
        date: '2022 – 2023',
        degree: 'Cycle Ingénieur — Électronique et Systèmes Robotisés',
        institution: 'Université Paris-Saclay',
        description:
          'Engineering curriculum focused on embedded systems, signal processing, electronics, and robotics fundamentals.'
      },
      {
        date: '2020 – 2022',
        degree: 'Classe Préparatoire — Mathématiques & Physique-Chimie',
        institution: 'Lycée Paul Éluard · Saint-Denis',
        description:
          'Intensive two-year preparation for competitive engineering school entrance exams. Rigorous training in analysis, algebra, mechanics, and thermodynamics.'
      }
    ]
  },
  experience: {
    title: 'Experience',
    timeline: [
      {
        date: '2025 – Present',
        role: 'Data Scientist / Data Analyst — Alternance',
        company: 'SÉZANE · Paris',
        description:
          'Developing uplift models to optimize marketing strategies and customer-targeting decisions. Building end-to-end data projects — from problem framing and feature engineering to model evaluation and deployment. Setting up NLP pipelines for sentiment analysis and topic modeling. Producing actionable data reports and working closely with business teams to translate analytical insights into concrete decisions.'
      },
      {
        date: 'May – Aug 2025',
        role: 'AI Developer & Tester — Stage',
        company: 'IA Squad (House of Communication) · Neuilly-sur-Seine',
        description:
          'Contributed to accelerating AI adoption across a major European communications group. Evaluated and benchmarked AI tools for internal business use cases. Developed AI agents, chatbots, and automation workflows tailored to business needs. Contributed to the development of an internal GPT via MCP tool design, and architected a reusable MCP Tools library to standardize and streamline AI solution integration across teams.'
      },
      {
        date: 'May – Aug 2024',
        role: 'ML Developer — Stage',
        company: 'SPIDR · Argenteuil',
        description:
          'Built a FastAPI-based CV parsing system converting PDF resumes to structured JSON using LLM prompt engineering (Llama, GPT-4). Contributed to an AI agent for automated CV management. Designed a BERT-powered semantic matching engine to score CV–job offer compatibility, backed by a custom database of candidate profiles and job postings.'
      }
    ]
  },
  footer: {
    socialLinks: [
      { href: 'https://github.com/admhan', label: 'GitHub', icon: 'github' },
      { href: 'https://www.linkedin.com/in/adam-hannachi-43225a242/', label: 'LinkedIn', icon: 'linkedin' },
      { href: 'mailto:adam.hannachi@dauphine.eu', label: 'Email', icon: 'email' }
    ],
    copyright: '© 2026 Adam Hannachi. All rights reserved.'
  }
};
