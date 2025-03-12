import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {Image, Box} from '@gluestack-ui/themed';
import {StyleSheet, useWindowDimensions} from 'react-native';

type Props = {
  thumbUri: string[];
};

const MealGallery = ({thumbUri}: Props) => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const {width} = useWindowDimensions();

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

  return (
    <Box id="carousel-component" width={width}>
      <Box>
        <Carousel
          testID={'recipe-gallery'}
          loop={true}
          width={width}
          height={width}
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
              alt="Meal Image"
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
