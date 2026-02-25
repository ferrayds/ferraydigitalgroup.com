export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'conseil',
    title: 'Conseil informatique',
    description: 'Nous accompagnons votre transformation digitale avec des stratégies personnalisées et des recommandations expertes.',
    icon: 'lightbulb',
    features: [
      'Audit technique et fonctionnel',
      'Architecture des systèmes',
      'Optimisation des processus',
      'Stratégie digitale',
    ],
  },
  {
    id: 'developpement',
    title: 'Développement logiciel',
    description: 'Des solutions sur mesure adaptées à vos besoins spécifiques, du prototype à la production.',
    icon: 'code',
    features: [
      'Applications web et mobiles',
      'API et microservices',
      'Logiciels métier',
      'Maintenance et évolution',
    ],
  },
  {
    id: 'saas',
    title: 'Solutions SaaS',
    description: 'Des plateformes cloud évolutives pour simplifier la gestion de votre activité.',
    icon: 'cloud',
    features: [
      'Développement SaaS',
      'Migration cloud',
      'Architecture serverless',
      'Intégration API',
    ],
  },
  {
    id: 'fintech',
    title: 'Paiement & Fintech',
    description: 'L\'intégration de solutions de paiement sécurisées et des innovations financières.',
    icon: 'credit-card',
    features: [
      'Intégration paiements (Stripe, PayPal)',
      'Solutions de paiement PSD2',
      'Plateformes de financement',
      'Cryptomonnaie & blockchain',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing digital',
    description: 'Des stratégies de marketing digital pour maximiser votre visibilité et vos conversions.',
    icon: 'megaphone',
    features: [
      'Stratégie SEO/SEA',
      'Marketing de contenu',
      'Gestion des réseaux sociaux',
      'Analytics et reporting',
    ],
  },
  {
    id: 'formation',
    title: 'Formation tech',
    description: 'Des programmes de formation pour monter en compétences vos équipes.',
    icon: 'academic-cap',
    features: [
      'Formations Vue.js / React',
      'Formation DevOps',
      'Ateliers pratiques',
      'Certification',
    ],
  },
]

export const whyChooseUs = [
  {
    title: 'Expertise technique',
    description: 'Une équipe de développeurs passionnés avec une expertise dans les dernières technologies.',
    icon: 'trophy',
  },
  {
    title: 'Approche agile',
    description: 'Méthodologie agile pour une livraison rapide et adaptative à vos besoins.',
    icon: 'agile',
  },
  {
    title: 'Support dédié',
    description: 'Un interlocuteur unique et un support réactif pour accompagner vos projets.',
    icon: 'support',
  },
  {
    title: 'Résultats mesurables',
    description: 'Des KPIs clairs et un suivi régulier pour garantir le succès de vos projets.',
    icon: 'chart',
  },
]
