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
    "Je termine un BUT Informatique à Sorbonne Paris Nord et j'entre en septembre 2026 en cycle ingénieur Cloud Computing & Cybersécurité à l'ESILV. En parallèle je suis alternant développeur et automatisation chez Framatome, sur un site classé OIV : j'y déploie des clusters Kubernetes sur Azure, je maintiens la chaîne de supervision et j'automatise des traitements de données en Python. Avant ça, un stage à EDF R&D où j'ai livré un outil VBA utilisé au quotidien par une trentaine de personnes. Ce qui m'intéresse aujourd'hui, c'est faire tourner des applications en production et automatiser ce qui peut l'être.",
};

export const skills = [
  { icon: '🐍', name: 'Python', detail: "Automatisation, Pandas, FastAPI, scripts d'exploitation" },
  { icon: '☁️', name: 'Azure & GCP', detail: 'AKS, Azure AD, Compute Engine, FinOps' },
  { icon: '🐳', name: 'Docker & Kubernetes', detail: 'Conteneurisation, Services, Ingress, Network Policies' },
  { icon: '🏗️', name: 'Infrastructure as code', detail: 'Terraform (état distant GitLab), Ansible' },
  { icon: '🚀', name: 'CI/CD', detail: 'GitHub Actions, Jenkins, GitLab CI, mise en production' },
  { icon: '📈', name: 'Observabilité', detail: 'Prometheus, Grafana, PromQL, instrumentation FastAPI' },
  { icon: '🔒', name: 'Sécurité', detail: 'Azure AD / IAM, OAuth/JWT, OWASP Top 10, durcissement SSH' },
  { icon: '🌐', name: 'Réseaux', detail: "TCP/IP, DNS, TLS, proxy d'entreprise, pare-feu VPC et NSG" },
  { icon: '🗄️', name: 'Bases de données', detail: 'SQL, PostgreSQL, MySQL, MongoDB, Access, Dataverse' },
  { icon: '⚙️', name: 'Automatisation métier', detail: 'Power Automate, Power Apps, VBA, Bash' },
  { icon: '📊', name: 'Power BI & dataviz', detail: 'KPI, Power Query, tableaux de bord décisionnels' },
  { icon: '💻', name: 'Développement web', detail: 'Next.js, React, Node.js, Spring Boot, PHP' },
  { icon: '🤖', name: 'Machine learning', detail: 'TensorFlow, Keras, CNN, RAG, NLP' },
  { icon: '📱', name: 'Mobile', detail: 'Kotlin, Android, React Native / Expo' },
];

export const experiences = [
  {
    id: 'framatome',
    type: 'Alternance',
    role: 'Développeur PowerApps/JavaScript & Automatisation',
    org: 'Framatome',
    place: 'Paris La Défense',
    period: 'sept. 2025 - sept. 2026',
    missions: [
      "Déploiement et administration de clusters Kubernetes sur Azure (AKS) : exposition des services, gestion du cycle de vie des déploiements, optimisation de la consommation et des coûts (FinOps).",
      "Provisionnement de l'infrastructure avec Terraform, état distant sur GitLab, pipelines CI/CD avec contrôles automatisés.",
      "Mise en place d'une chaîne d'observabilité Prometheus / Grafana : instrumentation FastAPI, métriques de latence, de débit et d'erreurs, tableaux de bord PromQL.",
      "Développement d'une interface web Next.js / Node.js / FastAPI interrogeant Dataverse, comme alternative à PowerApps.",
      "Évolution et optimisation d'une application métier sous Power Apps.",
      "Automatisation de la collecte et du traitement des données (Python, Power Automate) pour alimenter les tableaux de bord Power BI. Le temps de traitement manuel a baissé de 45 %.",
      "Gestion des permissions Azure AD / IAM sur un site classé OIV, avec les exigences de sécurité renforcées que ça implique.",
      "Exploitation dans un réseau d'entreprise contraint : accès applicatifs derrière le proxy, diagnostic d'incidents de connectivité (résolution DNS, certificats TLS, filtrage des flux sortants).",
      "Analyse de données et création de KPI, documentation technique et publication des versions.",
    ],
    stack: ['Kubernetes', 'Azure AKS', 'Terraform', 'Docker', 'Prometheus', 'Grafana', 'CI/CD', 'FinOps', 'Azure AD / IAM', 'Next.js', 'FastAPI', 'Python', 'Power Apps', 'Power Automate', 'Power BI'],
  },
  {
    id: 'edf',
    type: 'Stage',
    role: "Développement d'une application d'automatisation",
    org: 'EDF R&D',
    place: 'Lab les Renardières',
    period: 'jan. 2025 - avr. 2025',
    missions: [
      "Développement d'un outil VBA automatisant la rédaction des rapports d'essais.",
      "Développement et optimisation d'une base de données Access.",
      "Recueil des besoins auprès des ingénieurs, techniciens et responsables de laboratoire.",
      "Intégration de code SQL et consommation d'une API REST interne.",
      "Tests puis déploiement de l'application sur les postes du laboratoire d'essais.",
      "Formation de 30 utilisateurs sur l'application livrée.",
    ],
    stack: ['VBA', 'Access', 'SQL', 'API REST'],
  },
];

