export const profile = {
  name: 'Carld Similien',
  tagline: 'Développeur · Cloud & DevOps',
  location: 'Stains, Île-de-France',
  // email encodé en base64 : évite que le texte brut soit dans le HTML statique
  // (anti-scraping bots à spam). Décodé côté client uniquement, voir app/contact/page.jsx
  emailEncoded: 'Y2FybGQuc2ltaWxpZW5AZ21haWwuY29t',
  github: 'https://github.com/sheene123',
  linkedin: 'https://www.linkedin.com/in/carld-similien-176439297/',
  about:
    "Étudiant en BUT Informatique à Sorbonne Paris Nord et futur élève-ingénieur en Cloud Computing & Cybersécurité à l'ESILV (Paris La Défense), je travaille aujourd'hui comme alternant Développeur & Automatisation chez Framatome. Mon terrain de jeu : transformer des processus manuels en pipelines automatisés, fiabiliser la donnée et la rendre actionnable — de l'extraction jusqu'au dashboard.",
};

export const skills = [
  { icon: '🐍', name: 'Python', detail: 'Pandas, scripts, automatisation, APIs' },
  { icon: '🗄️', name: 'SQL & bases de données', detail: 'MySQL, PostgreSQL, MongoDB, Access' },
  { icon: '📊', name: 'Power BI & dataviz', detail: 'KPI, dashboards décisionnels, Power Query' },
  { icon: '🤖', name: 'Machine Learning', detail: 'TensorFlow, Keras, CNN, RNN, NLP' },
  { icon: '☁️', name: 'Cloud', detail: 'GCP, Azure (AKS), FinOps, multi-cloud' },
  { icon: '🐳', name: 'Docker & DevOps', detail: 'Docker, Kubernetes, Jenkins, Ansible, GitHub Actions' },
  { icon: '🚀', name: 'CI/CD & déploiement', detail: 'Pipelines GitHub Actions/Jenkins, mise en production, monitoring' },
  { icon: '🔌', name: 'REST API', detail: 'Intégration, requêtage, Flask' },
  { icon: '⚙️', name: 'Automatisation', detail: 'Power Automate, Power Apps, VBA, Bash' },
];

export const experiences = [
  {
    id: 'framatome',
    type: 'Alternance',
    role: 'Développeur PowerApps/JavaScript & Automatisation',
    org: 'Framatome',
    place: 'Paris La Défense',
    period: '2025 — 2026',
    missions: [
      "Évolution et optimisation d'une application métier sous Power Apps.",
      "Réalisation d'une démo de migration d'une appli PowerApps vers une stack moderne (Next.js / Node.js / FastAPI interrogeant DataVerse), pensée comme modèle pour de futures migrations.",
      'Conteneurisation (Docker) et déploiement sur des clusters Kubernetes Azure (AKS) — toute la chaîne de production.',
      'Mise en production via chaîne CI/CD, monitoring et maintenance des services en exploitation.',
      'Optimisation de la consommation des clusters et des coûts cloud (FinOps).',
      'Automatisation de la collecte et du traitement de données (Python, Power Automate) alimentant des dashboards Power BI décisionnels.',
      'Analyse de données et création de KPI, documentation technique et collaboration avec les utilisateurs.',
    ],
    stack: ['Power Apps', 'JavaScript', 'Next.js', 'FastAPI', 'Python', 'Docker', 'Kubernetes', 'Azure AKS', 'CI/CD', 'FinOps', 'Power BI', 'Power Automate'],
  },
  {
    id: 'edf',
    type: 'Stage',
    role: "Développement d'une application d'automatisation",
    org: 'EDF R&D',
    place: 'Lab les Renardières',
    period: '2025',
    missions: [
      "Développement d'un outil VBA automatisant la rédaction de rapports d'essais.",
      "Développement et optimisation d'une base de données Access.",
      "Recueil des besoins auprès des ingénieurs et techniciens de laboratoire.",
      "Intégration d'une API REST interne et de requêtes SQL.",
      "Phase de test et déploiement dans le laboratoire d'essais.",
    ],
    stack: ['VBA', 'Access', 'SQL', 'API REST'],
  },
];

export const education = [
  { degree: "Diplôme d'ingénieur — Cloud computing & cybersécurité", school: 'ESILV — Paris La Défense', period: '2026 — 2029' },
  { degree: 'BUT Informatique', school: 'Université Sorbonne Paris Nord — Villetaneuse', period: '2023 — 2026' },
  { degree: 'Baccalauréat STI2D', school: 'Lycée Simone de Beauvoir — Garges-lès-Gonesse', period: '2023' },
];

