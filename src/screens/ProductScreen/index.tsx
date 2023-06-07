import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import product from '../../dummyData/product';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const route = useRoute();

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/*image carousel */}
      <ImageCarousel images={product.images} />

      {/*number of views */}
      <Text style={styles.views}>{product.views} views</Text>

      {/*price */}
      <Text style={styles.price}>Birr {product.price}</Text>

      {/*description */}
      <Text style={styles.description}>{product.description}</Text>

      {/*buttons */}
      <Button text={'Call Advertiser'} onPress={() => {}} />
      <Button text={'Message Advertiser'} onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;
