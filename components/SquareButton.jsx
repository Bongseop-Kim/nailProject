import React from 'react';

import { Text, StyleSheet, Pressable } from 'react-native';

const SquareButton = ({ text, onPress }) => {
  return (
    <>
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#77c3ec',
  },
  text: {
    color: '#77c3ec',
    fontWeight: '500',
  },
});
export default SquareButton;
