import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constant/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Today's Game</Text>
      <View style={styles.boxContainer}>
        <View style={styles.smallBoxContainer}>
          <View style={styles.boxHeadingContainer}>
            <Text style={styles.boxTitle}>
              UNDER OR OVER{' '}
              <Ionicons
                name="information-circle-outline"
                size={13}
                color={Colors.WHITE}
              />
            </Text>
            <Text style={styles.boxTimer}>
              Starting in{' '}
              <AntDesign name="clockcircle" size={14} color={Colors.PURPLE} />{' '}
              03:23:13{' '}
            </Text>
          </View>
          <View style={styles.boxBodyContent}>
            <Text style={styles.boxBodyContentText}>Bitcoin price will be under</Text>
            <Text style={styles.boxBodyContentText2}>$24,524 at 7 a ET on 22nd Jan'21</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.BLACK,
    paddingBottom: '5%',
  },
  boxContainer: {
    height: 389,
    width: '100%',
    borderColor: Colors.BORDER_COLOR,
    borderWidth: 1,
  },
  smallBoxContainer: {
    padding: 10,
    backgroundColor: Colors.BLUE,
    height: 104,
    width: '100%',
  },
  boxHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  boxTitle: {
    color: Colors.WHITE,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  boxTimer: {
    color: Colors.LIGHT_PURPLE,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  boxBodyContent: {
    paddingTop: 15
  },
  boxBodyContentText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.LIGHT_PURPLE
  },
  boxBodyContentText2: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,

  }
});

export default Home;
