import { initCMSClient } from 'sitecenter'
import type { Config } from '../../../cms/src/payload-types'

export const cms = initCMSClient<Config>({
    url: `${import.meta.env.CMS_URL}/api`,
})
