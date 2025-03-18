import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../types/navigation';
import {Heading, Box} from '@gluestack-ui/themed';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';
import CategoryGroup from '../components/CategoryGroup';
import {Category as Cat} from '../types/meal';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import FixedPosButton from '../components/FixedPosButton';

type Props = NativeStackScreenProps<RootTabParamList, 'Category'>;

const safeM = '$6';

const Category = ({route}: Props) => {
  const categories = route.params.categories;
  const renderItem: ListRenderItem<Cat> = ({item}) => {
    return (
      <Listcontainer mt={'$5'} listName={item.strCategory}>
        <CategoryGroup categoryName={item.strCategory} />
      </Listcontainer>
    );
  };
  console.log(categories);

  return (
    <Box pt={60} px={safeM}>
      <Box alignItems="center">
        <FixedPosButton left={0} top={-5} iconName="long-arrow-left" />
        <Heading>Categories</Heading>
      </Box>
      <SearchBar hasFilter={false} />
      <FlatList
        style={styles.flatlistContainer}
        data={categories}
        keyExtractor={(item: Cat) => item.idCategory}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    marginBottom: 120,
  },
});

export default Category;
