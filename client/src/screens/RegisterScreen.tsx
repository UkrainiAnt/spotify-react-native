import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RegisterForm } from '../components/auth';
const RegisterScreen = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<KeyboardAvoidingView style={styles.container}>
				<RegisterForm />
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#24293e'
	},
	container: {
		marginBottom: 30
	}
});
