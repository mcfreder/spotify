import '@styles/globals.scss'

import Auth from '@components/Auth'
import Fallback from '@components/Auth/fallback'
import { ContextProvider } from '@xstate/context'
import { SWRConfig } from 'swr'
import { fetcher } from '@lib/hooks'
import Layout from '@components/Layout'

function App({ Component, pageProps, router }) {
  return (
    <ContextProvider>
      <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
        <Auth fallback={<Fallback />}>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </Auth>
      </SWRConfig>
    </ContextProvider>
  )
}

export default App
