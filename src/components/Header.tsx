import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Heading,
  HStack,
  Text,
} from '@gluestack-ui/themed';

const safeM = '$6';

function Header() {
  return (
    <Box mx={safeM} mt={safeM}>
      <HStack>
        <Box flex={1}>
          <Text size="sm" color="#7d7d7d">
            Hello, Senglay Pann.
          </Text>
          <Heading>What would you like to cook today?</Heading>
        </Box>
        <Avatar size="md">
          <AvatarFallbackText>Senglay Pann</AvatarFallbackText>
          <AvatarImage
            source={require('../assets/senglay-pann.jpg')}
            alt={'User profile'}
          />
        </Avatar>
      </HStack>
    </Box>
  );
}

export default Header;
