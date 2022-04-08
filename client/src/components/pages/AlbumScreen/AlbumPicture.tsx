import { IAlbum } from 'models';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { colors } from 'variables';
import { useContext } from 'react';
import {
	ScrollContext,
	ScrollContextProps,
} from 'providers/scroll/scroll.context';

interface AlbumPictureProps {
	album: IAlbum;
}

const AlbumPicture: React.FC<AlbumPictureProps> = props => {
	const { album } = props;
	const { scroll } = useContext<ScrollContextProps>(ScrollContext);

	return (
		<View style={styles.wrapper}>
			<View style={styles.imageWrapper}>
				<Image
					style={styles.image(230 - scroll)}
					source={{ uri: album.picture }}
					fadeDuration={0}
				/>
			</View>
		</View>
	);
};

export default React.memo(AlbumPicture);

const styles = StyleSheet.create({
	image: (minusSize: number) => ({
		width: minusSize,
		height: minusSize,
		borderRadius: 8,
	}),
	wrapper: {
		paddingBottom: 12,
		paddingTop: 20,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageWrapper: {
		width: Dimensions.get('screen').width,
		height: 230,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},

	subtitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.secondary,
		opacity: 0.8,
	},

	genre: {
		fontSize: 14,
		fontWeight: 'bold',
		color: colors.white,
		opacity: 0.8,
	},
} as any);
