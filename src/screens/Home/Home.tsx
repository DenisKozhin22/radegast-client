import About from '@/components/About/About'
import Header from '@/components/Header/Header'
import Teachers from '@/components/Teachers/Teachers'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<>
			<Header />
			<Teachers/>
			<About />
		</>
	)
}

export default Home
