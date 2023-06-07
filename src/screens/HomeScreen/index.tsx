/* eslint-disable prettier/prettier */
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../dummyData/products';
import React from 'react';

const HomeScreen = ({search}:{search: string}) => {
  console.log(search);
  return (
    <View style={styles.page}>
      {/*Render product component*/}
      {/* <ProductItem item={products[3]}/> */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item}/>}
        showsVerticalScrollIndicator={false}
        // keyExtractor={({id}) => id }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
