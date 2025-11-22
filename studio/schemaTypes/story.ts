import {Rule} from 'sanity'

export default {
  name: 'story',
  title: 'Story Gallery',
  type: 'document',
  fields: [
    {
      name: 'coupleName',
      title: 'Couple Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'coupleName',
        maxLength: 100,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Photos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule: Rule) => Rule.min(1),
    },
  ],
}
