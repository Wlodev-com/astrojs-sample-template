import { withPayload } from '@payloadcms/next/withPayload'
import { withSitecenter } from 'sitecenter'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
}

export default withSitecenter(withPayload(nextConfig))
