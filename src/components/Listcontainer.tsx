import React from 'react';
import {Box, Text, HStack} from '@gluestack-ui/themed';

type ListContainerProps = {
  children: React.ReactNode;
  listName: string;
};

const safeM = '$5';

function Listcontainer({children, listName}: ListContainerProps) {
  return (
    <Box w={'$full'} p={safeM} pr={'$0'}>
      <HStack mb={'$4'} justifyContent={'space-between'}>
        <Text color={'black'} fontWeight={'$bold'} fontSize={'$lg'}>
          {listName}
        </Text>
        <Text size={'sm'} color={'green'} pr={safeM}>
          See all
        </Text>
      </HStack>
      {children}
    </Box>
  );
}

export default Listcontainer;
