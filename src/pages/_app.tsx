import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import MainProvider from '@/providers/MainProvider'
import { TypeComponentAuthFields } from '@/types/AuthTypes'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
