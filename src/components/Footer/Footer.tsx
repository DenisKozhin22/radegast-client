import { FC } from 'react'
import { Box, Container, Flex, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

const Footer: FC = () => {
	return (
		<Box as='footer' borderTop='4px solid #F6E05E' flex='0 0 auto'>
			<Container maxW='1000px'>
				<Flex justifyContent='space-around' py='36px' flexWrap='wrap'>
					<Flex flexDirection='column'>
						<Heading variant='footer' as='h2' fontWeight={400}>
							О нас
						</Heading>
						<Link as={NextLink} href='#' textAlign='center'>
							ул 40 лет Октября, 3
						</Link>
						<Link as={NextLink} href='#' textAlign='center'>
							8 (924) 616-04-54
						</Link>
					</Flex>
					<Flex flexDirection='column'>
						<Heading variant='footer' as='h2' fontWeight={400}>
							Поддержка
						</Heading>
						<Link as={NextLink} href='#' textAlign='center'>
							8 (923) 272-37-81
						</Link>
					</Flex>
					<Flex flexDirection='column'>
						<Heading variant='footer' as='h2' fontWeight={400}>
							Сообщества
						</Heading>
						<Flex justifyContent='center' gap='20px'>
							<Link as={NextLink} href='#' textAlign='center'>
								<Image src='/vk-icon.svg' alt='vk' width={45} height={39} />
							</Link>
							<Link as={NextLink} href='#' textAlign='center'>
								<Image src='/tg-icon.svg' alt='tg' width={45} height={45} />
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Footer
