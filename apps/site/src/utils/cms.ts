import { createCMSClient } from 'sitecenter/cms/client'
// @ts-ignore
import type { Config } from '../../../cms/src/payload-types'

export const cms = createCMSClient<Config>({
    baseURL: 'http://localhost:3000/api',
})
