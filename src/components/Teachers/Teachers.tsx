import { Card, CardBody, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FC } from 'react'

const Teachers: FC = () => {
	return (
		<Container maxW='1300px' px='4' py='5'>
			<Heading textAlign='center' fontWeight={400}>
				Наши преподаватели
			</Heading>
			<Flex
				justifyContent={['center', 'center', 'center', 'center', 'space-between']}
				flexWrap='wrap'>
				<Card maxW='sm' bg='transparent' color='white'>
					<CardBody>
						<Image src='/Sanyaya.png' alt='Green double couch with wooden legs' borderRadius='lg' />
						<Stack mt='6' spacing='3'>
							<Heading size='md' textAlign='center' fontWeight={500}>
								Александр
							</Heading>
							<Text textAlign='center'>
								Барабанный монстр. Поможет вам встать на тернистый барабанный путь
							</Text>
						</Stack>
					</CardBody>
				</Card>
				<Card maxW='sm' bg='transparent' color='white'>
					<CardBody>
						<Image src='/Denis.png' alt='Green double couch with wooden legs' borderRadius='lg' />
						<Stack mt='6' spacing='3'>
							<Heading size='md' textAlign='center' fontWeight={500}>
								Денис
							</Heading>
							<Text textAlign='center'>
								Многолетний опыт игры на электрогитаре, профессионально владеет экстрим-вокалом
							</Text>
						</Stack>
					</CardBody>
				</Card>
				<Card maxW='sm' bg='transparent' color='white'>
					<CardBody>
						<Image
							src='/Sanyaya2.png'
							alt='Green double couch with wooden legs'
							borderRadius='lg'
						/>
						<Stack mt='6' spacing='3'>
							<Heading size='md' textAlign='center' fontWeight={500}>
								Александр
							</Heading>
							<Text textAlign='center'>
								Мастер над басс-гитарой. Быстро привьёт к вам любовь к этому интрументу
							</Text>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
		</Container>
	)
}

export default Teachers
