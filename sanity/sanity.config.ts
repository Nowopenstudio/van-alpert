import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'van-alpert',

  projectId: 'rybbl0h4',
  dataset: 'production',
  token:'sk9TMW3FrPZQRUgjHXpB4TEwHF8EGHYosMpOrTCC9uW6Cpp1MRX8vKdhu87JO1ODSod7GfB0T5xTfNA9TDoBr6ki978jQ8flSTSXUug1LJzZVS6AXE6c21V6pqQOiSpNG4rOOZnqq8MGoXmfGcG4wAZK75iBBcKv8dctWodkWrULv883XFDG',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
