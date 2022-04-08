import { ISong } from 'models';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Song } from './';

interface SongTableProps {
	songs: ISong[];
}

const SongTable: React.FC<SongTableProps> = props => {
	const { songs } = props;

	const songComponents = songs.map(item => <Song key={item.id} song={item} />);

	return <View style={styles.wrapper}>{songComponents}</View>;
};

export default SongTable;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16
	}
});
