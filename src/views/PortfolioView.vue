<script setup lang="ts">
import { ref, computed } from 'vue'
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'
import { projects, categories } from '@/data/portfolio'

const activeCategory = ref('Tous')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Tous') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 right-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre <span class="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">Portfolio</span>
          </h1>
          <p class="text-xl text-gray-300">
            Découvrez nos réalisations et les projets qui nous ont permis de grandir
          </p>
        </div>
      </div>
    </section>

    <!-- Filter -->
    <AppSection padding="none">
      <div class="container-custom py-8">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-5 py-2.5 rounded-full font-medium transition-all duration-200',
              activeCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </AppSection>

    <!-- Projects Grid -->
    <AppSection padding="none">
      <div class="container-custom pb-16">
        <TransitionGroup
          name="projects"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer"
          >
            <a :href="project.link" target="_blank" class="block">
              <div class="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-dark-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <AppButton :href="project.link" target="_blank" variant="primary" size="sm">
                    Découvrir le projet
                  </AppButton>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark-900">
                    {{ project.category }}
                  </span>
                </div>
              </div>
            </a>

            <div class="px-2">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">{{ project.client }}</span>
                <span class="text-sm text-gray-500">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 text-sm mt-2 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-500"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <p class="text-gray-500">Aucun projet dans cette catégorie</p>
        </div>
      </div>
    </AppSection>

    <!-- Stats -->
    <AppSection dark>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
          <div class="text-gray-400">Projets livrés</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
          <div class="text-gray-400">Clients</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
          <div class="text-gray-400">Ans d'expérience</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
          <div class="text-gray-400">Satisfaction</div>
        </div>
      </div>
    </AppSection>

    <!-- CTA -->
    <AppSection>
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-dark-900 mb-4">
          Vous avez un projet en tête ?
        </h2>
        <p class="text-gray-600 mb-8">
          Parlons ensemble de vos besoins et créons quelque chose d'exceptionnel.
        </p>
        <AppButton to="/contact" variant="primary" size="lg">
          Démarrer un projet
        </AppButton>
      </div>
    </AppSection>
  </div>
</template>

<style scoped>
.projects-enter-active,
.projects-leave-active {
  transition: all 0.3s ease;
}
.projects-enter-from,
.projects-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
