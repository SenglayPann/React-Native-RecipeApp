import React from 'react';
import { ScrollView , FlatList } from 'react-native';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Listcontainer from '../components/Listcontainer';

const data = [

  {
    id: 1,
    name: 'hello',
  },
  {
    id: 2,
    name: 'holla'
  }
];

function RecipeList() {
  return (
    <Box>
      <Header/>
      <SearchBar/>
      <Listcontainer
        listName={'Caxtegories'}
      >
        <Text>
          Test Catecgories
        </Text>
      </Listcontainer>
    </Box>
  );
}

export default RecipeList;
