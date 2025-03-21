import React from 'react';
import {Box, Text, HStack} from '@gluestack-ui/themed';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

type ListContainerProps = {
  children: React.ReactNode;
  listName: string;
  handleNavigate?: (event: GestureResponderEvent) => void;
};

const safeM = '$5';

function Listcontainer(props: any) {
  const {children, listName, handleNavigate}: ListContainerProps = props;

  return (
    <Box w={'$full'} pr={'$0'} py={0} {...props}>
      <HStack mb={'$4'} justifyContent={'space-between'}>
        <Text color={'black'} fontWeight={'$bold'} fontSize={'$lg'}>
          {listName}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleNavigate ? handleNavigate : () => null}>
          <Text size={'sm'} color={'green'} pr={safeM}>
            See all
          </Text>
        </TouchableOpacity>
      </HStack>
      {children}
    </Box>
  );
}

export default Listcontainer;
