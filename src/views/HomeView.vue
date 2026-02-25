<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppCard from '@/components/common/AppCard.vue'
import { services, whyChooseUs } from '@/data/services'
import { projects } from '@/data/portfolio'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const stats = [
  { value: '1.5k', label: 'Projets livrés' },
  { value: '30+', label: 'Experts passionnés' },
  { value: '28%', label: 'Productivité moyenne' },
  { value: '2x', label: 'Croissance clients' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"
        ></div>
      </div>

      <!-- Grid pattern -->
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>

      <!-- App Mockups -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/2 h-full">
        <img
          src="https://ferraydigitalsolutions.com/images/mockup/full/tassiva-mobile.png"
          alt="Tassiva App"
          class="absolute right-20 top-1/4 w-48 md:w-64 rounded-2xl shadow-2xl transform rotate-6"
        />
        <img
          src="https://ferraydigitalsolutions.com/images/mockup/full/afrikflow-mobile.png"
          alt="Afrikflow App"
          class="absolute right-60 top-1/3 w-48 md:w-64 rounded-2xl shadow-2xl transform -rotate-3"
        />
        <img
          src="https://ferraydigitalsolutions.com/images/mockup/full/afrikflow.png"
          alt="Afrikflow Web"
          class="absolute right-0 top-1/2 w-64 md:w-80 rounded-2xl shadow-2xl"
        />
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-4xl">
          <div
            :class="[
              'transition-all duration-1000',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            <span
              class="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium mb-6"
            >
              🚀 Transformation digitale pour entreprises
            </span>
          </div>

          <h1
            :class="[
              'text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6',
              'transition-all duration-1000 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            Nous transformons vos idées en
            <span class="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">
              solutions digitales
            </span>
          </h1>

          <p
            :class="[
              'text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed',
              'transition-all duration-1000 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            Ferray Digital Group, entreprise tech dynamique, conçoit des applications web et
            mobiles, des solutions logicielles sur mesure et des expériences digitales innovantes
            pour répondre à vos besoins uniques.
          </p>

          <div
            :class="[
              'flex flex-col sm:flex-row gap-4',
              'transition-all duration-1000 delay-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            <AppButton to="/contact" variant="primary" size="lg">
              Demander un devis
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </AppButton>
            <AppButton
              to="/portfolio"
              variant="secondary"
              size="lg"
              class="!border-white !text-white hover:!bg-white/20 hover:!scale-105"
            >
              Voir nos réalisations
            </AppButton>
          </div>
        </div>

        <!-- Stats -->
        <div
          :class="[
            'grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800',
            'transition-all duration-1000 delay-800',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-1">{{ stat.value }}</div>
            <div class="text-gray-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>

    <!-- Services Preview -->
    <AppSection>
      <div class="text-center mb-12">
        <h2 class="section-title">Nos Services</h2>
        <p class="section-subtitle mx-auto">
          Une expertise complète pour répondre à tous vos besoins digitaux
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AppCard
          v-for="(service, index) in services.slice(0, 6)"
          :key="service.id"
          :class="['group cursor-pointer', `delay-${index * 100}`]"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors"
          >
            <svg
              class="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="service.icon === 'lightbulb'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
              <path
                v-else-if="service.icon === 'code'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
              <path
                v-else-if="service.icon === 'cloud'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
              <path
                v-else-if="service.icon === 'credit-card'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors"
          >
            {{ service.title }}
          </h3>
          <p class="text-gray-600 text-sm line-clamp-2">
            {{ service.description }}
          </p>
          <router-link
            :to="`/services#${service.id}`"
            class="inline-flex items-center text-primary-600 font-medium text-sm mt-4 group-hover:gap-2 gap-1 transition-all"
          >
            En savoir plus
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </AppCard>
      </div>

      <div class="text-center mt-12">
        <AppButton to="/services" variant="secondary"> Voir tous nos services </AppButton>
      </div>
    </AppSection>

    <!-- Why Choose Us -->
    <AppSection dark>
      <div class="text-center mb-12">
        <h2 class="section-title text-white" style="color: white">Pourquoi nous choisir</h2>
        <p class="section-subtitle mx-auto text-gray-300">
          Nous nous engageons à deliver des résultats exceptionnels
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in whyChooseUs"
          :key="item.title"
          class="text-center p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-primary-500 transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-7 h-7 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="item.icon === 'trophy'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
              <path
                v-else-if="item.icon === 'agile'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
              <path
                v-else-if="item.icon === 'support'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ item.title }}</h3>
          <p class="text-gray-400 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </AppSection>

    <!-- Recent Projects -->
    <AppSection>
      <div class="text-center mb-12">
        <h2 class="section-title">Nos Réalisations</h2>
        <p class="section-subtitle mx-auto">Découvrez quelques-uns de nos projets récents</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects.slice(0, 3)" :key="project.id" class="group cursor-pointer">
          <a :href="project.link" target="_blank" class="block">
            <div class="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <AppButton :href="project.link" target="_blank" variant="primary" size="sm"> Voir le projet </AppButton>
              </div>
            </div>
          </a>
          <div class="px-2">
            <span class="text-xs font-medium text-primary-600 uppercase tracking-wider">
              {{ project.category }}
            </span>
            <h3
              class="text-lg font-semibold text-dark-900 mt-1 group-hover:text-primary-600 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-600 text-sm mt-1 line-clamp-2">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <AppButton to="/portfolio" variant="secondary"> Voir tous les projets </AppButton>
      </div>
    </AppSection>

    <!-- CTA Section -->
    <section class="relative py-20 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre projet en réalité ?
          </h2>
          <p class="text-gray-300 text-lg mb-10">
            Discutons de vos besoins et concevons ensemble la solution parfaite pour votre
            entreprise.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <AppButton to="/contact" variant="primary" size="lg">
              Demander un devis gratuit
            </AppButton>
            <AppButton to="/about" variant="ghost" size="lg" class="!text-white hover:!bg-white/10">
              En savoir plus sur nous
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
