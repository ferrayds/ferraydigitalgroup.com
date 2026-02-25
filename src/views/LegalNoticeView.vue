<script setup lang="ts">
import { useHead } from '@vueuse/head'
import AppSection from '@/components/common/AppSection.vue'

useHead({
  title: 'Mentions Légales | Ferray Digital Group',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <div class="absolute inset-0 bg-dark-gradient"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Mentions Légales
        </h1>
        <p class="text-gray-300 text-lg">
          Informations légales relatives au site
        </p>
      </div>
    </section>

    <!-- Content -->
    <AppSection>
      <div class="max-w-4xl space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">1</span>
            Éditeur du site
          </h2>
          <div class="bg-gray-50 p-6 rounded-xl">
            <p class="leading-relaxed text-gray-700 mb-2">
              Le site <strong>ferraydigitalgroup.com</strong> est édité par :
            </p>
            <p class="font-semibold text-dark-900">Ferray Digital Group</p>
            <p class="text-gray-700">Gbègnigan, Abomey-Calavi</p>
            <p class="text-gray-700">République du Benin</p>
            <p class="mt-4 text-gray-700">
              <strong>Email :</strong> <a href="mailto:hello@ferraydigitalgroup.com" class="text-blue-600 hover:underline">hello@ferraydigitalgroup.com</a><br>
              <strong>Téléphone :</strong> <a href="tel:+2290161003050" class="text-blue-600 hover:underline">(+229) 01 6100 3050</a>
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">2</span>
            Hébergement
          </h2>
          <div class="bg-gray-50 p-6 rounded-xl">
            <p class="leading-relaxed text-gray-700 mb-2">Le site est hébergé par :</p>
            <p class="font-semibold text-dark-900">Vercel Inc.</p>
            <p class="text-gray-700">440 N Barranca Ave #4133</p>
            <p class="text-gray-700">Covina, CA 91723, USA</p>
            <p class="text-gray-700">Site : <a href="https://vercel.com" target="_blank" class="text-blue-600 hover:underline">vercel.com</a></p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">3</span>
            Propriété intellectuelle
          </h2>
          <p class="leading-relaxed text-gray-700">
            L'ensemble des éléments présents sur ce site est protégé par les droits de propriété intellectuelle. Toute reproduction sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">4</span>
            Responsabilité
          </h2>
          <p class="leading-relaxed text-gray-700">
            Les informations sont fournies à titre informatif. <strong>Ferray Digital Group</strong> ne peut garantir leur exhaustivité ou exactitude.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">5</span>
            Liens hypertextes
          </h2>
          <p class="leading-relaxed text-gray-700">
            Le site peut contenir des liens vers d'autres sites. Nous déclinons toute responsabilité quant à leur contenu.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-dark-900 mb-4 flex items-center gap-3">
            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">6</span>
            Droit applicable
          </h2>
          <p class="leading-relaxed text-gray-700">
            Les présentes mentions sont régies par le droit béninois. Les tribunaux béninois sont seuls compétents.
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
    </AppSection>
  </div>
</template>
