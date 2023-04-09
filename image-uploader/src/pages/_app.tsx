import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ImageListProvider } from '@/context'
import { Toaster } from 'react-hot-toast'
import { Layout, LoginModal, RegisterModal } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImageListProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
      <LoginModal />
      <RegisterModal />
    </ImageListProvider>
  )
}
