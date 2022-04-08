import { ICategory } from 'models';
import React from 'react';
import { View } from 'react-native';

import { AlbumList } from './';

interface CategoriesProps {
	categories: ICategory[];
}

const Categories: React.FC<CategoriesProps> = props => {
	const { categories } = props;

	const categoriesComponents = categories.map(item => (
		<AlbumList albums={item.albums} title={item.title} key={item.id} />
	));

	return <View>{categoriesComponents}</View>;
};

export default Categories;
