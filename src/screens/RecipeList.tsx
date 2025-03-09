import React from 'react';
import { ScrollView , FlatList } from 'react-native';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header'

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
      <Box flex={1} p="$4">
        <FlatList 
        data={data}
        numColumns={2}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => <RecipeCard data={item}/>}
        />
        
      </Box>
    </Box>
  );
}

export default RecipeList;
