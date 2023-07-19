import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from './Color';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.filler, { width: '75%' }]} />
      <View style={[styles.filler, { width: '25%', backgroundColor: '#FF6347' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%', // Customize the width of the progress bar
    height: 10, // Customize the height of the progress bar
    borderRadius: 10,
    backgroundColor: Colors.GREEN, // First color - 75% filled
    overflow: 'hidden',
  },
  filler: {
    height: '100%',
    // borderRadius: 10,
    backgroundColor: Colors.PINK, // Second color - 25% filled
  },
});

export default ProgressBar;
