import { StyleSheet } from 'react-native';
import React from 'react';
import { fakeAlbums } from 'mocks';
import { AlbumList } from 'components/shared/widgets/album';
import { ScrollView } from 'react-native';

const Lente = () => {
	const albumListComponents = fakeAlbums.map(({ albums, id, title }) => (
		<AlbumList albums={albums} title={title} key={id} />
	));
	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			{albumListComponents}
		</ScrollView>
	);
};

export default Lente;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});
