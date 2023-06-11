import { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/Layout/Layout'
import { theme } from '@/chakra-ui/theme'
import { store } from '@/redux/store'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/types/AuthTypes'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
