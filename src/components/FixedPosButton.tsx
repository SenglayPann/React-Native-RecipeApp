import React from 'react';
import {Pressable, useToken} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../types/navigation';

type Props = {
  iconName: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const FixedPosButton = ({iconName, left, right, top, bottom}: Props) => {
  const navigation = useNavigation<TabNavigationProps>();
  const color = useToken('colors', 'blueGray600');
  const size = useToken('fontSizes', 'lg');

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable
      position="absolute"
      left={left}
      right={right}
      top={top ?? 50}
      bottom={bottom ?? 0}
      borderRadius={'$full'}
      backgroundColor="white"
      p={'$3'}
      onPress={handleGoBack}
      width={'$12'}
      height={'$12'}
      alignItems="center"
      justifyContent="center"
      zIndex={100}>
      <Icon name={iconName} color={color} size={size} />
    </Pressable>
  );
};

export default FixedPosButton;
