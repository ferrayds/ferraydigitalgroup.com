<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const title = route.meta.title as string
  return title
    ? `${title} | Ferray Digital Group`
    : 'Ferray Digital Group - Transformation Digitale au Benin'
})

const pageDescription = computed(() => {
  return (
    (route.meta.description as string) ||
    'Ferray Digital Group - Votre partenaire pour la transformation digitale au Benin. Développement web et mobile, solutions SaaS, Fintech et conseil informatique.'
  )
})

watch(
  () => route.path,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    {
      name: 'keywords',
      content:
        'développement web, développement mobile, SaaS, fintech, transformation digitale, Benin, Abomey-Calavi, applications mobiles, sites web',
    },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ferraydigitalgroup.com' },
    { property: 'og:locale', content: 'fr_BJ' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ferray Digital Group',
        description:
          'Votre partenaire pour la transformation digitale au Benin. Développement web et mobile, solutions SaaS et conseil informatique.',
        url: 'https://ferraydigitalgroup.com',
        logo: 'https://ferraydigitalsolutions.com/logo.png',
        sameAs: [
          'https://www.facebook.com/61570017856457',
          'https://www.linkedin.com/company/ferray-digital-solutions',
          'https://wa.me/22961003050',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+229-01-6100-3050',
          contactType: 'customer service',
          email: 'hello@ferraydigitalgroup.com',
          availableLanguage: ['French', 'English'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Gbègnigan',
          addressLocality: 'Abomey-Calavi',
          addressCountry: 'BJ',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Benin',
        },
        serviceType: [
          'Web Development',
          'Mobile Development',
          'SaaS',
          'Fintech',
          'Digital Transformation',
        ],
      }),
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://ferraydigitalgroup.com' },
  ],
})
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
