// @ts-ignore
import routes from 'virtual:generated-pages'
import App from './App.vue'
import { ViteSSG } from  'vite-ssg'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)

