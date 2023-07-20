import React from 'react';
import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GamesPlayed from '../screen/GamesPlayed';
import Badges from '../screen/Badges';
import { Colors } from '../constant/Color';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    return (
      <Tab.Navigator
      initialRouteName='Badges'
        sceneContainerStyle={{backgroundColor: 'white'}}
        screenOptions={({route}) => ({
            // // tabBarInactiveTintColor: '#616568',
            // tabBarActiveTintColor: 'orange',
            tabBarIndicatorStyle: {
              backgroundColor: Colors.BLUE,
              height: 2,
            },
            tabBarLabel: ({focused}) => {
              return (
                <View style={{width: 200, alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: focused ? '600' : '500',
                      fontSize: 18,
                      lineHeight: 22,
                      color: focused ? Colors.BLUE : Colors.DARK_GREY
                    }}>
                    {route.name}
                  </Text>
                </View>
              );
            },
          })}
        >
        <Tab.Screen name={'Games Played'} component={GamesPlayed} />
        <Tab.Screen name={'Badges'} component={Badges} />
      </Tab.Navigator>
    );
  };