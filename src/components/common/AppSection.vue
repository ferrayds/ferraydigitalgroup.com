<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  dark?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

withDefaults(defineProps<Props>(), {
  padding: 'lg',
  dark: false,
})

const paddingClasses = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16 md:py-20 lg:py-24',
  xl: 'py-20 md:py-28 lg:py-32',
}
</script>

<template>
  <section
    :class="[
      paddingClasses[padding],
      dark ? 'bg-dark-900 text-white' : 'bg-white'
    ]"
  >
    <div class="container-custom">
      <div v-if="title || subtitle" class="text-center mb-12 md:mb-16">
        <h2
          v-if="title"
          class="section-title"
          :class="dark ? 'text-white' : 'text-dark-900'"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="section-subtitle mx-auto"
          :class="dark ? 'text-gray-300' : ''"
        >
          {{ subtitle }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
