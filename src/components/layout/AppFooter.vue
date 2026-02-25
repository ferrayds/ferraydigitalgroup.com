<script setup lang="ts">
const currentYear = new Date().getFullYear()

const services = [
  { name: 'Conseil informatique', path: '/services#conseil' },
  { name: 'Développement logiciel', path: '/services#developpement' },
  { name: 'Solutions SaaS', path: '/services#saas' },
  { name: 'Paiement & Fintech', path: '/services#fintech' },
  { name: 'Marketing digital', path: '/services#marketing' },
  { name: 'Formation tech', path: '/services#formation' },
]

const company = [
  { name: 'À propos', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Carrières', path: '/careers' },
]

const contact = [
  { name: 'hello@ferraydigitalgroup.com', href: 'mailto:hello@ferraydigitalgroup.com' },
  { name: '+229 01 6100 3050', href: 'tel:+2290161003050' },
  {
    name: 'Réserver un RDV',
    href: 'https://calendly.com/ferraydigitalsolutions/consultation-personnalisee',
    isButton: true,
  },
]

const socials = [
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/61570017856457' },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/company/ferray-digital-solutions',
  },
  {
    name: 'WhatsApp',
    icon: 'whatsapp',
    url: 'https://wa.me/22961003050?text=Bonjour, je viens de visiter votre site web et je vous contacte pour...',
  },
]
</script>

<template>
  <footer class="bg-dark-900 text-white pt-16 pb-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="mb-4 bg-white rounded-lg p-1">
            <img
              src="https://ferraydigitalsolutions.com/logo.png"
              alt="Ferray Digital Group"
              class="w-48 h-auto object-contain"
            />
          </div>
          <p class="text-gray-400 text-sm mb-6 leading-relaxed">
            Votre partenaire de confiance pour la transformation digitale. Nous concevons des
            solutions innovantes pour propulser votre entreprise.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              class="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <svg
                v-if="social.icon === 'facebook'"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <svg
                v-else-if="social.icon === 'linkedin'"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <svg
                v-else-if="social.icon === 'whatsapp'"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Services</h4>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.path">
              <router-link
                :to="service.path"
                class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Entreprise -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Entreprise</h4>
          <ul class="space-y-3">
            <li v-for="item in company" :key="item.path">
              <router-link
                :to="item.path"
                class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-lg mb-4">Contact</h4>
          <ul class="space-y-3">
            <li v-for="item in contact" :key="item.name">
              <a
                v-if="item.isButton"
                :href="item.href"
                target="_blank"
                class="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                {{ item.name }}
              </a>
              <a
                v-else
                :href="item.href"
                class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
          <div class="mt-6">
            <p class="text-gray-400 text-sm mb-2">Gbègnigan, Abomey-Calavi, Benin</p>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-dark-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Ferray Digital Group. Tous droits réservés.
          </p>
          <div class="flex gap-6">
            <router-link to="/mentions-legales" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Mentions légales
            </router-link>
            <router-link to="/politique-confidentialite" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              Politique de confidentialité
            </router-link>
            <router-link to="/conditions-generales" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">
              CGU
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
