// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...setupLayouts(routes),
  ],
})

export default router
