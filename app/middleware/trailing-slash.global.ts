import { withoutTrailingSlash } from 'ufo'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.endsWith('/') && to.path !== '/') {
    return navigateTo(withoutTrailingSlash(to.fullPath), { redirectCode: 301 })
  }
})
