<script setup lang="ts">
import { ref } from 'vue'
import AppSection from '@/components/common/AppSection.vue'
import AppButton from '@/components/common/AppButton.vue'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const FORMSPREE_URL = 'https://formspree.io/f/mdalyrwe'

const services = [
  { value: '', label: 'Sélectionnez un service' },
  { value: 'conseil', label: 'Conseil informatique' },
  { value: 'developpement', label: 'Développement logiciel' },
  { value: 'saas', label: 'Solutions SaaS' },
  { value: 'fintech', label: 'Paiement & Fintech' },
  { value: 'marketing', label: 'Marketing digital' },
  { value: 'formation', label: 'Formation tech' },
  { value: 'autre', label: 'Autre' },
]

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    error.value = 'Veuillez remplir tous les champs obligatoires'
    return
  }

  isSubmitting.value = true
  error.value = ''

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        company: form.value.company,
        phone: form.value.phone,
        service: form.value.service,
        message: form.value.message
      })
    })

    if (response.ok) {
      isSubmitted.value = true
      form.value = {
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      }
      setTimeout(() => {
        isSubmitted.value = false
      }, 5000)
    } else {
      error.value = 'Une erreur est survenue. Veuillez réessayer.'
    }
  } catch (e) {
    error.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  {
    icon: 'mail',
    title: 'Email',
    value: 'hello@ferraydigitalgroup.com',
    href: 'mailto:hello@ferraydigitalgroup.com',
  },
  {
    icon: 'phone',
    title: 'Téléphone',
    value: '(+229) 01 6100 3050',
    href: 'tel:+2290161003050',
  },
  {
    icon: 'location',
    title: 'Adresse',
    value: 'Gbègnigan, Abomey-Calavi, Benin',
    href: '#',
  },
]
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
           Contactez-<span class="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">nous</span>
          </h1>
          <p class="text-xl text-gray-300">
            Une question, un projet ? Parlons-en !
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <AppSection>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Contact Info -->
        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-6">
            Parlons de votre projet
          </h2>
          <p class="text-gray-600 mb-8">
            Remplissez le formulaire et notre équipe vous contactera dans les 24 heures.
            Nous sommes disponibles pour discuter de vos besoins et vous accompagner dans votre transformation digitale.
          </p>

          <div class="space-y-6 mb-8">
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="flex items-center gap-4"
            >
              <div class="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <svg v-if="info.icon === 'mail'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <svg v-else-if="info.icon === 'phone'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <svg v-else class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm text-gray-500">{{ info.title }}</div>
                <a :href="info.href" class="text-dark-900 font-medium hover:text-primary-600 transition-colors">
                  {{ info.value }}
                </a>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-semibold text-dark-900 mb-3">Horaires d'ouverture</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Lundi - Vendredi</span>
                <span class="text-dark-900 font-medium">9h00 - 18h00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Samedi</span>
                <span class="text-dark-900 font-medium">Sur RDV</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Dimanche</span>
                <span class="text-dark-900 font-medium">Fermé</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div v-if="isSubmitted" class="text-center py-12">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-dark-900 mb-2">Message envoyé !</h3>
            <p class="text-gray-600 mb-6">
              Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <AppButton @click="isSubmitted = false" variant="secondary">
              Envoyer un autre message
            </AppButton>
          </div>

          <form v-else @submit.prevent="submitForm" class="space-y-6">
            <div v-if="error" class="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {{ error }}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="input-field"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="input-field"
                  placeholder="john@exemple.com"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  class="input-field"
                  placeholder="Votre entreprise"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="input-field"
                  placeholder="+229 01 6100 3050"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Service souhaité
              </label>
              <select v-model="form.service" class="input-field">
                <option v-for="option in services" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="input-field resize-none"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <AppButton
              type="submit"
              variant="primary"
              class="w-full"
              :loading="isSubmitting"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
            </AppButton>
          </form>
        </div>
      </div>
    </AppSection>

    <!-- Map -->
    <section class="h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6184.861532138569!2d2.319045!3d6.404362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a965e5b22219%3A0x2ec9e99248ddff32!2sFerray%20Digital%20Solutions!5e1!3m2!1sfr!2sbj!4v1772031475443!5m2!1sfr!2sbj"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  </div>
</template>
