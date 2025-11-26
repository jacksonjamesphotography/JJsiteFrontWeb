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
        'IMPORTANT: To upload multiple images at once, drag and drop multiple image files from your computer directly onto this grid area. The file picker dialog only allows single selection.',
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
