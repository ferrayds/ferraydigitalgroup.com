<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'À propos', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2" @click="closeMobileMenu">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
            <span class="text-white font-bold text-lg">F</span>
          </div>
          <span 
            :class="[
              'font-bold text-xl tracking-tight transition-colors',
              isScrolled ? 'text-dark-900' : 'text-dark-900 md:text-white'
            ]"
          >
            Ferray<span class="text-primary-600">Digital</span>
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <router-link
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            :class="[
              'font-medium transition-colors duration-200',
              route.path === item.path
                ? 'text-primary-600'
                : isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white/90 hover:text-white'
            ]"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link
            to="/contact"
            class="btn-primary text-sm"
          >
            Devis gratuit
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg"
          :class="isScrolled ? 'text-gray-700' : 'text-dark-900'"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200/20 pt-4 animate-fade-in-up"
      >
        <div class="flex flex-col gap-4">
          <router-link
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="font-medium text-gray-700 hover:text-primary-600 py-2"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
          <router-link
            to="/contact"
            class="btn-primary text-center mt-2"
            @click="closeMobileMenu"
          >
            Devis gratuit
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
