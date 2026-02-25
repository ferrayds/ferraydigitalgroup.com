<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const title = route.meta.title as string
  return title ? `${title} | Ferray Digital Group` : 'Ferray Digital Group'
})

watch(
  () => route.path,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: 'Ferray Digital Group - Votre partenaire pour la transformation digitale. Conseil, développement logiciel, SaaS, Fintech et formation.' },
    { name: 'keywords', content: 'conseil informatique, développement logiciel, SaaS, fintech, marketing digital, formation tech, Paris' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: 'Ferray Digital Group - Votre partenaire pour la transformation digitale.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
