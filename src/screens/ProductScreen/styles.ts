/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  title:{},
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 20,
  },
  views: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
    backgroundColor: 'lightgrey',
    color: '#000',
    padding: 5,
    borderRadius: 10,
    width: '99%',
    alignSelf: 'center',
  },
});

export default styles;
