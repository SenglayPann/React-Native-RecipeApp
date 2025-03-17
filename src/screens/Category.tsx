import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTabParamList} from '../types/navigation';
import {Heading, ScrollView} from '@gluestack-ui/themed';
import SearchBar from '../components/SearchBar';

type Props = NativeStackScreenProps<RootTabParamList, 'Category'>;

const safeM = '$6';

const Category = ({route}: Props) => {
  return (
    <ScrollView pt={60} px={safeM}>
      <Heading>Categories</Heading>
      <SearchBar hasFilter={false} />
    </ScrollView>
  );
};

export default Category;
