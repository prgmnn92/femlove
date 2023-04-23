import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
import {defaultDocumentNode} from './src/defaultDocumentNode'
import {resolveProductionUrl} from './resolveProductionUrl'
import MyCustomLogo from './components/Logo'
import MyEnhancedNavbar from './components/Navbar'
import {theme} from 'https://themer.sanity.build/api/hues?preset=retro-colonial'

export default defineConfig({
  name: 'default',
  title: 'femlove',
  theme: theme,
  projectId: '6jxlprba',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
    muxInput({mp4_support: 'standard'}),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    productionUrl: resolveProductionUrl,
  },

  studio: {
    components: {
      logo: MyCustomLogo,
      navbar: MyEnhancedNavbar,
    },
  },
})
