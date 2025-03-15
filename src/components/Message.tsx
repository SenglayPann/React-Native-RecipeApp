import {View, Text} from '@gluestack-ui/themed';
import React from 'react';

type Props = {
  message: string;
};

const Message = (props: any) => {
  const {message}: Props = props;

  return (
    <View flex={1} p={'$3'} {...props}>
      <Text textAlign="center" fontSize={'$sm'}>
        {message}
      </Text>
    </View>
  );
};

export default Message;
