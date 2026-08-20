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
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home')
              .id('home')
              .child(
                S.document().schemaType('home').documentId('home').title('Home')
              ),
            S.documentTypeListItem('story').title('Stories'),
            S.listItem()
              .title('Films')
              .schemaType('film')
              .child(
                S.documentTypeList('film')
                  .title('Films')
                  .defaultOrdering([{field: 'title', direction: 'asc'}])
              ),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.listItem()
              .title('PDF Portfolio')
              .id('pdfPortfolio')
              .child(
                S.document()
                  .schemaType('pdfPortfolio')
                  .documentId('pdfPortfolio')
                  .title('PDF Portfolio')
              ),
          ]),
    }),
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
