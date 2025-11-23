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
      description:
        'You can drag and drop multiple images here, or use the "Add" button and select multiple images in the media library.',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      options: {
        layout: 'grid',
        sortable: true,
      },
      validation: (Rule: Rule) => Rule.min(1),
    },
  ],
}
