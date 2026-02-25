<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Politique de Confidentialité | Ferray Digital Group',
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Politique de Confidentialité
        </h1>
        <p class="text-gray-300 text-lg">
          Dernière mise à jour : 25 février 2026
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">1</span>
              Introduction
            </h2>
            <p class="leading-relaxed text-gray-700">
              La présente Politique de Confidentialité décrit comment <strong>Ferray Digital Group</strong> collecte, utilise et protège vos données personnelles.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">2</span>
              Données collectées
            </h2>
            <p class="leading-relaxed text-gray-700 mb-4">Nous collectons :</p>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Formulaire de contact :</strong> nom, email, téléphone, entreprise, message</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">3</span>
              Finalités du traitement
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li>Répondre à vos demandes</li>
              <li>Améliorer notre site et services</li>
              <li>Vous contacter dans le cadre de nos prestations</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">4</span>
              Conservation des données
            </h2>
            <p class="leading-relaxed text-gray-700">
              Les données sont conservées pour une durée de <strong>3 ans maximum</strong>. Les données de navigation sont anonymisées (13 mois).
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">5</span>
              Vos droits
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Droit d'accès</strong></li>
              <li><strong>Droit de rectification</strong></li>
              <li><strong>Droit à l'effacement</strong></li>
              <li><strong>Droit d'opposition</strong></li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">6</span>
              Sécurité
            </h2>
            <p class="leading-relaxed text-gray-700">
              Nous mettons en œuvre des mesures de sécurité pour protéger vos données.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">7</span>
              Contact
            </h2>
            <p class="leading-relaxed text-gray-700">
              Pour toute question : 
              <a href="mailto:hello@ferraydigitalgroup.com" class="text-blue-600 hover:underline">hello@ferraydigitalgroup.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
