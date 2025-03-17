import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../types/navigation';
import {Heading, Box} from '@gluestack-ui/themed';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryGroup from '../components/CategoryGroup';
import {Category as Cat} from '../types/meal';
import {FlatList, ListRenderItem} from 'react-native';

type Props = NativeStackScreenProps<RootTabParamList, 'Category'>;

const safeM = '$6';

const Category = ({route}: Props) => {
  const categories = route.params.categories;
  const renderItem: ListRenderItem<Cat> = ({item}) => {
    return (
      <Listcontainer mt={'$5'} listName={item.strCategory}>
        <CategoryGroup />
      </Listcontainer>
    );
  };

  return (
    <Box pt={60} px={safeM}>
      <Heading>Categories</Heading>
      <SearchBar hasFilter={false} />
      <FlatList
        data={categories}
        keyExtractor={(item: Cat) => item.idCategory}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default Category;
