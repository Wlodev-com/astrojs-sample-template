import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import { sitecenter } from 'sitecenter/cms/cloud'

// Your collections imports
import { Users } from './collections/Users'
import { Media } from './collections/Media'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
    admin: {
        user: Users.slug,
    },
    collections: [Users, Media],
    editor: lexicalEditor({}),

    plugins: [sitecenter()],
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
})
