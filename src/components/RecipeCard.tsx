import { Box, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

function RecipeCard({ data }: any) {
  return (
    <Box
      flex={1} p={'$4'}
      borderRadius={'$md'}
      shadowOpacity={1}
      shadowColor="#000000"
      shadowOffset={{
        width: 0,
        height: 0,
      }}
      shadowRadius={1}
      elevation={1}
      bg="#FFFFFF"
      mx={2}
    >
      <VStack>
        <Text>{JSON.stringify(data)}</Text>
      </VStack>
    </Box>
  );
}

export default RecipeCard;
