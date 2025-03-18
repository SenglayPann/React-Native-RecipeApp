import {HStack, VStack, Box, Image, Text, useToken} from '@gluestack-ui/themed';
import {ImageURISource, StyleSheet, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';
import React, {useEffect, useState} from 'react';
import {fetchCategoryMeal} from '../utils/api';
import {imageSourceConvert} from '../utils/objectUtil';
import Snackbar from 'react-native-snackbar';

type Props = {
  categoryName: string;
};

const CategoryGroup = ({categoryName}: Props) => {
  const [images, setImages] = useState<ImageURISource[]>([]);
  const [imageFetched, setImageFetched] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const gray600 = useToken('colors', 'coolGray600');

  const handleOpenModal = () => {
    setOpenModal(prev => !prev);
  };
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const MealRes = await fetchCategoryMeal(categoryName);
        if (MealRes.meals === null) {
          throw new Error('Invalid Category');
        }

        setImages(imageSourceConvert(MealRes.meals));
        setImageFetched(true);
      } catch (e: any) {
        setError(e.message);
        console.log(e.message);
        Snackbar.show({
          text: error,
          textColor: gray600,
          backgroundColor: 'white',
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Dismiss',
            textColor: gray600,
            // onPress: () => {
            //   /* Do something. */
            // },
          },
        });
      }
    };

    if (!imageFetched) {
      fetchMeals();
    }
  }, [openModal]);

  return (
    <Box flex={1}>
      <HStack w={'$full'}>
        <Box w={'$2/3'} h={150}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.full}
            onPress={handleOpenModal}>
            <Image
              w={'$full'}
              h={'$full'}
              resizeMode={'cover'}
              source={require('../assets/food1.jpg')}
              pr={'$1'}
              borderRadius={20}
              alt={'category image'}
            />
          </TouchableOpacity>
        </Box>
        <VStack w={'$1/3'} pl={'$1'}>
          <Box w={'$full'} h={'$1/2'}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.full}
              onPress={handleOpenModal}>
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
              <TouchableOpacity
                style={styles.full}
                activeOpacity={0.6}
                onPress={handleOpenModal}>
                <Text textAlign="center" w={'$4/5'} color={'$white'}>
                  32+ Recipes
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </VStack>
      </HStack>

      <ImageView
        images={images}
        imageIndex={0}
        visible={openModal && imageFetched}
        presentationStyle="overFullScreen"
        onRequestClose={handleOpenModal}
      />
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
