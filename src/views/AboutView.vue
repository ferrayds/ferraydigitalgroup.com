<script setup lang="ts">
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'

const values = [
  {
    title: 'Excellence technique',
    description: 'Nous追求 l\'excellence dans chaque ligne de code que nous écrivons.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Innovation constante',
    description: 'Nous restons à la pointe des nouvelles technologies pour vous offrir le meilleur.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Transparence',
    description: 'Une communication ouverte et honnête tout au long de vos projets.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
  },
  {
    title: 'Engagement',
    description: 'Nous nous engageons à deliver des résultats qui dépassent vos attentes.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

const timeline = [
  {
    year: '2024',
    title: 'Expansion internationale',
    description: 'Ouverture de nouveaux bureaux et expansion de notre équipe d\'experts.',
  },
  {
    year: '2023',
    title: 'Lancement SaaS',
    description: 'Développement de nos propres produits SaaS pour le marché B2B.',
  },
  {
    year: '2022',
    title: 'Croissance rapide',
    description: 'Triplement du chiffre d\'affaires et50 nouveaux projets livrés.',
  },
  {
    year: '2021',
    title: 'Fondation',
    description: 'Création de Ferray Digital Group à Paris.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute bottom-20 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de <span class="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">Ferray Digital</span>
          </h1>
          <p class="text-xl text-gray-300">
            Une équipe passionnée au service de votre transformation digitale
          </p>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <AppSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-dark-900 mb-6">
            Notre mission : simplifier le digital pour les entreprises
          </h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Fondée en 2021, Ferray Digital Group est née d\'une vision simple : rendre la technologie 
            accessible et bénéfique pour toutes les entreprises. Nous croyons que la transformation 
            digitale ne devrait pas être un luxe réservé aux grandes corporations.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            Aujourd\'hui, nous accompagnons plus de 50 entreprises dans leur mutation digitale, 
            en leur fournissant des solutions sur mesure, innovantes et performantes.
          </p>
          <AppButton to="/contact" variant="primary">
            Travaillons ensemble
          </AppButton>
        </div>
        <div class="relative">
          <div class="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Notre équipe"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
            <div class="text-3xl font-bold text-primary-600">50+</div>
            <div class="text-gray-600 text-sm">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </AppSection>

    <!-- Values -->
    <AppSection dark>
      <div class="text-center mb-12">
        <h2 class="section-title text-white">Nos valeurs</h2>
        <p class="section-subtitle mx-auto text-gray-300">
          Les principes qui guident chacune de nos actions
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="value in values"
          :key="value.title"
          class="text-center p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-primary-500 transition-all duration-300"
        >
          <div class="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ value.title }}</h3>
          <p class="text-gray-400 text-sm">{{ value.description }}</p>
        </div>
      </div>
    </AppSection>

    <!-- Timeline -->
    <AppSection>
      <div class="text-center mb-12">
        <h2 class="section-title">Notre histoire</h2>
        <p class="section-subtitle mx-auto">
          Les étapes clés de notre développement
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative flex gap-8 pb-12 last:pb-0"
          >
            <div class="relative z-10 w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold">{{ item.year }}</span>
            </div>
            <div class="pt-2">
              <h3 class="text-xl font-semibold text-dark-900 mb-2">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </AppSection>

    <!-- Team CTA -->
    <AppSection>
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-dark-900 mb-4">
          Rejoignez l'aventure
        </h2>
        <p class="text-gray-600 mb-8">
          Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe.
        </p>
        <AppButton to="/contact" variant="primary">
          Nous contacter
        </AppButton>
      </div>
    </AppSection>
  </div>
</template>
