import { withPayload } from '@payloadcms/next/withPayload'
import { withSitecenter } from 'sitecenter/cms/withSitecenter'

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withSitecenter(withPayload(nextConfig))
