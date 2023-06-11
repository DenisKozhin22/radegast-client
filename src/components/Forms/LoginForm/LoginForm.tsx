import { FC } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

// Chakra-UI
import { Input, FormControl, FormLabel, Button, Box } from '@chakra-ui/react'
import { ILoginProps } from '@/types/request/ILoginProps'

import { useLogin } from '@/hooks/userHooks/useLogin'
const LoginForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginProps>({
		mode: 'onSubmit',
	})
	const { login } = useLogin()

	const onSubmit: SubmitHandler<ILoginProps> = async data => {
		await login(data)
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
				<FormLabel>Email</FormLabel>
				<Input
					variant='main'
					placeholder='Введите email'
					colorScheme='blackAlpha'
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
				Войти
			</Button>
		</Box>
	)
}

export default LoginForm
