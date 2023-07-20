import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Colors} from './Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const BoxWithIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../assets/images/big_coin.png')}
          style={styles.icon}
        />
        <View style={styles.boxContainer}>
        <View style={styles.boxContent}>
          <Text
            style={{fontWeight: '600', fontSize: 17, color: Colors.DARK_GREY}}>
            Under or Over
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="arrow-up-circle-sharp"
              size={32}
              color={Colors.LIGHT_GREEN}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 29,
                color: Colors.GREY2,
                paddingLeft: 10,
              }}>
              81%
            </Text>
          </View>
        </View>
        <View style={styles.boxContent}>
          <Text
            style={{fontWeight: '600', fontSize: 17, color: Colors.DARK_GREY}}>
            Top 5
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="arrow-down-circle-sharp"
              size={32}
              color={Colors.RED}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 29,
                color: Colors.GREY2,
                paddingLeft: 10,
              }}>
              -51%
            </Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: Colors.BORDER_COLOR,
    width: '100%',
    height: 103,
    borderRadius: 10,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
    height: 40,
    width: 40,
  },
  boxContent: {
    flexDirection: 'column',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
});
