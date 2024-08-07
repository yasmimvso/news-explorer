
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Title({texto}) {
  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      width: '90%',
      height: '20%',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'Roboto'
  },
});




