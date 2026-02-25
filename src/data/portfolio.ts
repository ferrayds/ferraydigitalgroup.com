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
    title: 'Tassiva',
    description: "Première application au Benin d'achat de produits frais venant des producteurs nationaux.",
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    client: 'Tassiva',
    year: '2024',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    link: 'https://www.tassiva.shop/',
  },
  {
    id: '2',
    title: 'Orafinx',
    description: "Première application de transfert d'argent en Afrique par mobile money et carte de crédit.",
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    client: 'Orafinx',
    year: '2024',
    technologies: ['React Native', 'Node.js', 'Stripe', 'AWS'],
    link: 'https://www.orafinx.com/',
  },
  {
    id: '3',
    title: 'Adbenin.org',
    description: "Site web de l'ONG Actions & Développement.",
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    client: 'ONG Actions & Développement',
    year: '2023',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
    link: 'https://adbenin.org/',
  },
  {
    id: '4',
    title: 'SamStudio',
    description: "Site web du studio de photographie Samstudio.",
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    client: 'SamStudio',
    year: '2023',
    technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS'],
    link: 'https://samstudio.ferraydigitalsolutions.com/',
  },
  {
    id: '5',
    title: 'Neptune',
    description: 'Application de gestion de stock pour les entreprises.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    client: 'Neptune',
    year: '2023',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '6',
    title: 'Afrikflow',
    description: "Application mobile de transfert d'argent en Afrique.",
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    client: 'Afrikflow',
    year: '2024',
    technologies: ['React Native', 'Node.js', 'AWS'],
    link: 'https://www.orafinx.com/',
  },
]

export const categories = [
  'Tous',
  'Web',
  'Mobile',
  'Fintech',
  'SaaS',
]
