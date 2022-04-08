import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Button } from 'components/shared';
import { FormInput } from 'components/shared/forms';
import { FieldValidator } from 'helpers/FieldValidator';
import { useAuthState, useForm } from 'hooks';
import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import { colors } from 'variables';

import { AuthPageNav, GoogleButton } from './';
import { styles as styleSheet } from './styles';

const LoginForm = () => {
	const { loginUser } = useAuthState();

	const form = useForm({
		initialValues: { email: '', password: '' },
		validationRules: {
			email: FieldValidator.isEmail,
			password: FieldValidator.isLength(8, 20),
		},
		errorMessages: {
			email: 'email is invalid',
			password: 'password is invalid',
		},
	});

	const login = async () => {
		const valid = form.validate();

		if (valid) {
			const { email, password } = form.values;
			await loginUser(email, password);
		}
	};

	return (
		<View style={styleSheet.wrapper}>
			<LottieView
				style={styleSheet.iconStyle}
				loop={false}
				autoPlay
				speed={0.6}
				source={require('../../assets/animations/87845-hello.json')}
			/>

			<FormInput
				iconName='mail'
				iconColor={colors.accent}
				Icon={Ionicons}
				{...form.getInputProps('email')}
			/>

			<FormInput
				iconName='lock'
				Icon={MaterialIcons}
				iconColor={colors.accent}
				{...form.getInputProps('password')}
			/>

			<Button
				bgColor={colors.accent}
				onPress={login}
				isLoading={false}
				text='Sign In'
				width={290}
			/>

			<AuthPageNav
				link='register'
				linkText='Sign Up'
				text='do not have a account?,'
			/>

			<GoogleButton />
		</View>
	);
};

export default LoginForm;
