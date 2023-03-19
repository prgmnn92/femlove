import BlockCTA from '../components/BlockCTA'
import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'p', value: 'p'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Line', value: 'hr'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          title: 'alt',
          name: 'alt',
          type: 'string',
        },
        {
          title: 'maxWidth',
          name: 'maxWidth',
          type: 'number',
        },
        {
          title: 'isInline',
          name: 'isInline',
          type: 'boolean',
        },
      ],
    }),
    defineArrayMember({
      title: 'Internal Link',
      type: 'object',
      name: 'internalLink',
      fields: [
        {
          title: 'ID',
          name: 'id',
          type: 'string',
        },
        {
          title: 'Value',
          name: 'value',
          type: 'string',
        },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'blockCTA',
      fields: [
        // fields must be defined, and it must be an array
        {
          name: 'ButtonText', // field name is required and must be unique
          type: 'string', // field type is required
        },
      ],
      components: {
        annotation: BlockCTA,
      },
    }),
    defineArrayMember({
      title: 'Video blog post',
      name: 'videoBlogPost',
      type: 'document',
      fields: [
        {title: 'Title', name: 'title', type: 'string'},
        {
          title: 'Video file',
          name: 'video',
          type: 'mux.video',
        },
      ],
    }),
  ],
})
