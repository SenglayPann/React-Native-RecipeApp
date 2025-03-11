import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {Image, Pressable, useToken, Box} from '@gluestack-ui/themed';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProps} from '../types/navigation';

type Props = {
  thumbUri: string[];
};

const MealGallery = ({thumbUri}: Props) => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const {width} = useWindowDimensions();
  const color = useToken('colors', 'blueGray600');
  const size = useToken('fontSizes', 'lg');

  const navigation = useNavigation<TabNavigationProps>();
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    'worklet';
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Box id="carousel-component" width={width}>
      <Box>
        <Carousel
          testID={'recipe-gallery'}
          loop={true}
          width={width}
          height={width}
          // snapEnabled={true}
          // pagingEnabled={true}
          autoPlay={true}
          autoPlayInterval={3000}
          data={thumbUri}
          defaultScrollOffsetValue={scrollOffsetValue}
          scrollAnimationDuration={1000}
          onConfigurePanGesture={(g: {enabled: (arg0: boolean) => any}) => {
            'worklet';
            g.enabled(false);
          }}
          onProgressChange={(_, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          renderItem={({item}) => (
            <Image
              source={{
                uri: item,
              }}
              resizeMode="contain"
              width={width}
              height={width}
            />
          )}
        />
      </Box>

      <Box position="absolute" width={'$full'} bottom={35}>
        <Pagination.Basic<{thumbUri: string}>
          progress={progress}
          data={thumbUri}
          size={10}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          containerStyle={styles.containerStyle}
          horizontal
          onPress={onPressPagination}
        />
      </Box>

      <Pressable
        position="absolute"
        left={20}
        top={50}
        borderRadius={'$full'}
        backgroundColor="white"
        p={'$3'}
        onPress={handleGoBack}
        width={'$12'}
        height={'$12'}
        alignItems="center"
        justifyContent="center">
        <Icon name="long-arrow-left" color={color} size={size} />
      </Pressable>

      <Pressable
        position="absolute"
        right={20}
        top={50}
        borderRadius={'$full'}
        backgroundColor="white"
        p={'$3'}
        onPress={handleGoBack}
        width={'$12'}
        height={'$12'}
        alignItems="center"
        justifyContent="center">
        <Icon name="bookmark" color={color} size={size} />
      </Pressable>
    </Box>
  );
};

export default MealGallery;

const styles = StyleSheet.create({
  dotStyle: {
    borderRadius: 100,
    backgroundColor: '#acaab1',
  },
  activeDotStyle: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#f1f1f1',
  },
  containerStyle: {
    gap: 5,
    marginBottom: 10,
  },
});
