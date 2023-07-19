import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constant/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconButton from '../constant/Component';
import ColoredBar from '../constant/ColorBar';
import ProgressBar from '../constant/ColorBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Today's Game</Text>
      <View style={styles.boxContainer}>
        {/* TOP CONTENT */}
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
            <Text style={styles.boxBodyContentText}>
              Bitcoin price will be under
            </Text>
            <Text style={styles.boxBodyContentText2}>
              $24,524 at 7 a ET on 22nd Jan'21
            </Text>
          </View>
        </View>
        {/* MIDDLE CONTENT */}
        <View style={{padding: '5%'}}>
          <View style={styles.boxMiddleContent}>
            <Text style={styles.boxMiddleContentText}>PRIZE POOL</Text>
            <Text style={styles.boxMiddleContentText}>UNDER</Text>
            <Text style={styles.boxMiddleContentText}>OVER</Text>
            <Text style={styles.boxMiddleContentText}>ENTRY FEE</Text>
          </View>
          <View style={styles.boxMiddleContent}>
            <Text style={styles.boxMiddleContentText2}>$12,000</Text>
            <Text style={styles.boxMiddleContentText2}> 3.25x</Text>
            <Text style={styles.boxMiddleContentText2}>1.25x </Text>
            <Text style={styles.boxMiddleContentText2}>5</Text>
          </View>
          <Text
            style={{
              paddingTop: 10,
              color: Colors.DARK_GREY,
              fontSize: 17,
              fontWeight: '600',
            }}>
            What's your prediction?
          </Text>
          <View style={styles.buttonContainer}>
            <IconButton
              title="Under"
              iconName={'arrow-down'}
              buttonStyle={styles.buttonDesign}
              textStyle={styles.buttonText}
            />
            <IconButton
              title="Over"
              iconName={'arrow-up'}
              buttonStyle={styles.buttonDesign2}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
        {/* BOTTOM CONTENT */}
        <View style={styles.bottomContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}>
            <View style={styles.chartContainer}>
              <Ionicons name="person" size={15} color={Colors.DARK_GREY} />
              <Text style={styles.chartContainerText}> 355 Players</Text>
            </View>
            <View style={styles.chartContainer}>
              <FontAwesome5
                name="chart-area"
                size={20}
                color={Colors.DARK_GREY}
              />
              <Text style={styles.chartContainerText}> View chart</Text>
            </View>
          </View>
          <View style={{}}>
            <View style={styles.progressBar}>
              <ProgressBar />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 5,
              }}>
              <View style={styles.chartContainer}>
                <Text style={styles.chartContainerText2}>
                  232 predicted under
                </Text>
              </View>
              <View style={styles.chartContainer}>
                <Text style={styles.chartContainerText2}>
                  123 predicted over
                </Text>
              </View>
            </View>
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
    paddingTop: 15,
  },
  boxBodyContentText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.LIGHT_PURPLE,
  },
  boxBodyContentText2: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
  },
  boxMiddleContent: {
    padding: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxMiddleContentText: {
    fontWeight: '500',
    lineHeight: 14,
    color: Colors.GREY,
  },
  boxMiddleContentText2: {
    fontWeight: '600',
    lineHeight: 19,
    alignSelf: 'center',
    color: Colors.BLACK,
  },
  buttonDesign: {
    width: 148,
    borderRadius: 45,
    backgroundColor: Colors.DARK_PURPLE,
  },
  buttonDesign2: {
    width: 148,
    borderRadius: 45,
    backgroundColor: Colors.BLUE,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '5%',
  },
  bottomContainer: {
    backgroundColor: Colors.DARK_WHITE,
    height: 110,
    paddingTop: '5%',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chartContainerText: {
    fontWeight: '600',
    fontSize: 17,
  },
  progressBar: {
    alignItems: 'center',
    paddingTop: 10,
  },
  chartContainerText2: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 14,
    color: Colors.GREY,
    paddingTop: 5
  }
});

export default Home;
