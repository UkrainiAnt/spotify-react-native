import React from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { IMoreTabItem } from 'models';
import { colors } from 'variables';

const more_items = (): IMoreTabItem[] => {
	return [
		{
			Icon: (
				<MaterialCommunityIcons
					name='heart-outline'
					size={24}
					color={colors.lightText}
				/>
			),
			text: 'Like this album',
		},

		{
			Icon: (
				<MaterialCommunityIcons
					name='heart-multiple-outline'
					size={24}
					color={colors.lightText}
				/>
			),
			text: 'Like all songs',
		},

		{
			Icon: <FontAwesome5 name='user' size={24} color={colors.lightText} />,
			text: 'Show the author',
		},

		{
			Icon: (
				<MaterialCommunityIcons
					name='share-variant'
					size={24}
					color={colors.lightText}
				/>
			),
			text: 'Share with others',
		},
	];
};

export default more_items;
