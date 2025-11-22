import {Rule} from 'sanity'

export default {
  name: 'film',
  title: 'Film',
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
      name: 'videos',
      title: 'YouTube Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'url', title: 'YouTube URL', type: 'url'}],
        },
      ],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail (Optional)',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
