import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from './Color';

export const ProfilePicture = () => {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1600'}} // Replace with the actual path to your profile picture
          style={styles.profilePicture}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.editButton}>
          {/* You can add an icon or text for the edit button here */}
          <Feather name="edit" size={10} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    profilePicture: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    editButton: {
      position: 'absolute',
      top: '60%',
      right: 0,
      backgroundColor: Colors.WHITE,
      padding: 8,
      borderRadius: 20,
    },
  });
    