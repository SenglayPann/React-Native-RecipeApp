import {View, Text} from '@gluestack-ui/themed';
import React from 'react';

type Props = {
  message: string;
};

const Message = ({message}: Props) => {
  return (
    <View flex={1} p={'$3'}>
      <Text textAlign="center" fontSize={'$sm'}>
        {message}
      </Text>
    </View>
  );
};

export default Message;
