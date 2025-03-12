import {View, Text} from '@gluestack-ui/themed';
import React from 'react';

type Props = {
  message: string;
};

const Message = ({message}: Props) => {
  return (
    <View flex={1} justifyContent="center" p={'$3'}>
      <Text>{message}</Text>
    </View>
  );
};

export default Message;
