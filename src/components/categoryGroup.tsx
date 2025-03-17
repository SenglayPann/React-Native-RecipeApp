import {HStack, VStack, Box, Image, Text} from '@gluestack-ui/themed';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CategoryGroup = () => {
  return (
    <Box flex={1}>
      <HStack w={'$full'}>
        <Box w={'$2/3'} h={150}>
          <TouchableOpacity activeOpacity={0.6} style={styles.full}>
            <Image
              w={'$full'}
              h={'$full'}
              resizeMode={'center'}
              source={require('../assets/food1.jpg')}
              pr={'$1'}
              borderRadius={20}
              alt={'category image'}
            />
          </TouchableOpacity>
        </Box>
        <VStack w={'$1/3'} pl={'$1'}>
          <Box w={'$full'} h={'$1/2'}>
            <TouchableOpacity activeOpacity={0.6} style={styles.full}>
              <Image
                w={'$full'}
                h={'$full'}
                resizeMode={'cover'}
                source={require('../assets/food2.jpg')}
                pb={'$1'}
                borderRadius={10}
                alt={'category image'}
              />
            </TouchableOpacity>
          </Box>
          <Box w={'$full'} h={'$1/2'} pt={'$1'}>
            <Image
              w={'$full'}
              h={'$full'}
              resizeMode={'cover'}
              source={require('../assets/food3.jpg')}
              borderRadius={10}
              alt={'category image'}
            />
            <Box
              w={'$full'}
              h={'$full'}
              mt={'$1'}
              borderRadius={10}
              bgColor="#000000AA"
              position="absolute"
              alignItems="center"
              justifyContent="center">
              <TouchableOpacity style={styles.full} activeOpacity={0.6}>
                <Text textAlign="center" w={'$4/5'} color={'$white'}>
                  32+ Recipes
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryGroup;
