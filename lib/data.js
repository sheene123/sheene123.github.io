export const profile = {
  name: 'Carld Similien',
  tagline: 'Data Analyst & Automation Engineer',
  location: 'Stains, Île-de-France',
  // email encodé en base64 : évite que le texte brut soit dans le HTML statique
  // (anti-scraping bots à spam). Décodé côté client uniquement, voir app/contact/page.jsx
  emailEncoded: 'Y2FybGQuc2ltaWxpZW5AZ21haWwuY29t',
  github: 'https://github.com/sheene123',
  linkedin: 'https://www.linkedin.com/in/carld-similien-176439297/',
  about:
    "Étudiant en BUT Informatique à Sorbonne Paris Nord et futur étudiant du Master Data Science (ISD) à Paris-Saclay, je travaille aujourd'hui comme alternant Data Analyst & Automation chez Framatome. Mon terrain de jeu : transformer des processus manuels en pipelines automatisés, fiabiliser la donnée et la rendre actionnable — de l'extraction jusqu'au dashboard.",
};

export const skills = [
  { icon: '🐍', name: 'Python', detail: 'Pandas, scripts, automatisation, APIs' },
  { icon: '🗄️', name: 'SQL & bases de données', detail: 'MySQL, PostgreSQL, MongoDB, Access' },
  { icon: '📊', name: 'Power BI & dataviz', detail: 'KPI, dashboards décisionnels, Power Query' },
  { icon: '🤖', name: 'Machine Learning', detail: 'TensorFlow, Keras, CNN, RNN, NLP' },
  { icon: '☁️', name: 'Cloud', detail: 'GCP, Azure (AKS), déploiements' },
  { icon: '🐳', name: 'Docker & DevOps', detail: 'Docker, Kubernetes, Jenkins, Ansible, Git' },
  { icon: '🔌', name: 'REST API', detail: 'Intégration, requêtage, Flask' },
  { icon: '⚙️', name: 'Automatisation', detail: 'Power Automate, Power Apps, VBA, Bash' },
];

export const experiences = [
  {
    id: 'framatome',
    type: 'Alternance',
    role: 'Data Analyst & Automation',
    org: 'Framatome',
    place: 'Paris La Défense',
    period: '2025 — 2026',
    missions: [
      'Analyse de données et création de KPI pour améliorer la qualité des données.',
      'Automatisation de la collecte et du traitement de données (Python, Power Automate) alimentant des dashboards Power BI décisionnels.',
      "Évolution et optimisation d'une application métier sous Power Apps.",
      'Déploiement de clusters Kubernetes sur Microsoft Azure (AKS).',
      'Documentation technique, mises en production et monitoring des flux automatisés.',
    ],
    stack: ['Python', 'Power BI', 'Power Automate', 'Power Apps', 'Azure', 'Kubernetes'],
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
  { degree: 'Master Data Science (ISD)', school: 'Université Paris-Saclay', period: '2026 — 2028' },
  { degree: 'BUT Informatique', school: 'Université Sorbonne Paris Nord — Villetaneuse', period: '2023 — 2026' },
  { degree: 'Baccalauréat STI2D', school: 'Lycée Simone de Beauvoir — Garges-lès-Gonesse', period: '2023' },
];

export const projects = [
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
      "Projet universitaire de groupe mêlant deep learning et mobile : entraîner un modèle de reconnaissance faciale sur le dataset UTKFace et l'intégrer dans une application Android utilisable en conditions réelles.",
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
      "Projet personnel : automatiser entièrement une stratégie d'achat d'actions — de l'appel d'API à l'exécution planifiée dans le cloud, avec une vraie phase de test avant mise en production.",
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
      "Projet universitaire avec un professeur dans le rôle du client : concevoir et livrer une application web de gestion des stages, du recueil des besoins jusqu'à la livraison.",
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
];
