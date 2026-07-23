import {Rule} from 'sanity'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'ctaStoriesImage',
      title: 'CTA Stories Image',
      type: 'image',
      description: 'Left-side image on the home page Stories / Films CTA section',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ctaFilmsImage',
      title: 'CTA Films Image',
      type: 'image',
      description: 'Right-side image on the home page Stories / Films CTA section',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        subtitle: 'CTA images',
      }
    },
  },
}
