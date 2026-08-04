import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'portfolioImages',
      title: 'Portfolio Section Images (6 portraits)',
      type: 'array',
      description:
        'OPTIONAL — leave empty to keep the current website portfolio images. To replace them, upload exactly 6 PORTRAIT (vertical) images only. Portrait = taller than wide. Do NOT upload landscape/horizontal photos.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      options: {
        layout: 'grid',
        sortable: true,
      },
      validation: (Rule) =>
        Rule.custom((images) => {
          if (!images || images.length === 0) return true
          if (images.length !== 6) {
            return 'Add exactly 6 portrait images, or leave empty to keep the default website images.'
          }
          return true
        }),
    }),
    defineField({
      name: 'ctaStoriesImage',
      title: 'CTA Stories Image',
      type: 'image',
      description: 'Left-side image on the home page Stories / Films CTA section',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ctaFilmsImage',
      title: 'CTA Films Image',
      type: 'image',
      description: 'Right-side image on the home page Stories / Films CTA section',
      options: {hotspot: true},
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        subtitle: 'Portfolio + CTA images',
      }
    },
  },
})
