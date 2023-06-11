import {
	useDisclosure,
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerCloseButton,
	Input,
	DrawerFooter,
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const Burger: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isOpenHamburger, setOpenHamburger] = useState<boolean>(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const onCloseMenu = () => {
		onClose()
		setOpenHamburger(false)
	}

	const onOpneMenu = () => {
		onOpen()
		setOpenHamburger(true)
	}
	return (
		<>
			<Button variant='burger' ref={btnRef} colorScheme='teal' onClick={onOpneMenu}>
				<Hamburger easing='ease-in' rounded toggled={isOpenHamburger} />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				size='xs'
				onClose={onCloseMenu}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent
					bg='purple.800'>
					<DrawerCloseButton />
					<DrawerHeader>RadeCast</DrawerHeader>

					<DrawerBody>
						Какой-то контент
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onCloseMenu}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Burger
