<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  hover: true,
})
</script>

<template>
  <div
    class="card"
    :class="[
      padding === 'none' ? '' : padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6',
      hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
    ]"
  >
    <slot>
      <h3 v-if="title" class="text-xl font-semibold text-dark-900 mb-2">
        {{ title }}
      </h3>
      <p v-if="subtitle" class="text-gray-600">
        {{ subtitle }}
      </p>
    </slot>
  </div>
</template>
