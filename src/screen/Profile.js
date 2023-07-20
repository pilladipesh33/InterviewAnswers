import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../constant/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProfilePicture} from '../constant/ProfileEdit';
import {BoxWithIcon} from '../constant/BoxWithIcon';
import {TopTabNavigator} from '../navigation/topTabNavigation';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Image
          source={require('../../assets/images/group.png')}
          style={styles.headingImage}
        />
        <Text style={styles.headingText}>Profile</Text>
        <MaterialCommunityIcons
          name="message-badge"
          size={24}
          color={Colors.DARK_GREY}
        />
      </View>
      <View style={styles.profilePictureContainer}>
        <ProfilePicture />
        <Text style={styles.userNameText}>Jina Simons</Text>
        <Text
          style={{fontWeight: '500', fontSize: 15, color: Colors.DARK_GREY}}>
          6000 points
        </Text>
        <Text style={styles.userDetailText}>
          I’m a software developer that has been in the {'\n'}crypto space since
          2012. And I’ve seen it grow {'\n'}and falter over a period of time.
          Really happy to {'\n'}be here!
        </Text>
        <View style={styles.logoutConatiner}>
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color={Colors.DARK_GREY}
          />
          <Text
            style={{fontFamily: '500', fontSize: 17, color: Colors.DARK_GREY}}>
            Logout
          </Text>
        </View>
      </View>
      <View style={{paddingTop: 40, paddingBottom: 20}}>
        <BoxWithIcon />
      </View>
      
        <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  headingContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingImage: {
    height: 30,
    width: 30,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 17,
    color: Colors.DARK_GREY,
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  userNameText: {
    fontWeight: '500',
    fontSize: 17,
    color: Colors.BLACK,
    paddingTop: 10,
  },
  userDetailText: {
    fontWeight: '500',
    fontSize: 15,
    color: Colors.DARK_GREY,
    paddingTop: 10,
    //textAlign: 'center',
  },
  logoutConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default Profile;
