/* eslint-disable prettier/prettier */
import {View, FlatList, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, { useCallback, useState } from 'react';

interface ImagesProp {
  images: string[];
}

const ImageCarousel = ({images}: ImagesProp) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const updateImagePages = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image style={[styles.image, {width: windowWidth - 40}]} source={{uri: item}} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        onViewableItemsChanged={updateImagePages}
      />

      <View style={styles.dots}>
        {images.map((image, index) => (
          // eslint-disable-next-line react-native/no-inline-styles
          <View key={index} style={[styles.dot, {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]} />
         ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {

  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin: 5,
  },
});

export default ImageCarousel;
