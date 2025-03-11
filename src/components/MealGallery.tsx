import React from 'react';
import {View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {Image} from '@gluestack-ui/themed';

type Props = {
  thumbUri: string[];
};

const MealGallery = ({thumbUri}: Props) => {
  const scrollOffsetValue = useSharedValue<number>(0);

  return (
    <View id="carousel-component">
      <Carousel
        testID={'xxx'}
        loop={true}
        width={430}
        height={258}
        snapEnabled={true}
        pagingEnabled={true}
        // autoPlay={true}
        autoPlayInterval={2000}
        data={thumbUri}
        // mode="vertical-stack"
        defaultScrollOffsetValue={scrollOffsetValue}
        style={{width: '100%'}}
        onScrollStart={() => {
          console.log('Scroll start');
        }}
        onScrollEnd={() => {
          console.log('Scroll end');
        }}
        onConfigurePanGesture={(g: {enabled: (arg0: boolean) => any}) => {
          'worklet';
          g.enabled(false);
        }}
        onSnapToItem={(index: number) => console.log('current index:', index)}
        renderItem={({item}) => (
          <Image
            source={{
              uri: item,
            }}
          />
        )}
      />
    </View>
  );
};

export default MealGallery;
