import { UserBadge } from 'components/shared/buttons/badge';
import { IUser } from 'models';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'variables';

interface UserBadgesProps {
	users: IUser[];
}

const UserBadges: React.FC<UserBadgesProps> = props => {
	const { users } = props;

	const userBadgesComponents = users.map(item => (
		<UserBadge
			name={item?.name || ''}
			picture={item.picture}
			userId={item.id}
			key={item.id}
		/>
	));
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Authors</Text>

			{userBadgesComponents}
		</View>
	);
};

export default UserBadges;

const styles = StyleSheet.create({
	wrapper: {},
	title: {
		paddingTop: 14,
		color: colors.white,
		fontSize: 19,
		fontWeight: 'bold',
	},
});