export const projects = [
  {
    slug: 'cloud-kubernetes-finops',
    title: 'Migration cloud-native : de PowerApps à Kubernetes',
    year: '2025 — 2026',
    category: 'DevOps',
    short: "Démo de migration d'une appli interne PowerApps vers une stack moderne (Next.js / FastAPI), conteneurisée et déployée sur Kubernetes (Azure AKS).",
    context:
      "Au départ, une application métier interne tournait sous PowerApps, et on voulait voir concrètement à quoi ressemblerait sa migration vers des technologies plus modernes et mieux maîtrisées. J'ai donc construit une démonstration de bout en bout : une application Next.js / Node.js / FastAPI qui reprend les mêmes usages, conteneurisée avec Docker et déployée sur un cluster Kubernetes managé Azure (AKS). L'objectif va au-delà de cette appli — elle sert de modèle réutilisable, un exemple concret pour migrer plus tard d'autres applications PowerApps vers des stacks plus durables, avec toute la chaîne de production qui va avec (CI/CD, monitoring, maîtrise des coûts).",
    missions: [
      "Reproduire les fonctionnalités d'une application PowerApps existante avec une stack moderne (Next.js / Node.js / FastAPI).",
      "Conteneuriser l'application avec Docker et la déployer sur un cluster Kubernetes managé Azure (AKS).",
      "Mettre en place la chaîne CI/CD jusqu'à la mise en production, avec monitoring.",
      'Optimiser la consommation et les coûts du cluster (FinOps).',
      'Documenter le tout pour en faire un modèle réutilisable pour de futures migrations.',
    ],
    stack: ['Next.js', 'FastAPI', 'Docker', 'Kubernetes', 'Azure AKS', 'CI/CD', 'FinOps'],
  },
  {
    slug: 'sentiment-chatbot',
    title: 'Sentiment Chatbot',
    year: '2026',
    category: 'IA',
    short: "API Flask servant un RNN TensorFlow d'analyse de sentiment, entraîné sur des critiques de films.",
    context:
      "Projet IA (S6) : construire un système complet d'analyse de sentiment — du prétraitement du texte jusqu'au service web. Le modèle (embeddings + double SimpleRNN) est entraîné sur un corpus de critiques, sauvegardé puis servi via une API Flask.",
    missions: [
      'Prétraitement et tokenisation du corpus texte (pad_sequences, vocabulaire 10 000 mots).',
      "Conception d'un RNN avec TensorFlow & Keras (Embedding + SimpleRNN empilés).",
      "Entraînement, sauvegarde des poids et rechargement du modèle.",
      "Exposition du modèle via une API Flask (endpoint de prédiction JSON).",
      'Interface de test avec Streamlit.',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Streamlit', 'NLP'],
  },
  {
    slug: 'llm-ollama',
    title: 'Agents LLM en local & via API',
    year: '2026',
    category: 'IA',
    short: 'Mise en œuvre de LLMs locaux (Ollama) et distants (OpenRouter) dans des pipelines Python.',
    context:
      "Projet SAE : explorer l'intégration de grands modèles de langage dans des applications — exécution locale avec Ollama (Llama 3, Mistral, Phi-3) et appels d'API via OpenRouter, avec gestion des prompts et des réponses JSON.",
    missions: [
      'Installation et exécution de modèles open source en local avec Ollama.',
      "Intégration de l'API OpenRouter (requêtes REST, authentification, parsing JSON).",
      'Comparaison de modèles (Llama 3, Mistral, Phi-3) sur des cas concrets.',
      'Construction de pipelines de prompts en Python.',
    ],
    stack: ['Python', 'Ollama', 'OpenRouter', 'LLM', 'REST API'],
  },
  {
    slug: 'reconnaissance-faciale',
    title: 'Reconnaissance faciale sur mobile',
    year: '2025 — 2026',
    category: 'IA',
    short: 'CNN entraîné from scratch (TensorFlow), comparé à MobileNet, embarqué dans une app Android en Kotlin.',
    context:
      "Projet universitaire de groupe (deep learning + mobile) mené sur plusieurs mois : entraîner un modèle de reconnaissance faciale sur le dataset UTKFace, puis l'embarquer dans une application Android utilisable en conditions réelles. Deux approches comparées — un CNN développé from scratch et le modèle pré-entraîné MobileNet — pour évaluer le compromis précision / légèreté sur mobile.",
    missions: [
      'Prétraitement du dataset UTKFace (Computer Vision).',
      "Développement et entraînement d'un CNN avec TensorFlow & Keras.",
      'Comparaison du modèle from scratch avec MobileNet.',
      "Intégration du modèle dans une application mobile Kotlin.",
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'Kotlin', 'Android'],
  },
  {
    slug: 'trading-cloud',
    title: 'Trading automatisé sur GCP',
    year: '2024',
    category: 'Cloud',
    short: "Scripts Python d'achats d'actions automatisés via l'API Interactive Brokers, planifiés sur GCP.",
    context:
      "Projet personnel : automatiser entièrement une stratégie d'achat d'actions — de l'appel d'API jusqu'à l'exécution planifiée dans le cloud (GCP), avec une vraie phase de test avant mise en production. Les scripts Python sont déclenchés automatiquement par des services système sous Linux.",
    missions: [
      "Scripts Python d'automatisation d'achats d'actions.",
      "Intégration de l'API Interactive Brokers.",
      'Exécution cloud sur Google Cloud Platform.',
      "Services systèmes Linux pour l'exécution planifiée.",
      'Phase de test puis mise en production.',
    ],
    stack: ['Python', 'GCP', 'API REST', 'Linux'],
  },
  {
    slug: 'gestion-stages',
    title: 'Application de gestion de stages',
    year: '2024 — 2025',
    category: 'Web',
    short: 'Site web complet livré à un client, mené en méthode agile SCRUM, sécurisé avec Bcrypt.',
    context:
      "Projet universitaire encadré par un professeur jouant le rôle du client : concevoir et livrer une application web de gestion des stages de bout en bout, du recueil des besoins jusqu'à la livraison, en méthode agile SCRUM. Accent mis sur la sécurité (hachage Bcrypt des mots de passe) et la modélisation de la base de données.",
    missions: [
      'Recueil des besoins et formalisation du cahier des charges.',
      'Gestion de projet en méthode agile SCRUM.',
      'Conception du site web et de la base de données.',
      'Sécurisation des mots de passe par hachage Bcrypt.',
    ],
    stack: ['PHP', 'SQL', 'Web', 'SCRUM', 'Bcrypt'],
  },
  {
    slug: 'churchfinder',
    title: 'ChurchFinder',
    year: '2026',
    category: 'Web',
    short: "Projet d'application mobile de géolocalisation et de découverte de lieux (en cours).",
    context:
      "Projet personnel en cours de développement : une application mobile pour trouver des lieux autour de soi, avec recherche et géolocalisation.",
    missions: [
      "Conception de l'application mobile.",
      'Développement en cours.',
    ],
    stack: ['Mobile', 'En cours'],
  },
  {
    slug: 'voyage-assistant',
    title: 'Voyage Assistant — Chatbot RAG',
    year: '2026',
    category: 'IA',
    github: 'https://github.com/optmlako2004/chatbot',
    demo: 'https://optimalako-voyage-assistant.hf.space',
    short: "Chatbot d'agence de voyage avec RAG, authentification, réservation de billets et déploiement Docker sur Hugging Face Spaces.",
    context:
      "Projet universitaire (SAE BUT3) : concevoir de A à Z un assistant virtuel pour une agence de voyage. Le chatbot répond aux questions sur les trajets grâce à un pipeline RAG (retrieval-augmented generation) combinant une base Postgres Neon (~182 000 routes) et deux modèles ML (gte-small + reranker). L'application complète — backend FastAPI, frontend statique et modèles — tourne dans un seul conteneur Docker déployé sur Hugging Face Spaces (16 Go de RAM gratuits).",
    missions: [
      'Mise en place du pipeline RAG : embeddings gte-small + reranker cross-encoder pour la recherche sémantique sur les trajets.',
      'Développement du backend FastAPI : routes /chat, /billets, /auth, documentation OpenAPI.',
      'Conception du frontend en JavaScript natif (fetch API) servi statiquement par FastAPI.',
      'Persistance des données (users, billets, sessions chat) sur Postgres Neon via psycopg 3.',
      'Conteneurisation Docker et déploiement sur Hugging Face Spaces (Docker runtime).',
      'Authentification utilisateur avec sessions et intégration Google OAuth.',
    ],
    stack: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'Docker', 'Hugging Face Spaces', 'JavaScript', 'NLP'],
  },
];
