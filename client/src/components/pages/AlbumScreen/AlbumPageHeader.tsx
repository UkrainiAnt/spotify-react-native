import { FontAwesome5 } from '@expo/vector-icons';
import { IconButton } from 'components/shared';
import { GoBackButton } from 'components/shared/buttons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'variables';

interface AlbumPageHeaderProps {
	albumId: number;
}

const AlbumPageHeader: React.FC<AlbumPageHeaderProps> = props => {
	const { albumId } = props;

	return (
		<View style={styles.wrapper}>
			<GoBackButton isAbsolute={false} />

			<View style={{ flex: 1 }} />

			<View style={styles.container}>
				<IconButton
					style={{ marginHorizontal: 5 }}
					Icon={<FontAwesome5 name='heart' size={24} color={colors.white} />}
				/>
			</View>
		</View>
	);
};

export default AlbumPageHeader;

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: 40,
		flexDirection: 'row',
		paddingHorizontal: 10,
		justifyContent: 'space-between'
	},
	container: {
		flexDirection: 'row',
		marginRight: 'auto'
	}
});
