import { dayts } from 'lib/dayts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'variables';

interface DateProps {
	createdAt: Date;
	updatedAt: Date;
}

const getCalendarDate = (date: Date) => dayts().calendar(dayts(date));

const Date: React.FC<DateProps> = props => {
	const { createdAt, updatedAt } = props;

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Created at: {getCalendarDate(createdAt)}</Text>
			<Text style={styles.subtitle}>
				Last Update at: {getCalendarDate(updatedAt)}
			</Text>
		</View>
	);
};

export default Date;

const styles = StyleSheet.create({
	wrapper: {
		width: '100%'
	},
	title: {
		fontWeight: 'bold',
		color: colors.white
	},
	subtitle: {
		color: colors.lightText
	}
});