export const education = [
  { degree: "Diplôme d'ingénieur, majeure Cloud Computing & Cybersécurité", school: 'ESILV, Paris La Défense', period: '2026 - 2029' },
  { degree: 'BUT Informatique', school: 'Université Sorbonne Paris Nord, Villetaneuse', period: '2023 - 2026' },
  { degree: 'Baccalauréat STI2D', school: 'Lycée Simone de Beauvoir, Garges-lès-Gonesse', period: '2023' },
];

export const projects = [
  {
    slug: 'appcatalog',
    title: 'AppCatalog : cartographie du SI',
    year: '2026',
    category: 'DevOps',
    github: 'https://github.com/sheene123/AppCatalog',
    short: "Référentiel d'applications modélisé en base graphe Neo4j, avec analyse d'impact des pannes. Architecture trois tiers déployée sur Azure AKS via Terraform et une chaîne CI/CD complète.",
    context:
      "Un référentiel des applications d'un système d'information, où les dépendances entre applications sont modélisées comme un graphe (Neo4j) plutôt qu'un simple tableau. On peut ainsi répondre à « quelles applications tombent si ce service tombe ? » en une requête, en suivant les dépendances en cascade. L'ensemble est une architecture trois tiers (frontend Blazor, API ASP.NET Core, base Neo4j) déployée sur Kubernetes managé Azure (AKS), avec l'infrastructure décrite en Terraform, les secrets gérés par Azure Key Vault, un cloisonnement réseau strict et une chaîne CI/CD qui construit et déploie automatiquement à chaque push.",
    missions: [
      "Modéliser le référentiel en graphe (nœuds Application, relations de dépendance) et l'analyse d'impact transitive en Cypher.",
      "Développer l'API REST en ASP.NET Core 8 et le frontend Blazor, avec une cartographie interactive des dépendances.",
      "Provisionner l'infrastructure Azure (AKS, Container Registry, Key Vault) avec Terraform.",
      "Déployer sur Kubernetes : StatefulSet Neo4j, NetworkPolicies zero-trust, Ingress HTTPS avec certificat Let's Encrypt, secrets montés depuis Key Vault via le CSI Secret Store.",
      "Mettre en place la CI/CD GitHub Actions en OIDC, sans secret stocké : build des images, publication sur ACR, déploiement sur AKS.",
      "Sécuriser de bout en bout : lecture publique, écriture authentifiée, audit des dépendances vulnérables, tests d'intégration contre un vrai Neo4j.",
    ],
    stack: ['Blazor', 'ASP.NET Core', 'C#', 'Neo4j', 'Azure AKS', 'Terraform', 'Kubernetes', 'Docker', 'Key Vault', 'CI/CD', 'HTTPS'],
  },
  {
    slug: 'cloud-kubernetes-finops',
    title: 'Migration cloud-native : de PowerApps à Kubernetes',
    year: '2025 - 2026',
    category: 'DevOps',
    short: "Migration d'une appli interne PowerApps vers une stack Next.js / FastAPI, conteneurisée et déployée sur Azure AKS avec supervision Prometheus.",
    context:
      "Une application métier interne tournait sous PowerApps, et l'idée était de voir concrètement ce que donnerait sa migration vers une stack plus classique. J'ai construit une démonstration complète : une application Next.js / Node.js / FastAPI qui reprend les mêmes usages, conteneurisée avec Docker et déployée sur un cluster Kubernetes managé Azure (AKS). Le cluster est provisionné avec Terraform et supervisé avec Prometheus et Grafana. Elle sert maintenant de modèle pour d'autres migrations du même type.",
    missions: [
      "Reproduire les fonctionnalités de l'application PowerApps existante en Next.js / Node.js / FastAPI, avec accès aux données Dataverse.",
      "Conteneuriser l'application avec Docker et la déployer sur un cluster Kubernetes managé Azure (AKS).",
      "Provisionner l'infrastructure avec Terraform, état distant sur GitLab.",
      "Instrumenter le backend FastAPI et construire les tableaux de bord PromQL (latence, débit, taux d'erreur).",
      "Mettre en place la chaîne CI/CD jusqu'à la mise en production.",
      "Optimiser la consommation et les coûts du cluster (FinOps).",
      "Documenter le tout pour en faire un modèle réutilisable.",
    ],
    stack: ['Next.js', 'FastAPI', 'Docker', 'Kubernetes', 'Azure AKS', 'Terraform', 'Prometheus', 'Grafana', 'CI/CD', 'FinOps'],
  },
  {
    slug: 'trading-cloud',
    title: 'Automatisation cloud sur GCP',
    year: '2024',
    category: 'Cloud',
    short: "Scripts Python d'achats d'actions via l'API Interactive Brokers, exécutés par systemd sur une instance GCE durcie.",
    context:
      "Projet personnel : automatiser une stratégie d'achat d'actions, depuis l'appel d'API jusqu'à l'exécution planifiée dans le cloud. J'ai déployé et administré une instance Linux sur Google Compute Engine, configuré les règles de pare-feu VPC et durci l'accès SSH (authentification par clés, restriction des adresses sources). Les scripts Python sont déclenchés par des services systemd.",
    missions: [
      "Écrire les scripts Python d'automatisation des ordres d'achat.",
      "Intégrer l'API Interactive Brokers (authentification, requêtes, gestion des réponses).",
      "Déployer et maintenir une instance Linux sur Google Compute Engine.",
      "Configurer les règles de pare-feu VPC et durcir l'accès SSH.",
      "Mettre en place des services systemd pour l'exécution planifiée.",
      "Analyser les journaux et diagnostiquer les coupures de session.",
    ],
    stack: ['Python', 'GCP', 'Compute Engine', 'Linux', 'systemd', 'API REST'],
  },
  {
    slug: 'audit-securite-web',
    title: "Audit de sécurité d'une application web",
    year: '2026',
    category: 'Cyber',
    short: "Audit défensif d'une application React en production : XSS, jeton exposé, dépendances vulnérables, en-têtes de sécurité.",
    context:
      "J'ai audité une application React / Vite en production pour mettre en pratique ce que je travaille en cybersécurité en dehors des cours. J'y ai relevé des vulnérabilités d'injection (XSS), un jeton d'authentification exposé côté client, des dépendances vulnérables et un secret d'API accessible. J'ai aussi analysé les en-têtes HTTP de sécurité (CSP, HSTS). Les constats ont été remontés au propriétaire de l'application sous forme de recommandations classées par criticité.",
    missions: [
      "Reconnaissance et cartographie de la surface d'attaque de l'application.",
      "Identification des points d'injection XSS et de l'exposition du jeton d'authentification.",
      "Revue des dépendances et détection d'un secret d'API exposé dans le bundle.",
      "Analyse des en-têtes HTTP de sécurité (CSP, HSTS) et de la configuration TLS.",
      "Rédaction d'un rapport avec recommandations priorisées par criticité.",
    ],
    stack: ['React', 'OWASP Top 10', 'XSS', 'JWT', 'CSP / HSTS', 'TLS'],
  },
  {
    slug: 'voyage-assistant',
    title: 'Voyage Assistant, chatbot RAG',
    year: '2026',
    category: 'IA',
    github: 'https://github.com/optmlako2004/chatbot',
    demo: 'https://optimalako-voyage-assistant.hf.space',
    short: "Chatbot d'agence de voyage avec pipeline RAG, authentification, réservation de billets et déploiement Docker sur Hugging Face Spaces.",
    context:
      "Projet universitaire (SAE BUT3) : concevoir un assistant virtuel pour une agence de voyage. Le chatbot répond aux questions sur les trajets grâce à un pipeline RAG qui interroge un catalogue de plus de 182 000 trajets stocké sur PostgreSQL (Neon en production), avec des embeddings gte-small et un reranker cross-encoder. Backend, frontend et modèles tournent dans un seul conteneur Docker déployé sur Hugging Face Spaces.",
    missions: [
      "Mettre en place le pipeline RAG (LangChain, FAISS, embeddings gte-small et reranker) pour la recherche sémantique sur les trajets et les CGV.",
      "Développer le backend FastAPI avec SQLAlchemy et Pydantic : routes auth, trajets, billets, réclamations, chat, documentation OpenAPI.",
      "Construire le frontend en JavaScript natif (fetch API), servi statiquement par FastAPI.",
      "Migrer la persistance de SQLite vers PostgreSQL (Neon) pour la mise en production.",
      "Conteneuriser avec Docker et déployer sur Hugging Face Spaces via CI/CD.",
      "Gérer l'authentification par sessions et intégrer Google OAuth.",
      "Optimiser le contexte envoyé au modèle (chunking, reranking) pour réduire la consommation de tokens.",
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'RAG', 'PostgreSQL', 'Docker', 'Hugging Face Spaces', 'JavaScript'],
  },
  {
    slug: 'reconnaissance-faciale',
    title: 'Reconnaissance faciale sur mobile',
    year: '2025 - 2026',
    category: 'IA',
    short: 'CNN entraîné from scratch avec TensorFlow, comparé à MobileNet, puis embarqué dans une application Android en Kotlin.',
    context:
      "Projet universitaire de groupe mené sur plusieurs mois : entraîner un modèle de reconnaissance faciale sur le dataset UTKFace, puis l'embarquer dans une application Android utilisable en conditions réelles. On a comparé un CNN développé from scratch au modèle pré-entraîné MobileNet pour voir ce que coûtait la précision en poids et en temps d'inférence sur mobile.",
    missions: [
      'Prétraiter le dataset UTKFace (traitement des images, normalisation).',
      "Développer et entraîner un CNN avec TensorFlow et Keras.",
      'Comparer le modèle from scratch à MobileNet sur la précision et la latence.',
      "Intégrer le modèle retenu dans une application mobile Kotlin.",
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Kotlin', 'Android'],
  },
  {
    slug: 'sentiment-chatbot',
    title: 'Sentiment Chatbot',
    year: '2026',
    category: 'IA',
    short: "API Flask servant un RNN TensorFlow d'analyse de sentiment, entraîné sur des critiques de films.",
    context:
      "Projet de S6 : construire un système d'analyse de sentiment et le rendre interrogeable par une API. Le modèle est un empilement d'embeddings et de SimpleRNN, entraîné sur un corpus de critiques de films, sauvegardé puis servi par une API Flask. Une interface Streamlit permet de le tester.",
    missions: [
      'Prétraiter et tokeniser le corpus (pad_sequences, vocabulaire de 10 000 mots).',
      "Concevoir le RNN avec TensorFlow et Keras (Embedding puis SimpleRNN empilés).",
      "Entraîner le modèle, sauvegarder les poids et gérer le rechargement.",
      "Exposer le modèle par une API Flask (endpoint de prédiction JSON).",
      'Construire une interface de test avec Streamlit.',
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Streamlit', 'NLP'],
  },
  {
    slug: 'llm-ollama',
    title: 'Agents LLM en local et via API',
    year: '2026',
    category: 'IA',
    short: 'Exécution de LLMs en local avec Ollama et via OpenRouter, intégrés dans des pipelines Python.',
    context:
      "Projet SAE sur l'intégration de grands modèles de langage dans des applications. J'ai fait tourner des modèles open source en local avec Ollama (Llama 3, Mistral, Phi-3) et appelé des modèles distants via l'API OpenRouter, en gérant les prompts et le parsing des réponses JSON.",
    missions: [
      'Installer et exécuter des modèles open source en local avec Ollama.',
      "Intégrer l'API OpenRouter (requêtes REST, authentification, parsing JSON).",
      'Comparer Llama 3, Mistral et Phi-3 sur des cas concrets.',
      'Construire des pipelines de prompts en Python.',
    ],
    stack: ['Python', 'Ollama', 'OpenRouter', 'LLM', 'REST API'],
  },
  {
    slug: 'churchfinder',
    title: 'ChurchFinder',
    year: '2026',
    category: 'Web',
    short: 'Application mobile de recherche de lieux de culte géolocalisés : Expo / React Native, backend FastAPI GraphQL, CockroachDB.',
    context:
      "Projet personnel en cours de développement. L'application mobile est développée avec Expo et React Native, avec une carte react-native-maps et des filtres (confession, style, langue, rayon, ouverture du jour) gérés par un store Zustand. Le backend est une API GraphQL en FastAPI, dockerisée, adossée à une base CockroachDB compatible PostgreSQL qui référence pour l'instant une soixantaine de lieux en France.",
    missions: [
      "Développer l'application mobile avec Expo, React Native et expo-router.",
      "Intégrer la carte et la géolocalisation (react-native-maps, bottom sheet).",
      "Gérer les filtres de recherche et l'état de l'application avec Zustand.",
      "Construire l'API GraphQL en FastAPI et modéliser la base CockroachDB.",
      "Conteneuriser l'environnement de développement avec Docker Compose.",
    ],
    stack: ['React Native', 'Expo', 'FastAPI', 'GraphQL', 'CockroachDB', 'Docker', 'Zustand'],
  },
  {
    slug: 'gestion-stages',
    title: 'Application de gestion de stages',
    year: '2024 - 2025',
    category: 'Web',
    short: 'Site web livré à un client, mené en SCRUM, avec hachage Bcrypt des mots de passe.',
    context:
      "Projet universitaire encadré par un professeur qui jouait le rôle du client : concevoir et livrer une application web de gestion des stages, du recueil des besoins jusqu'à la livraison, en méthode agile SCRUM. Le travail a beaucoup porté sur la modélisation de la base de données et sur la sécurisation des comptes (hachage Bcrypt).",
    missions: [
      'Recueillir les besoins et formaliser le cahier des charges.',
      'Piloter le projet en SCRUM (sprints, backlog, démonstrations client).',
      'Concevoir le site web et le modèle de données.',
      'Sécuriser les mots de passe par hachage Bcrypt.',
    ],
    stack: ['PHP', 'SQL', 'Web', 'SCRUM', 'Bcrypt'],
  },
];
