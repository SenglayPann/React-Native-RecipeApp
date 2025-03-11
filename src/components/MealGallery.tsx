import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {Image, View} from '@gluestack-ui/themed';
import {useWindowDimensions} from 'react-native';

type Props = {
  thumbUri: string[];
};

const MealGallery = ({thumbUri}: Props) => {
  const scrollOffsetValue = useSharedValue<number>(0);
  const {width} = useWindowDimensions();

  return (
    <View id="carousel-component" width={width}>
      <Carousel
        testID={'recipe-gallery'}
        loop={true}
        width={width}
        snapEnabled={true}
        // pagingEnabled={true}
        // autoPlay={true}
        autoPlayInterval={2000}
        data={thumbUri}
        defaultScrollOffsetValue={scrollOffsetValue}
        onConfigurePanGesture={(g: {enabled: (arg0: boolean) => any}) => {
          'worklet';
          g.enabled(false);
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
    </View>
  );
};

export default MealGallery;
