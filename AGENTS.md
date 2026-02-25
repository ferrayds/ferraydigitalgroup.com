# Agent Guidelines for ferraydigitalgroup.com

Guidelines for agentic coding agents on this Vue 3 + TypeScript project.

## Project Overview

- **Framework**: Vue 3 with Composition API (`<script setup lang="ts">`)
- **Build Tool**: Vite (beta)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **State Management**: Pinia
- **Routing**: Vue Router

## Commands

### Development
```bash
pnpm dev              # Start dev server with hot reload
pnpm preview          # Preview production build
```

### Building
```bash
pnpm build            # Type-check, compile and minify for production
pnpm build-only      # Only build (skip type-check)
```

### Testing
```bash
pnpm test:unit                         # Run all unit tests with Vitest
pnpm test:unit -- src/__tests__/App.spec.ts    # Run single test file
pnpm test:unit -- --run                # Run tests once (not watch mode)
pnpm test:unit -- --reporter=verbose   # Verbose output
pnpm test:unit -- "App mounts"         # Run tests matching filter
```

### Linting & Formatting
```bash
pnpm lint            # Run all linters (oxlint + eslint)
pnpm lint:oxlint    # Run oxlint only with auto-fix
pnpm lint:eslint    # Run ESLint only with auto-fix
pnpm format          # Format code with Prettier
```

### Type Checking
```bash
pnpm type-check     # Run vue-tsc for TypeScript checking
```

## Code Style Guidelines

### Formatting (Prettier)
- **Print width**: 100 characters
- **Single quotes**: Use single quotes for strings
- **Semicolons**: No semicolons at end of statements

### Imports
Use absolute imports with `@/` prefix. Group in order: Vue core, Vue ecosystem, third-party, internal.
```typescript
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useCounterStore } from '@/stores/counter'
```

### TypeScript
Always use TypeScript. Avoid `any`. Use interfaces for object shapes.
```typescript
interface User {
  id: number
  name: string
  email: string
}
function getUser(id: number): Promise<User> {
  return axios.get(`/api/users/${id}`)
}
```

### Naming Conventions
- **Components**: PascalCase (`UserProfile.vue`)
- **Variables/Functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE
- **Store names**: kebab-case in defineStore (e.g., `'counter'`)
- **Composables**: prefix with `use` (e.g., `useCounter`)

### Vue Component Style
Use Composition API with `<script setup lang="ts">`.
```typescript
interface Props {
  title: string
  count?: number
}
const props = withDefaults(defineProps<Props>(), { count: 0 })
const emit = defineEmits<{ update: [value: number] }>()
```

### Error Handling
Use try/catch for async operations. Handle errors with meaningful messages.
```typescript
async function fetchData() {
  try {
    const response = await api.get('/data')
    return response.data
  } catch (error) {
    if (error instanceof Error) console.error('Failed:', error.message)
    throw error
  }
}
```

### Testing Guidelines
- Place tests in `src/__tests__/` with `.spec.ts` suffix
- Use `@vue/test-utils` for component mounting
- Follow AAA pattern (Arrange, Act, Assert)
```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  it('increments count', () => {
    const wrapper = mount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
```

### CSS/SCSS
Use scoped styles. Prefer CSS custom properties for theming.
```vue
<style scoped>
.button--primary { background: var(--primary-color); }
</style>
```

### File Organization
```
src/
├── __tests__/       # Unit tests
├── assets/          # Static assets
├── components/     # Reusable Vue components
├── composables/    # Vue composables (useXxx)
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── views/          # Page-level components
├── App.vue         # Root component
└── main.ts         # Entry point
```

### Linting Rules
- oxlint runs with `correctness` category set to error
- ESLint includes Vue, TypeScript, Unicorn plugins
- Run `pnpm lint` before committing

### Common Patterns
```typescript
const count = ref(0)
const doubled = computed(() => count.value * 2)
const increment = () => count.value++

watch(someRef, (newValue) => { console.log('Changed:', newValue) })

export const useStore = defineStore('name', () => {
  const state = ref(initial)
  const getter = computed(() => state.value)
  function action() { /* ... */ }
  return { state, getter, action }
})
```

## IDE Setup
- VS Code with Vue - Official extension (Volar)
- Enable "Take Over Mode" in Vue extension
- Install recommended extensions from `.vscode/extensions.json`

## Notes
- Path alias `@/` maps to `./src/`
- Tests use jsdom environment
- Build target: modern browsers (ES2020+)
