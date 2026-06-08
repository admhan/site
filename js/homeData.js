// Données bilingues de la page d'accueil.
// Modifier le contenu ici met automatiquement à jour le rendu.
export const homeData = {

  fr: {
    hero: {
      name: 'Adam Hannachi',
      subtitle: 'Ingénieur Intelligence Artificielle · Data Science · Machine Learning · Master IASD, Paris-Dauphine PSL',
      description:
        'En fin de Master Intelligence Artificielle, Systèmes et Données (IASD) à l\'Université Paris-Dauphine PSL, je construis et déploie des systèmes de machine learning à partir de bases solides en statistiques, deep learning et ingénierie. Formation rigoureuse, expériences variées en alternance et en stage. Diplômé en septembre 2026, disponible à partir d\'octobre 2026.',
      cvButtonLabel: 'Télécharger le CV',
      cvButtonHref: 'CV Adam Hananachi CDI-Tech.pdf',
      portfolioCtaLabel: 'Voir les projets',
      portfolioCtaHref: 'portfolio.html'
    },
    about: {
      title: 'À propos',
      image: 'photos/adhannachi.PNG',
      paragraphs: [
        'Ingénieur ML & IA, je termine un Master Intelligence Artificielle, Systèmes et Données (IASD) à l\'Université Paris-Dauphine PSL, programme sélectif co-accrédité avec l\'ENS et Mines Paris. Après une classe préparatoire MP au lycée Paul Éluard et une filière ingénieur à l\'Université Paris-Saclay, j\'ai orienté mon parcours vers une spécialisation complète en IA appliquée.',
        'Mes expériences couvrent à la fois la recherche et la production. Chez Sézane, j\'ai travaillé sur l\'estimation de l\'effet causal des actions CRM à partir de données observationnelles, un sujet au cœur de mon mémoire de Master. Chez House of Communication, j\'ai conçu des agents et outils MCP pour accélérer l\'adoption de l\'IA à l\'échelle d\'un groupe. Chez SPIDR, j\'ai développé un système de parsing de CVs par LLM et un moteur de matching sémantique.',
        'Ce qui m\'intéresse : les problèmes qui demandent à la fois rigueur statistique et profondeur technique, qu\'il s\'agisse de former un agent par renforcement image par image, de construire un pipeline RAG pour un cas d\'usage métier, ou d\'extraire un signal causal depuis des données sans groupe de contrôle.'
      ]
    },
    expertise: {
      title: 'Compétences',
      items: [
        {
          title: 'Deep Learning & IA Générative',
          icon: 'ml',
          skills: [
            'Réseaux de neurones : MLP, CNN, RNN, Transformers',
            'Apprentissage par renforcement : DQN, PPO, Dueling DQN',
            'Fine-tuning LLM, RAG, prompt engineering',
            'LangChain · OpenAI API · HuggingFace Transformers'
          ]
        },
        {
          title: 'Machine Learning, NLP & Inférence Causale',
          icon: 'code',
          skills: [
            'Classification, régression, clustering, XGBoost',
            'Uplift modeling, méta-learners (S/T/X/R/DR-Learner)',
            'Forêts causales, Double Machine Learning, score de propension',
            'EconML · CausalML · scikit-uplift · BERT · Word2Vec'
          ]
        },
        {
          title: 'Stack Engineering & Données',
          icon: 'data',
          skills: [
            'Python (avancé) · R · JavaScript · TypeScript',
            'PyTorch · Scikit-learn · FastAPI · Apache Spark · Docker',
            'PostgreSQL · MongoDB · MySQL · Neo4j · Supabase',
            'Pandas · NumPy · Matplotlib · Seaborn · Git · Linux'
          ]
        }
      ]
    },
    education: {
      title: 'Formation',
      timeline: [
        {
          date: '2024 – 2026',
          degree: 'Master Intelligence Artificielle, Systèmes et Données (IASD)',
          institution: 'Université Paris-Dauphine PSL · ENS · Mines Paris',
          description:
            'Master sélectif orienté recherche (48 ECTS). Cours fondamentaux : Fondements du ML, Optimisation pour le ML, Modèles de Langage, Deep Learning pour l\'Analyse d\'Images, Apprentissage par Renforcement, Data Science Lab, Acquisition et Stockage des Données. Cours au choix : Inférence Causale, Graphes et Analytique, Monte Carlo Search & Jeux, Graphes de Connaissance. Stage de recherche ou industriel obligatoire (avr.–sept. 2026).'
        },
        {
          date: '2023 – 2024',
          degree: 'Licence Informatique, Mathématiques pour la décision et les données',
          institution: 'Université Paris-Dauphine',
          description:
            'Fondements en algorithmique, probabilités, statistiques, bases de données et optimisation mathématique pour la prise de décision fondée sur les données.'
        },
        {
          date: '2022 – 2023',
          degree: 'Cycle Ingénieur, Électronique et Systèmes Robotisés',
          institution: 'Université Paris-Saclay',
          description:
            'Cursus ingénieur axé sur les systèmes embarqués, le traitement du signal, l\'électronique et les fondements de la robotique.'
        },
        {
          date: '2020 – 2022',
          degree: 'Classe Préparatoire Mathématiques & Physique-Chimie',
          institution: 'Lycée Paul Éluard · Saint-Denis',
          description:
            'Préparation intensive aux concours des grandes écoles d\'ingénieurs. Formation rigoureuse en analyse, algèbre, mécanique et thermodynamique.'
        }
      ]
    },
    experience: {
      title: 'Expérience',
      timeline: [
        {
          date: '2025 – présent',
          role: 'Data Scientist & Data Analyst, Alternance',
          company: 'SÉZANE · Paris',
          description:
            'Projet principal : estimation de l\'effet causal des actions CRM sur le comportement d\'achat à partir de données purement observationnelles, sujet du mémoire de Master. Conception de projets data de bout en bout, pipelines NLP pour l\'analyse de sentiment et le topic modeling, et production de rapports analytiques en lien direct avec les équipes métier.'
        },
        {
          date: 'Mai – août 2025',
          role: 'Développeur & Testeur d\'IA, Stage',
          company: 'IA Squad (House of Communication) · Neuilly-sur-Seine',
          description:
            'Participation à l\'accélération de l\'adoption de l\'IA au sein d\'un grand groupe de communication. Évaluation et benchmarking d\'outils d\'IA, développement d\'agents et de chatbots adaptés aux besoins internes, contribution au développement d\'un GPT interne via la conception d\'outils MCP. Mise en place d\'une bibliothèque de MCP Tools pour standardiser l\'intégration des solutions IA.'
        },
        {
          date: 'Mai – août 2024',
          role: 'Développeur ML, Stage',
          company: 'SPIDR · Argenteuil',
          description:
            'Développement d\'un système de parsing de CVs par LLM (FastAPI, Llama, GPT-4) convertissant des PDFs en JSON structuré. Contribution à un agent IA pour l\'automatisation du traitement des CVs. Conception d\'un moteur de matching sémantique CV/offres basé sur BERT, avec base de données de profils et d\'offres d\'emploi.'
        }
      ]
    },
    footer: {
      socialLinks: [
        { href: 'https://github.com/admhan', label: 'GitHub', icon: 'github' },
        { href: 'https://www.linkedin.com/in/adam-hannachi-43225a242/', label: 'LinkedIn', icon: 'linkedin' },
        { href: 'mailto:adam.hannachi@dauphine.eu', label: 'Email', icon: 'email' }
      ],
      copyright: '© 2026 Adam Hannachi. Tous droits réservés.'
    }
  },

  en: {
    hero: {
      name: 'Adam Hannachi',
      subtitle: 'Artificial Intelligence Engineer · Data Scientist · Machine Learning · Master IASD, Paris-Dauphine PSL',
      description:
        'Final-year student in the Master of Artificial Intelligence, Systems and Data (IASD) at Université Paris-Dauphine PSL. Solid foundations in statistics, machine learning, and deep learning, combined with hands-on experience through internships and an apprenticeship. Graduating September 2026, available from October 2026.',
      cvButtonLabel: 'Download CV',
      cvButtonHref: 'CV Adam Hananachi CDI-Tech.pdf',
      portfolioCtaLabel: 'View Projects',
      portfolioCtaHref: 'portfolio.html'
    },
    about: {
      title: 'About',
      image: 'photos/adhannachi.PNG',
      paragraphs: [
        'I\'m an Artificial Intelligence and Data Science engineer completing a Master\'s in Artificial Intelligence, Systems and Data (IASD) at Université Paris-Dauphine PSL, a selective program co-accredited with ENS and Mines Paris. My academic path started with a Classe Préparatoire (Maths & Physics) at Lycée Paul Éluard, continued through an engineering track at Université Paris-Saclay, then pivoted into a full AI specialization at Dauphine.',
        'My work bridges research depth and engineering rigor. At Sézane, I worked on estimating the causal effect of CRM actions from purely observational data, the core subject of my Master\'s thesis. At House of Communication, I designed AI agents and MCP tooling to accelerate AI adoption at scale. At SPIDR, I built an LLM-powered CV parsing system and a BERT-based semantic matching engine.',
        'I am particularly drawn to problems that sit at the intersection of statistical modeling and production engineering, whether that means training a deep RL agent pixel by pixel, architecting a RAG pipeline, or extracting causal signals from observational data without a control group.'
      ]
    },
    expertise: {
      title: 'Expertise',
      items: [
        {
          title: 'Deep Learning & Generative AI',
          icon: 'ml',
          skills: [
            'Neural Networks: MLP, CNN, RNN, Transformers',
            'Reinforcement Learning: DQN, PPO, Dueling DQN',
            'LLM Fine-tuning, RAG, Prompt Engineering',
            'LangChain · OpenAI API · HuggingFace Transformers'
          ]
        },
        {
          title: 'ML, NLP & Causal Inference',
          icon: 'code',
          skills: [
            'Classification, Regression, Clustering, XGBoost',
            'Uplift Modeling, Meta-learners (S/T/X/R/DR-Learner)',
            'Causal Forests, Double Machine Learning, Propensity Score',
            'EconML · CausalML · scikit-uplift · BERT · Word2Vec'
          ]
        },
        {
          title: 'Engineering & Data Stack',
          icon: 'data',
          skills: [
            'Python (Advanced) · R · JavaScript · TypeScript',
            'PyTorch · Scikit-learn · FastAPI · Apache Spark · Docker',
            'PostgreSQL · MongoDB · MySQL · Neo4j · Supabase',
            'Pandas · NumPy · Matplotlib · Seaborn · Git · Linux'
          ]
        }
      ]
    },
    education: {
      title: 'Education',
      timeline: [
        {
          date: '2024 – 2026',
          degree: 'Master in Artificial Intelligence, Systems and Data (IASD)',
          institution: 'Université Paris-Dauphine PSL · ENS · Mines Paris',
          description:
            'Selective research-oriented Master (48 ECTS). Core courses: Foundations of ML, Optimization for ML, Large Language Models, Deep Learning for Image Analysis, Reinforcement Learning, Data Science Lab, Data Acquisition & Storage. Electives include Causal Inference, Graph Analytics, Monte Carlo Search & Games, Knowledge Graphs. Mandatory 5-month research or industry thesis (Apr–Sep 2026).'
        },
        {
          date: '2023 – 2024',
          degree: 'Bachelor in Computer Science, Mathematics for Decision and Data',
          institution: 'Université Paris-Dauphine',
          description:
            'Foundation in algorithms, probability, statistics, database systems, and mathematical optimization for data-driven decision making.'
        },
        {
          date: '2022 – 2023',
          degree: 'Engineering Track, Electronics and Robotics Systems',
          institution: 'Université Paris-Saclay',
          description:
            'Engineering curriculum focused on embedded systems, signal processing, electronics, and robotics fundamentals.'
        },
        {
          date: '2020 – 2022',
          degree: 'Classe Préparatoire, Mathematics & Physics-Chemistry',
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
          role: 'Data Scientist / Data Analyst, Alternance',
          company: 'SÉZANE · Paris',
          description:
            'Main project: estimating the causal effect of CRM actions on purchasing behavior from purely observational data, the core subject of my Master\'s thesis. Building end-to-end data projects, NLP pipelines for sentiment analysis and topic modeling, and producing actionable analytical reports in close collaboration with business teams.'
        },
        {
          date: 'May – Aug 2025',
          role: 'AI Developer & Tester, Internship',
          company: 'IA Squad (House of Communication) · Neuilly-sur-Seine',
          description:
            'Contributed to accelerating AI adoption across a major European communications group. Evaluated and benchmarked AI tools, developed agents and chatbots tailored to internal business needs, and contributed to an internal GPT via MCP tool design. Architected a reusable MCP Tools library to standardize AI solution integration across teams.'
        },
        {
          date: 'May – Aug 2024',
          role: 'ML Developer, Internship',
          company: 'SPIDR · Argenteuil',
          description:
            'Built a FastAPI-based CV parsing system converting PDF resumes to structured JSON using LLM prompt engineering (Llama, GPT-4). Contributed to an AI agent for automated CV management. Designed a BERT-powered semantic matching engine to score CV–job offer compatibility, backed by a custom database of profiles and postings.'
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
  }

};
