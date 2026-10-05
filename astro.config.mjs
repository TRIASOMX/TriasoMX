import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  redirects: {
    '/tambores-mezcladores': '/tambores-mezcladores/contraflujo-pro',
  },
});