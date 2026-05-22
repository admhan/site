// Données portfolio : liste des projets + projet mis en avant.
// Ajouter un objet dans `projects` suffit pour l'afficher automatiquement.
// ctaHref présent → bouton-lien GitHub/rapport. Absent → pas de bouton affiché.
export const projectsPageData = {
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
        'Master IASD course project (Deep Learning): designing compact neural networks (≤ 100k parameters) to play the game of Go. Models compete against each other in a tournament setting. Explored ResNet-based encoders and attention-hybrid architectures to maximize board evaluation strength under a strict parameter budget — a constrained design challenge inspired by AlphaGo.',
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
        'FastAPI system that converts PDF resumes into structured JSON via LLM prompt engineering (Llama, GPT-4). Includes a BERT-powered semantic matching engine that scores CV–job offer compatibility using vector similarity, backed by a custom database of candidate profiles and job postings.',
      tags: ['FastAPI', 'LLM', 'BERT', 'Prompt Engineering', 'Python'],
      image: '',
      ctaLabel: '',
      ctaHref: ''
    },
    {
      title: 'Master\'s Thesis — Uplift Modeling & CRM Targeting in E-commerce',
      description:
        'Research conducted during the Master IASD alternance at Sézane. Applies causal inference to estimate the incremental effect of CRM actions on purchasing behavior from purely observational data (no systematic control group). Covers the potential outcomes framework, meta-learners (S/T/X-Learner, R-Learner, DR-Learner), Causal Forests, Double Machine Learning, and propensity score adjustment. Evaluated with Qini curves, AUUC, and doubly-robust metrics using EconML and CausalML. Supervised by Paris-Dauphine PSL and Sézane. Work in progress — thesis defense September 2026.',
      tags: ['Causal Inference', 'Uplift Modeling', 'DML', 'Causal Forests', 'EconML', 'CausalML'],
      image: '',
      ctaLabel: '',
      ctaHref: ''
    },
    {
      title: 'Deep Learning for Image Analysis — Lab Series',
      description:
        'Seven practical sessions for the "Deep Learning for Image Analysis" course at Dauphine Master IASD: CNN architectures, transfer learning (ResNet, VGG), Vision Transformers (ViT), and auto-encoders. Covers implementation, benchmarking, and performance analysis across image classification and segmentation tasks.',
      tags: ['CNN', 'Transfer Learning', 'Vision Transformer', 'PyTorch', 'Computer Vision'],
      image: '',
      ctaLabel: 'View on GitHub',
      ctaHref: 'https://github.com/admhan/Deep-Learning-For-Image-Analysis-Lab'
    },
    {
      title: 'World Cup Knowledge Graph — Neo4j',
      description:
        'Graph database project modeling the FIFA World Cup as a Neo4j knowledge graph. Covers tournaments, matches, teams, and player data. Explores graph queries, relationship traversal, and analytical patterns enabled by a graph data model over historical World Cup datasets.',
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
      'Production-grade RL codebase for pixel-based autonomous driving on the Gymnasium CarRacing-v3 environment — covering five algorithms, modular architecture, and full reproducibility.',
    longDescription:
      'Course project for the "Reinforcement Learning" module at Dauphine Master IASD. The suite implements Random, DQN, Double DQN, Dueling DQN, and PPO agents operating on 96×96 RGB pixel observations. All value-based methods work on a discretized action space; PPO uses native continuous actions. A shared CNN encoder (Nature-CNN) processes grayscale, frame-stacked, normalized observations. Training is fully config-driven via YAML for reproducibility, with TensorBoard logging, periodic checkpointing, and automatic GPU/CPU device selection.',
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
    title: "Let's build intelligent systems.",
    description:
      "Open to full-time ML/AI Engineer and Data Scientist positions from October 2026. Always interested in challenging problems at the intersection of research and production.",
    buttonLabel: 'Get in Touch',
    buttonHref: 'mailto:adam.hannachi@dauphine.eu'
  },
  footer: {
    copyright: '© 2026 Adam Hannachi. All rights reserved.'
  }
};
