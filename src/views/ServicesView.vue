<script setup lang="ts">
import { ref } from 'vue'
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppCard from '@/components/common/AppCard.vue'
import { services } from '@/data/services'

const activeService = ref('conseil')

const getIconPath = (icon: string) => {
  const icons: Record<string, string> = {
    lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    'credit-card': 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    megaphone: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    'academic-cap': 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  }
  return icons[icon] || icons.code
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span class="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">Services</span>
          </h1>
          <p class="text-xl text-gray-300">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <AppSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Service List -->
        <div class="space-y-4">
          <button
            v-for="service in services"
            :key="service.id"
            @click="activeService = service.id"
            :class="[
              'w-full text-left p-6 rounded-xl transition-all duration-300',
              activeService === service.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            ]"
          >
            <div class="flex items-center gap-4">
              <div 
                :class="[
                  'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                  activeService === service.id ? 'bg-white/20' : 'bg-primary-100'
                ]"
              >
                <svg 
                  :class="[
                    'w-6 h-6',
                    activeService === service.id ? 'text-white' : 'text-primary-600'
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(service.icon)"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg">{{ service.title }}</h3>
                <p 
                  v-if="activeService === service.id"
                  class="text-sm text-white/80 mt-1"
                >
                  {{ service.description }}
                </p>
              </div>
            </div>
          </button>
        </div>

        <!-- Service Detail -->
        <div class="lg:sticky lg:top-32">
          <div
            v-for="service in services"
            :key="service.id"
            v-show="activeService === service.id"
            class="card p-8 animate-fade-in"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(service.icon)"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-dark-900">{{ service.title }}</h2>
            </div>
            
            <p class="text-gray-600 mb-8">
              {{ service.description }}
            </p>

            <h3 class="font-semibold text-dark-900 mb-4">Ce que nous proposons :</h3>
            <ul class="space-y-3 mb-8">
              <li 
                v-for="feature in service.features" 
                :key="feature"
                class="flex items-center gap-3"
              >
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>

            <AppButton to="/contact" variant="primary" class="w-full">
              Demander un devis
            </AppButton>
          </div>
        </div>
      </div>
    </AppSection>

    <!-- CTA -->
    <AppSection dark>
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Vous avez un projet en tête ?
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Parlons de vos besoins et trouvons ensemble la meilleure solution pour votre entreprise.
        </p>
        <AppButton to="/contact" variant="primary" size="lg">
          Nous contacter
        </AppButton>
      </div>
    </AppSection>
  </div>
</template>
