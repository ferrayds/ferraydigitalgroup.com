import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Accueil',
        description: 'Ferray Digital Solutions - Votre partenaire pour la transformation digitale au Benin. Développement web et mobile, solutions SaaS, Fintech et conseil informatique.'
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'Services',
        description: 'Nos services de transformation digitale : développement web et mobile, solutions SaaS sur mesure, Fintech, conseil informatique et marketing digital.'
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'À propos',
        description: 'Découvrez Ferray Digital Solutions, entreprise technologique Beninoise spécialisée dans le développement de solutions digitales innovantes.'
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue'),
      meta: {
        title: 'Portfolio',
        description: 'Découvrez nos réalisations : applications mobiles, sites web, solutions SaaS et projets de transformation digitale pour nos clients au Benin et en Afrique.'
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact',
        description: 'Contactez Ferray Digital Solutions pour votre projet de transformation digitale. Located à Abomey-Calavi, Benin. Réponse sous 24h.'
      },
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('@/views/CareersView.vue'),
      meta: {
        title: 'Carrières',
        description: 'Rejoignez Ferray Digital Solutions ! Découvrez nos offres emploi et stages en développement web, mobile et gestion de projets IT.'
      },
    },
    {
      path: '/conditions-generales',
      name: 'cgu',
      component: () => import('@/views/CGULegalView.vue'),
      meta: {
        title: 'Conditions Générales d\'Utilisation',
        description: 'Conditions générales d\'utilisation du site Ferray Digital Solutions.'
      },
    },
    {
      path: '/politique-confidentialite',
      name: 'privacy',
      component: () => import('@/views/PrivacyPolicyView.vue'),
      meta: {
        title: 'Politique de Confidentialité',
        description: 'Politique de confidentialité et protection des données personnelles de Ferray Digital Solutions.'
      },
    },
    {
      path: '/mentions-legales',
      name: 'legal',
      component: () => import('@/views/LegalNoticeView.vue'),
      meta: {
        title: 'Mentions Légales',
        description: 'Mentions légales du site Ferray Digital Solutions.'
      },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
