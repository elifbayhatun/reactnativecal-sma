import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

function Card(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.2,
    backgroundColor: 'tomato',
    marginBottom: 10,
  },
  text: {color: 'white', fontSize: 22, fontWeight: 'bold'},
  description: {color: '#000', fontSize: 16, fontWeight: 'bold'},
  time: {color: 'gray', fontSize: 12},
});

export default Card;
