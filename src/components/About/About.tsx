import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { GiLoveSong } from 'react-icons/gi'
import { FaGuitar } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'

const About: FC = () => {
	return (
		<Container maxW='1300px'>
			<Box py='30px'>
				<Heading as='h2' textAlign='center' mb='20px' fontWeight={400}>
					Добро пожаловать в Центр Музыки города Канска!
				</Heading>
				<Heading
					as='h3'
					textAlign='center'
					color='#7D7A7A'
					fontSize='25px'
					fontWeight={400}
					mb='40px'>
					Мы объединяем всех музыкантов города Канска. У нас вы сможете:
				</Heading>
				<Flex justifyContent='space-between' flexWrap='wrap'>
					<Box flex='1'>
						<GiLoveSong
							size={80}
							style={{
								margin: '0 auto 15px',
							}}
						/>
						<Heading as='h3' fontSize='20px' fontWeight={300} textAlign='center'>
							Отрепетировать авторский материал
						</Heading>
					</Box>
					<Box flex='1'>
						<FaGuitar
							size={80}
							style={{
								margin: '0 auto 15px',
							}}
						/>
						<Heading as='h3' fontSize='20px' fontWeight={300} textAlign='center'>
							Наконец-то научиться играть на инструменте
						</Heading>
					</Box>
					<Box flex='1'>
						<BsPeopleFill
							size={80}
							style={{
								margin: '0 auto 15px',
							}}
						/>
						<Heading as='h3' fontSize='20px' fontWeight={300} textAlign='center'>
							Выступать <br /> перед друзьями
						</Heading>
					</Box>
					<Box flex='1'>
						<IoIosPeople
							size={80}
							style={{
								margin: '0 auto 15px',
							}}
						/>
						<Heading as='h3' fontSize='20px' fontWeight={300} textAlign='center'>
							Успеть обзавестись новыми знакомствами
						</Heading>
					</Box>
				</Flex>
			</Box>
		</Container>
	)
}

export default About
