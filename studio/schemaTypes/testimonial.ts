import {Rule} from 'sanity'

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'couple',
      title: 'Couple Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image1',
      title: 'First Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image2',
      title: 'Second Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
  ],
  preview: {
    select: {
      title: 'couple',
      subtitle: 'testimonial',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}

