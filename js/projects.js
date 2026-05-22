// Données bilingues du portfolio.
// ctaHref présent → lien GitHub cliquable. Absent → pas de bouton.
export const projectsPageData = {

  fr: {
    hero: {
      backLinkHref: 'index.html',
      backLinkLabel: 'Retour au CV',
      title: 'Projets Sélectionnés',
      subtitle: 'Deep Learning · Apprentissage par Renforcement · NLP · Ingénierie des Données'
    },
    projects: [
      {
        title: 'Réseaux de Neurones pour le Go — Défi Architecture Contrainte',
        description:
          'Projet de cours du Master IASD (Deep Learning) réalisé en binôme : conception de réseaux de neurones compacts, limités à 100 000 paramètres, pour jouer au Go. Les modèles s\'affrontent dans un tournoi interne. Expérimentation avec des architectures ResNet et des modèles hybrides à mécanismes d\'attention pour maximiser la force de jeu sous contrainte de taille, dans un esprit AlphaGo.',
        tags: ['PyTorch', 'ResNet', 'Mécanisme d\'attention', 'IA de jeux', 'Architecture neuronale'],
        image: '',
        ctaLabel: 'Voir sur GitHub',
        ctaHref: 'https://github.com/admhan/DeepLearning_GO'
      },
      {
        title: 'Composantes Connexes à Grande Échelle — Apache Spark',
        description:
          'Implémentation et étude de scalabilité de l\'algorithme CCF (Connected Component Finder) avec l\'API RDD d\'Apache Spark, d\'après l\'article "Fast and Scalable Connected Component Computation in MapReduce". Comparaison d\'une version de base et d\'une version optimisée par mise en cache sur des graphes de taille variable.',
        tags: ['Apache Spark', 'PySpark', 'Algorithmes de Graphes', 'Big Data', 'RDD'],
        image: '',
        ctaLabel: 'Voir sur GitHub',
        ctaHref: 'https://github.com/admhan/connected-components-spark'
      },
      {
        title: 'Parsing de CVs & Matching Sémantique',
        description:
          'Système développé en stage chez SPIDR : une API FastAPI convertit des PDFs en JSON structuré par prompt engineering LLM (Llama, GPT-4). Inclut un agent IA pour la gestion automatisée des CVs et un moteur de matching sémantique basé sur BERT pour scorer la compatibilité entre profils et offres d\'emploi.',
        tags: ['FastAPI', 'LLM', 'BERT', 'Prompt Engineering', 'Python'],
        image: '',
        ctaLabel: '',
        ctaHref: ''
      },
      {
        title: 'Mémoire de Master — Uplift Modeling & Ciblage CRM en E-commerce',
        description:
          'Recherche menée en alternance chez Sézane dans le cadre du Master IASD. Estimation de l\'effet causal des actions CRM sur le comportement d\'achat à partir de données purement observationnelles, sans groupe de contrôle. Cadre : résultats potentiels, méta-learners (S/T/X-Learner, R-Learner, DR-Learner), forêts causales, Double Machine Learning, score de propension. Évaluation avec EconML et CausalML. Soutenance prévue en septembre 2026.',
        tags: ['Inférence Causale', 'Uplift Modeling', 'Double ML', 'Forêts Causales', 'EconML', 'CausalML'],
        image: '',
        ctaLabel: '',
        ctaHref: ''
      },
      {
        title: 'Deep Learning pour l\'Analyse d\'Images — Travaux Pratiques',
        description:
          'Sept séances de travaux pratiques pour le cours "Deep Learning for Image Analysis" du Master IASD : architectures CNN, transfer learning (ResNet, VGG), Vision Transformers (ViT) et auto-encodeurs. Implémentation, benchmarking et analyse comparative sur des tâches de classification et de segmentation d\'images.',
        tags: ['CNN', 'Transfer Learning', 'Vision Transformer', 'PyTorch', 'Vision par Ordinateur'],
        image: '',
        ctaLabel: 'Voir sur GitHub',
        ctaHref: 'https://github.com/admhan/Deep-Learning-For-Image-Analysis-Lab'
      },
      {
        title: 'Base de Données Graphe sur la Coupe du Monde — Neo4j',
        description:
          'Modélisation de la Coupe du Monde FIFA sous forme de graphe de connaissance Neo4j. Les entités (éditions, matchs, équipes, joueurs) sont reliées par des relations interrogeables en Cypher. Exploration des patterns analytiques propres aux bases de données graphes sur données historiques réelles.',
        tags: ['Neo4j', 'Base de Données Graphe', 'Cypher', 'Modélisation de Données'],
        image: '',
        ctaLabel: 'Voir sur GitHub',
        ctaHref: 'https://github.com/admhan/worldcup-neo4j'
      }
    ],
    featured: {
      sectionTitle: 'Projet Mis en Avant',
      number: '01',
      title: 'Agent d\'Apprentissage par Renforcement — CarRacing',
      description:
        'Projet de cours (Apprentissage par Renforcement, Master IASD). Une suite RL modulaire pour l\'environnement CarRacing-v3 de Gymnasium, couvrant cinq algorithmes, une architecture propre et une reproductibilité complète.',
      longDescription:
        'La suite implémente des agents Random, DQN, Double DQN, Dueling DQN et PPO opérant sur des observations visuelles 96x96 pixels. Les méthodes par valeur utilisent un espace d\'action discrétisé ; PPO utilise les actions continues natives. Un encodeur CNN partagé (architecture Nature-CNN) traite les observations : conversion en niveaux de gris, redimensionnement, empilement de frames et normalisation. L\'entraînement est piloté par des fichiers YAML pour la reproductibilité, avec journalisation TensorBoard, sauvegarde périodique des checkpoints et sélection automatique GPU/CPU.',
      metrics: [
        { value: '5', label: 'Algorithmes RL' },
        { value: '96×96', label: 'Observations pixel' },
        { value: 'CNN', label: 'Encodeur visuel' },
        { value: 'YAML', label: 'Config reproductible' }
      ],
      techStackLabel: 'Stack technique',
      techTags: ['PyTorch', 'Gymnasium', 'DQN / PPO', 'CNN', 'TensorBoard', 'Python'],
      ctaLabel: 'Voir sur GitHub',
      ctaHref: 'https://github.com/admhan/RL_car_racing'
    },
    cta: {
      title: 'Construisons des systèmes intelligents.',
      description:
        'Disponible pour des postes en CDI dans l\'IA, la Data Science ou l\'ingénierie ML à partir d\'octobre 2026. Toujours intéressé par les problèmes à la frontière de la recherche et de la production.',
      buttonLabel: 'Me contacter',
      buttonHref: 'mailto:adam.hannachi@dauphine.eu'
    },
    footer: {
      copyright: '© 2026 Adam Hannachi. Tous droits réservés.'
    }
  },

  en: {
    hero: {
      backLinkHref: 'index.html',
      backLinkLabel: 'Back to CV',
      title: 'Selected Projects',
      subtitle: 'Deep Learning · Reinforcement Learning · NLP · Data Engineering'
    },
    projects: [
      {
        title: 'Go-Playing Neural Networks — Constrained Architecture Challenge',
        description:
          'Master IASD course project (Deep Learning), done in pair: designing compact neural networks (at most 100k parameters) to play the game of Go. Models compete against each other in a tournament. Experiments with ResNet encoders and attention-hybrid architectures to maximize board evaluation strength under a strict parameter budget, inspired by AlphaGo.',
        tags: ['PyTorch', 'ResNet', 'Attention Hybrid', 'Game AI', 'Neural Architecture'],
        image: '',
        ctaLabel: 'View on GitHub',
        ctaHref: 'https://github.com/admhan/DeepLearning_GO'
      },
      {
        title: 'Connected Components at Scale — Apache Spark',
        description:
          'Implementation and scalability evaluation of the Connected Component Finder (CCF) algorithm using Apache Spark RDD API, based on the paper "Fast and Scalable Connected Component Computation in MapReduce". Comparative study of a basic vs. cache-optimized variant across small, medium, and large graph datasets.',
        tags: ['Apache Spark', 'PySpark', 'Graph Algorithms', 'Big Data', 'RDD'],
        image: '',
        ctaLabel: 'View on GitHub',
        ctaHref: 'https://github.com/admhan/connected-components-spark'
      },
      {
        title: 'CV Parsing API & Semantic Job Matching',
        description:
          'FastAPI system that converts PDF resumes into structured JSON via LLM prompt engineering (Llama, GPT-4). Includes an AI agent for automated CV management and a BERT-powered semantic matching engine that scores CV–job offer compatibility, backed by a custom database of candidate profiles and job postings.',
        tags: ['FastAPI', 'LLM', 'BERT', 'Prompt Engineering', 'Python'],
        image: '',
        ctaLabel: '',
        ctaHref: ''
      },
      {
        title: 'Master\'s Thesis — Uplift Modeling & CRM Targeting in E-commerce',
        description:
          'Research conducted during the Master IASD alternance at Sézane. Applies causal inference to estimate the incremental effect of CRM actions on purchasing behavior from purely observational data, without a systematic control group. Covers meta-learners (S/T/X-Learner, R-Learner, DR-Learner), Causal Forests, Double Machine Learning, and propensity score adjustment. Evaluated with EconML and CausalML. Thesis defense September 2026.',
        tags: ['Causal Inference', 'Uplift Modeling', 'DML', 'Causal Forests', 'EconML', 'CausalML'],
        image: '',
        ctaLabel: '',
        ctaHref: ''
      },
      {
        title: 'Deep Learning for Image Analysis — Lab Series',
        description:
          'Seven practical sessions for the "Deep Learning for Image Analysis" course at Dauphine Master IASD: CNN architectures, transfer learning (ResNet, VGG), Vision Transformers (ViT), and auto-encoders. Implementation, benchmarking, and comparative analysis across image classification and segmentation tasks.',
        tags: ['CNN', 'Transfer Learning', 'Vision Transformer', 'PyTorch', 'Computer Vision'],
        image: '',
        ctaLabel: 'View on GitHub',
        ctaHref: 'https://github.com/admhan/Deep-Learning-For-Image-Analysis-Lab'
      },
      {
        title: 'World Cup Knowledge Graph — Neo4j',
        description:
          'Graph database project modeling the FIFA World Cup as a Neo4j knowledge graph. Entities (tournaments, matches, teams, players) are connected by directly queryable relationships in Cypher. Explores graph-native analytical patterns on real historical datasets.',
        tags: ['Neo4j', 'Graph Database', 'Cypher', 'Data Modeling'],
        image: '',
        ctaLabel: 'View on GitHub',
        ctaHref: 'https://github.com/admhan/worldcup-neo4j'
      }
    ],
    featured: {
      sectionTitle: 'Featured Project',
      number: '01',
      title: 'Reinforcement Learning Car Racing Agent',
      description:
        'Course project (Reinforcement Learning, Master IASD). A production-grade RL codebase for pixel-based autonomous driving on the Gymnasium CarRacing-v3 environment, covering five algorithms, modular architecture, and full reproducibility.',
      longDescription:
        'The suite implements Random, DQN, Double DQN, Dueling DQN, and PPO agents operating on 96x96 RGB pixel observations. All value-based methods work on a discretized action space; PPO uses native continuous actions. A shared CNN encoder (Nature-CNN architecture) processes grayscale, resized, frame-stacked, and normalized observations. Training is fully config-driven via YAML files for reproducibility, with TensorBoard logging, periodic checkpointing, and automatic GPU/CPU device selection.',
      metrics: [
        { value: '5', label: 'RL Algorithms' },
        { value: '96×96', label: 'Pixel Observations' },
        { value: 'CNN', label: 'Visual Encoder' },
        { value: 'YAML', label: 'Config-Driven' }
      ],
      techStackLabel: 'Tech Stack',
      techTags: ['PyTorch', 'Gymnasium', 'DQN / PPO', 'CNN', 'TensorBoard', 'Python'],
      ctaLabel: 'View on GitHub',
      ctaHref: 'https://github.com/admhan/RL_car_racing'
    },
    cta: {
      title: 'Let\'s build intelligent systems.',
      description:
        'Open to full-time ML/AI Engineer and Data Scientist positions from October 2026. Always interested in challenging problems at the intersection of research and production.',
      buttonLabel: 'Get in Touch',
      buttonHref: 'mailto:adam.hannachi@dauphine.eu'
    },
    footer: {
      copyright: '© 2026 Adam Hannachi. All rights reserved.'
    }
  }

};
