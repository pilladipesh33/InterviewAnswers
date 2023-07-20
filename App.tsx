import {View, Text} from 'react-native';
import React from 'react';
import BottomTab from './src/navigation/bottomTab';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
  <BottomTab />
  </NavigationContainer>
  );
};

export default App;
