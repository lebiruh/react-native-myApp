import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import products from '../../dummyData/products';

interface ProductDataProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    ratings: number;
    avgRating: number;
  };
}

const ProductItem = ({item}: ProductDataProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    console.warn('item pressed');
    navigation.navigate('ProductDetails', {id: item.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <Text style={styles.price}>Birr {item.price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
