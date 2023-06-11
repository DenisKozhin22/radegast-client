import { FC } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

// Chakra-UI
import { Input, FormControl, FormLabel, Button, Box } from '@chakra-ui/react'
import { IRegisterProps } from '@/types/request/IRegisterProps'
import { useLogin } from '@/hooks/userHooks/useLogin'
import { useRegister } from '@/hooks/userHooks/useRegister'
const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterProps>({
		mode: 'onSubmit',
	})
	const { registration } = useRegister()

	const onSubmit: SubmitHandler<IRegisterProps> = async data => {
		await registration(data)
	}
	return (
		<Box
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			borderRadius='md'>
			<FormControl display='flex' flexDirection='column' gap='10px'>
				<FormLabel>Имя</FormLabel>
				<Input
					variant='main'
					placeholder='Введите имя'
					size='lg'
					type='text'
					borderColor={errors?.name ? 'red.500' : ''}
					{...register('name')}
				/>
				<FormLabel>Email</FormLabel>
				<Input
					variant='main'
					placeholder='Введите email'
					size='lg'
					type='email'
					borderColor={errors?.email ? 'red.500' : ''}
					{...register('email')}
				/>
				<FormLabel>Пароль</FormLabel>
				<Input
					variant='main'
					placeholder='Введите пароль'
					size='lg'
					type='password'
					borderColor={errors?.password ? 'red.500' : ''}
					{...register('password')}
				/>
			</FormControl>
			<Button mt={4} minW='230px' bg='yellow.300' color='blackAlpha.900' size='lg' type='submit'>
				Зарегистрироваться
			</Button>
		</Box>
	)
}

export default RegisterForm
