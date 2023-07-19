import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const IconButton = ({ title, iconName, onPress, buttonStyle, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        {iconName && <FontAwesome name={iconName} style={styles.icon} />}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#3498db',
    },
    icon: {
      fontSize: 18,
      marginRight: 5,
      color: '#ffffff',
    },
    text: {
      fontSize: 18,
      color: '#ffffff', 
    },
  });
  
  export default IconButton;
  