import {Rule} from 'sanity'

export default {
  name: 'film',
  title: 'Film',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail (Optional)',
      type: 'image',
      options: {hotspot: true},
    },
    // Hidden stub: Studio persists a sort on coupleName remotely.
    // Without this field the Films list crashes. Safe to leave forever.
    {
      name: 'coupleName',
      type: 'string',
      hidden: true,
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
}
