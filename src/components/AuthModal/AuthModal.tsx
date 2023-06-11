import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	Tabs,
	useDisclosure,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react'
import { FC, useRef } from 'react'
import LoginForm from '../Forms/LoginForm/LoginForm'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'

const AuthModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = useRef(null)
	const finalRef = useRef(null)

	return (
		<>
			<Button variant='main' size='sm' onClick={onOpen}>
				Войти
			</Button>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent bgColor='purple.700'>
					<ModalHeader>Авторизация</ModalHeader>
					<ModalCloseButton />
					<ModalBody p={6}>
						<Tabs isFitted variant='auth'>
							<TabList mb='1em'>
								<Tab>Вход</Tab>
								<Tab>Регистрация</Tab>
							</TabList>
							<TabPanels>
								<TabPanel p='0'>
									<LoginForm />
								</TabPanel>
								<TabPanel p='0'>
									<RegisterForm />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AuthModal
