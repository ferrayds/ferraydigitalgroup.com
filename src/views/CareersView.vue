<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import AppButton from '@/components/common/AppButton.vue'

useHead({
  title: 'Carrières | Ferray Digital Group',
})

const jobs = [
  {
    id: 1,
    title: 'Développeur Full Stack',
    department: 'Engineering',
    location: 'Abomey-Calavi, Benin',
    type: 'CDI',
    description: 'Vous aimez créer des applications web et mobiles ? Rejoignez notre équipe technique pour construire des solutions innovantes.',
    requirements: [
      'Expérience en Vue.js, React ou Angular',
      'Connaissance en Node.js ou Python',
      'Bonnes bases en bases de données',
      'Passion pour le code propre et maintenable'
    ]
  },
  {
    id: 2,
    title: 'Développeur Mobile',
    department: 'Engineering',
    location: 'Abomey-Calavi, Benin',
    type: 'CDI',
    description: 'Spécialisez-vous dans le développement d\'applications mobiles natives ou hybrides pour nos clients.',
    requirements: [
      'Expérience en React Native ou Flutter',
      'Connaissance des APIs REST',
      'Capacité à trabajar en autonomía',
      'Sens du détail pour l\'UI/UX'
    ]
  },
  {
    id: 3,
    title: 'Chef de Projet IT',
    department: 'Gestion de projets',
    location: 'Abomey-Calavi, Benin',
    type: 'CDI',
    description: 'Gérez nos projets de A à Z et garantissez la satisfaction de nos clients.',
    requirements: [
      'Expérience en gestion de projets web/mobile',
      'Méthodologies Agile/Scrum',
      'Excellentes compétences en communication',
      'Capacité à gérer les priorités'
    ]
  },
  {
    id: 4,
    title: 'Stagiaire Développeur Web',
    department: 'Engineering',
    location: 'Abomey-Calavi, Benin',
    type: 'Stage',
    description: 'Vous êtes étudiant en informatique ? Rejoignez-nous pour un stage de 3 à 6 mois.',
    requirements: [
      'Connaissances de base en HTML/CSS/JS',
      'Motivation et envie d\'apprendre',
      'Sérieux et rigueur',
      'Travail en équipe'
    ]
  }
]

const benefits = [
  { icon: '🚀', title: 'Innovation', description: 'Travaillez sur des projets technologiques de pointe' },
  { icon: '🌱', title: 'Croissance', description: 'Opportunités de formation et d\'évolution' },
  { icon: '🤝', title: 'Équipe', description: 'Ambiance collaborative et bienveillante' },
  { icon: '💼', title: 'Impact', description: 'Contribuez directement au succès des clients' }
]

const selectedJob = ref<number | null>(null)

const toggleJob = (id: number) => {
  selectedJob.value = selectedJob.value === id ? null : id
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez <span class="text-gradient">Ferray Digital Group</span>
          </h1>
          <p class="text-xl text-gray-300">
            Vous êtes passionné par la technologie ? Vous voulez travailler sur des projets innovants ? 
            Rejoignez une équipe dynamique qui transforme les idées en réalité digitale.
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="benefit in benefits" 
            :key="benefit.title"
            class="text-center p-6"
          >
            <div class="text-4xl mb-4">{{ benefit.icon }}</div>
            <h3 class="text-lg font-semibold text-dark-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Jobs -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-dark-900 text-center mb-12">
          Nos offres d'emploi
        </h2>
        
        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="job in jobs" 
            :key="job.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div 
              class="p-6 cursor-pointer"
              @click="toggleJob(job.id)"
            >
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {{ job.department }}
                    </span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {{ job.type }}
                    </span>
                  </div>
                  <h3 class="text-xl font-semibold text-dark-900">{{ job.title }}</h3>
                  <p class="text-gray-500 text-sm mt-1">{{ job.location }}</p>
                </div>
                <div class="flex items-center gap-2 text-gray-400">
                  <span class="text-sm">{{ selectedJob === job.id ? 'Fermer' : 'Voir plus' }}</span>
                  <svg 
                    class="w-5 h-5 transform transition-transform" 
                    :class="{ 'rotate-180': selectedJob === job.id }"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div 
              v-if="selectedJob === job.id"
              class="px-6 pb-6 border-t border-gray-100"
            >
              <div class="pt-4">
                <p class="text-gray-600 mb-4">{{ job.description }}</p>
                <h4 class="font-semibold text-dark-900 mb-3">Profil recherché :</h4>
                <ul class="space-y-2 mb-6">
                  <li v-for="req in job.requirements" :key="req" class="flex items-start gap-2 text-gray-600">
                    <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ req }}
                  </li>
                </ul>
                <AppButton 
                  href="mailto:hello@ferraydigitalgroup.com?subject=Candidature - {{ job.title }}"
                  variant="primary"
                >
                  Postuler maintenant
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-dark-900">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Vous n'avez pas trouvé votre poste ?
          </h2>
          <p class="text-gray-300 mb-8">
            Envoyez-nous votre CV spontané. Nous sommes toujours à la recherche de talents !
          </p>
          <AppButton 
            href="mailto:hello@ferraydigitalgroup.com?subject=Candidature spontanée"
            variant="secondary"
            size="lg"
          >
            Envoyer ma candidature
          </AppButton>
        </div>
      </div>
    </section>
  </div>
</template>
