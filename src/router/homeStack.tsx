import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import BottomTabNav from './bottomTabNav';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import HeaderComponent from '../components/HeaderComponent';
// import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

function HomeStack() {
  const [search, setSearch] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: () => <HeaderComponent search={search} setSearch={setSearch} />,
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen search={search} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetails" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
