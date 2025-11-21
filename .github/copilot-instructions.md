# Copilot Instructions for Tailwind Vite Project

## Project Overview
This is a **Vue 3 + Vite + Tailwind CSS** project using Rolldown-based Vite (`npm:rolldown-vite@7.2.2`). The project is transitioning toward a unified Vue architecture; note that both `App.jsx` (React) and `App.vue` (Vue) exist, but `App.vue` is the active component in development.

**Key Stack:**
- Framework: Vue 3 with `<script setup>` SFC syntax
- Build Tool: Vite (via rolldown)
- Styling: Tailwind CSS 4.x with `@tailwindcss/vite` plugin
- Entry Point: `src/main.jsx` → `index.html#root`

## Build & Development Workflow

### Commands
```bash
npm run dev     # Start dev server (watch mode with HMR)
npm run build   # Production build to dist/
npm run preview # Preview production build locally
```

**HMR Enabled**: Vue components update instantly during development via `@vitejs/plugin-vue` (v6.0.1).

## Architecture & Components

### File Organization
- `src/App.vue` - Root Vue component (active)
- `src/App.jsx` - Legacy React entry (keep for reference, consider removal)
- `src/components/` - Vue SFC components (currently only `HelloWorld.vue`)
- `src/style.css` - Global Tailwind CSS entry point (`@import "tailwindcss"`)

### Styling Approach
Tailwind CSS is integrated via `@tailwindcss/vite` plugin in `vite.config.js`:
- No `tailwind.config.js` needed; uses Tailwind v4 defaults
- Apply utility classes directly in JSX/Vue templates: `className="text-4xl font-bold text-green-500"`
- CSS scoping in Vue components via `<style scoped>` blocks

## Component Patterns

### Vue 3 `<script setup>` Convention
All Vue components should use modern `<script setup>` syntax:
```vue
<script setup>
import { ref } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

defineProps({ title: String })
const count = ref(0)
</script>

<template>
  <div>{{ title }} - {{ count }}</div>
  <ChildComponent />
</template>
```

### Current Components
- **HelloWorld.vue**: Example with reactive state (`ref`) and slot messaging
- **App.vue**: Root layout, no state currently needed

## Critical Developer Notes

### Mixed React/Vue Setup
The project contains both `App.jsx` and `App.vue`. The current entry point (`main.jsx`) loads `App.jsx` in development but `App.vue` exists for Vue components. **Action**: When adding new features, develop in Vue components under `src/components/`, not React. Consider deprecating `App.jsx` once full Vue migration is complete.

### Vite Configuration
Vite config is minimal (`vite.config.js`):
```javascript
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```
Plugin order matters: `vue()` must run before `tailwindcss()`.

### Known Issues
- Terminal showed exit code 1 on `npm start` (likely due to npm script mismatch; use `npm run dev`)

## Integration Points

- **Tailwind + Vite**: Auto-included via `@tailwindcss/vite` (no JIT config needed)
- **Vue + Vite**: HMR enabled automatically for `.vue` files
- **HTML Entry**: `index.html` with `<div id="root"></div>` and deferred module script

## Coding Preferences for This Project

1. **Use Vue 3 Composition API** with `<script setup>` for all new components
2. **Prefer Tailwind utilities** over custom CSS (e.g., `class="flex items-center"` not `<style>`)
3. **Keep component files focused** - one major component per `.vue` file
4. **Reference existing patterns** in `HelloWorld.vue` for state management examples
