/* eslint-disable prettier/prettier */
import { Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    marginVertical: 20,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#e47911',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
