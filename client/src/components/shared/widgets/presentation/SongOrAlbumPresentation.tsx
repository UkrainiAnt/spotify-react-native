import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { Subtitle, Title } from 'components/shared/typography';

interface PresentAlbumOrSongProps {
	image: string;
	title: string;
	name: string;
	imageSize?: number;
	marginTop?: number;
	imageStyle?: ViewStyle;
	containerStyle?: ViewStyle;
	textWrapperStyle?: ViewStyle;
}

const PresentAlbumOrSong: React.FC<PresentAlbumOrSongProps> = props => {
	const {
		image,
		title,
		name,
		imageSize = 160,
		marginTop = 140,
		imageStyle = {},
		containerStyle = {},
		textWrapperStyle = {},
	} = props;

	const styles = StyleSheet.create({
		wrapper: {
			marginTop,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			...containerStyle,
		},

		image: {
			borderRadius: 3,
			width: imageSize,
			height: imageSize,
			...(imageStyle as any),
		},

		textWrapper: {
			textAlign: 'center',
			alignItems: 'center',
			...textWrapperStyle,
		},
	});

	return (
		<View style={styles.wrapper}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.textWrapper}>
				<Title>{title}</Title>

				<Subtitle>{name[0].toUpperCase() + name.slice(1)}</Subtitle>
			</View>
		</View>
	);
};

export default PresentAlbumOrSong;
