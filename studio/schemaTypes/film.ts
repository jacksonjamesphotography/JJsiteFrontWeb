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
      name: 'videoUrl',
      title: 'Dropbox Video URL',
      type: 'url',
      description:
        'Paste a Dropbox share link. Prefer ending with raw=1 (or dl=1). Example: https://www.dropbox.com/scl/fi/.../film.mp4?...&raw=1',
      validation: (Rule: Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
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
