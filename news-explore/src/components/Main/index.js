import React from 'react';
import { View, StyleSheet } from 'react-native';
import Explorer from '../Explorer/';
import Title from '../Title/';

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Title texto={"NewsExplore"} />
      <Explorer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop:50
  }
});
