/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderComponentProps {
  search: string;
  setSearch: (value: string) => void;
}

const HeaderComponent = ({search, setSearch}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#2095e3'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <MaterialIcons name="search" size={26} />
        <TextInput
          placeholder="Search..."
          style={{height: 40}}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
