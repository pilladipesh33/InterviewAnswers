import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from './Color';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { Image } from 'react-native';
import IconButton from './Component';

const BottomSheetCounter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Your Prediction is Under</Text>
      <Text style={styles.bodyContentText}>ENTRY TICKET</Text>
      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
        renderItem={(data, index) => {
          //
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={163}
        wrapperWidth={343}
        wrapperColor="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={2}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>You can win</Text>
          <Text style={styles.bottomText2}>$2000</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{fontWeight: '500', fontSize: 15, color: Colors.DARK_GREY}}>Total  </Text>
          <Image source={require('../../assets/images/coin.png')} style={styles.imageSize} />
          <Text style={{fontWeight: '600', fontSize: 17, color: Colors.BLACK2}}>  5</Text>
        </View>
      </View>
      <View style={{paddingTop: 20, paddingBottom: 10}}>
      <IconButton title={'Submit my prediction'} buttonStyle={styles.buttonDesign} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headingText: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.BLACK2,
  },
  bodyContentText: {
    paddingTop: 20,
    fontWeight: '600',
    fontSize: 16,
    color: Colors.DARK_GREY,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomContent: {
    flexDirection: 'column',
  },
  bottomText: {
    color: Colors.GREY,
    fontWeight: '500',
    fontSize: 15,
  },
  bottomText2: {
    color: Colors.DARK_GREEN,
    fontWeight: '500',
    fontSize: 15,
  },
  imageSize: {
    height: 13,
    width: 13,
  },
  buttonDesign: {
    width: '100%',
    borderRadius: 45,
    backgroundColor: Colors.BLUE,
  },
});

export default BottomSheetCounter;
