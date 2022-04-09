import React from 'react';
import {
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { IMoreTabItem } from 'models';
import { colors } from 'variables';

const getMoreItems = (): IMoreTabItem[] => {
	return [
		{
			Icon: (
				<MaterialCommunityIcons
					name='heart-outline'
					size={24}
					color={colors.lightText}
				/>
			),
			text: 'Like this track',
		},

		{
			Icon: (
				<MaterialCommunityIcons
					name='cloud-download-outline'
					size={24}
					color={colors.lightText}
				/>
			),
			text: 'Download this song',
		},

		{
			Icon: <FontAwesome5 name='user' size={24} color={colors.lightText} />,
			text: 'Show the author',
		},

		{
			Icon: (
				<MaterialIcons name='playlist-add' size={24} color={colors.lightText} />
			),
			text: 'Add to playlist',
		},
	];
};

export default getMoreItems;
