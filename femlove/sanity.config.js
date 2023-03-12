import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'femlove',

  projectId: '6jxlprba',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), muxInput({mp4_support: 'standard'})],

  schema: {
    types: schemaTypes,
  },
})
