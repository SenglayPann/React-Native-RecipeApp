import React from 'react';
import {
  HStack,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  SearchIcon,
  useToken,
  Divider,
  Pressable,
} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

type Props = {
  hasFilter?: boolean;
};

const safeM = '$5';

const SearchBar = ({hasFilter = true}: Props) => {
  const size = useToken('fontSizes', 'lg');

  return (
    <HStack
      my={safeM}
      borderRadius={'$full'}
      backgroundColor={'white'}
      borderColor={'white'}>
      <Input
        variant="rounded"
        size="md"
        flex={1}
        height={'$12'}
        // isReadOnly={true}
        isFocused={false}
        backgroundColor={'white'}
        borderColor={'white'}>
        <InputSlot pl={safeM}>
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search any recipe" />
      </Input>
      {hasFilter && (
        <HStack alignItems={'center'}>
          <Divider
            orientation={'vertical'}
            mr={'$3'}
            h={'$2/3'}
            width={'$0.5'}
          />
          <Pressable pr={safeM} onPress={() => console.log('test')}>
            <TouchableOpacity>
              <Icon name="filter" size={size} color={'#7d7d7d'} />
            </TouchableOpacity>
          </Pressable>
        </HStack>
      )}
    </HStack>
  );
};

export default SearchBar;
