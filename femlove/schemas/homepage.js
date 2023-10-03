import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'hero_h1',
      title: 'Hero H1',
      type: 'string',
    }),
    defineField({
      name: 'hero_paragraph',
      title: 'Hero Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'about_text',
      title: 'About Text',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      hero_h1: 'hero_h1',
      hero_paragraph: 'hero_paragraph',
      about_text: 'about_text',
    },
  },
})
