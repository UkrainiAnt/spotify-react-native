import { StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { IAlbum } from 'models';
import { RecentItem } from '.';

interface RecentItemsProps {
	items: IAlbum[];
}

const RecentItems: React.FC<RecentItemsProps> = props => {
	const { items } = props;

	const recentComponents = items.map(item => <RecentItem item={item} />);

	return (
		<ScrollView
			style={{ width: '100%' }}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{recentComponents}
		</ScrollView>
	);
};

export default RecentItems;

const styles = StyleSheet.create({});
