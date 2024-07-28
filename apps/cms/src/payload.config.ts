import path from 'path'
import { fileURLToPath } from 'url'
import { sitecenter } from 'sitecenter'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

// Your collections imports
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
    },
    collections: [Users, Media, Pages],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
        connectOptions: {
            minPoolSize: 1,
            maxPoolSize: 1,
            maxIdleTimeMS: 1000,
        },
    }),
    plugins: [sitecenter()],
})
