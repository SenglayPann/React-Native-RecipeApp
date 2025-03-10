import React from 'react';
import {
  Box,
  HStack,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  SearchIcon,
  useToken,
  Divider,
} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const safeM = '$5';

function SearchBar() {
  const size = useToken('fontSizes', 'lg');

  return (
    <Box m={safeM}>
      <HStack>
        <Input
          variant="rounded"
          size="md"
          width="$full"
          height={'$12'}
          isReadOnly={true}
          isFocused={false}
          backgroundColor={'white'}
          borderColor={'white'}
        >
          <InputSlot pl={safeM}>
            <InputIcon as={SearchIcon}/>
          </InputSlot>
          <InputField placeholder="Search any recipe" />
          <Divider
            orientation={'vertical'}
            mr={'$3'}
            alignSelf={'center'}
            h={'$2/3'}
            width={'$0.5'}
          />
          <InputSlot pr={safeM}>
            <Icon
              name="filter"
              size={size}
              color={'#7d7d7d'}
            />
          </InputSlot>
        </Input>
      </HStack>
    </Box>
  );
}

export default SearchBar;
