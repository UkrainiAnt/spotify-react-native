import { StyleSheet, View } from 'react-native';
import React from 'react';
import { getSongMoreItems } from '.';
import { MoreListItem } from 'components/shared/forms/listItems';

const MappedMoreItems = () => {
	const moreItems = getSongMoreItems();

	const moreListItemComponents = moreItems.map((item, idx) => (
		<MoreListItem
			Icon={item.Icon}
			text={item.text}
			onPress={() => {
				return;
			}}
			key={idx}
		/>
	));

	return <View style={styles.wrappper}>{moreListItemComponents}</View>;
};

export default MappedMoreItems;

const styles = StyleSheet.create({
	wrappper: {},
});
