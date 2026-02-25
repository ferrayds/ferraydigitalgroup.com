export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  client: string
  year: string
  technologies: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plateforme E-commerce Enterprise',
    description: 'Solution e-commerce complète pour un leader de la distribution avec gestion multi-boutiques, inventaire temps réel et analytics avancés.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    client: 'Retail Corp',
    year: '2024',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
  },
  {
    id: '2',
    title: 'Application Financière Mobile',
    description: 'Application de gestion de patrimoine avec visualisation en temps réel, transactions sécurisées et conseil patrimonial.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    client: 'Wealth Management',
    year: '2024',
    technologies: ['React Native', 'Python', 'AWS', 'PSD2'],
  },
  {
    id: '3',
    title: 'Dashboard Analytics IoT',
    description: 'Tableau de bord temps réel pour la supervision d\'objets connectés avec alertes intelligentes et maintenance prédictive.',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    client: 'Smart Industries',
    year: '2023',
    technologies: ['Vue.js', 'D3.js', 'Kafka', 'MongoDB'],
  },
  {
    id: '4',
    title: 'CRM Healthcare',
    description: 'CRM spécialisé pour le secteur médical avec gestion des patients, rendez-vous et facturation conforme RGPD.',
    category: 'Santé',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    client: 'MedCare Plus',
    year: '2023',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'HL7'],
  },
  {
    id: '5',
    title: 'Plateforme Educational SaaS',
    description: 'Plateforme LMS avec cours en vidéo, quiz interactifs, suivi de progression et certification.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    client: 'EduTech Academy',
    year: '2023',
    technologies: ['Vue.js', 'Nuxt', 'Firebase', 'AWS'],
  },
  {
    id: '6',
    title: 'Système de Paiement Multi-devises',
    description: 'Solution de paiement internationale avec conversion devises temps réel, gestion des risques et conformité réglementaire.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
    client: 'GlobalPay',
    year: '2022',
    technologies: ['Node.js', 'Go', 'Kubernetes', 'Stripe Connect'],
  },
]

export const categories = [
  'Tous',
  'E-commerce',
  'Fintech',
  'IoT',
  'Santé',
  'Education',
]
