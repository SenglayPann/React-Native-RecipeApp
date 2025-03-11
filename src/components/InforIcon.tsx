import React from 'react';
import {HStack, Text, useToken} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  iconName: string;
  content: string;
};

const InforIcon = ({iconName, content}: Props) => {
  const gray400 = useToken('colors', 'coolGray400');
  return (
    <HStack alignItems="center">
      <Icon name={iconName} size={18} color={gray400} />
      <Text fontWeight={'light'} fontSize={'$xs'} color={'$coolGray400'} ml={3}>
        {content}
      </Text>
    </HStack>
  );
};

export default InforIcon;
