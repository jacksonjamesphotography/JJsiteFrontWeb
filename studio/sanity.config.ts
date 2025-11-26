import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'

// Import schemas
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Jackson Photography Site',

  projectId: '41ocmoqs',
  dataset: 'production',

  // Needed so Studio opens at /studio inside Next.js
  basePath: '/studio',

  plugins: [
    structureTool(),
    media({
      // Enable multiple image selection
      creditLine: {
        enabled: false,
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
