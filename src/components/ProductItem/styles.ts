import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    flexDirection: 'row',
    backgroundColor: 'fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
