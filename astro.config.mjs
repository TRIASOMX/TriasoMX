import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  // Dominio final del sitio. Provisional: confirmar www / sin www antes de lanzar.
  site: 'https://www.triaso.com.mx',
  integrations: [tailwind(), react()],
  redirects: {
    '/tambores-mezcladores': '/tambores-mezcladores/contraflujo-pro',
  },
});