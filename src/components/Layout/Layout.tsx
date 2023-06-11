import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import Footer from '../Footer/Footer'

type layoutProps = {
	children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<Box display='flex' flexDirection='column' minH='100vh'>
			<Box flex='1' position='relative'>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Layout
