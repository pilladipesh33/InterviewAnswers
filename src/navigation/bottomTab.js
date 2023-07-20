import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Leagues from '../screen/Leagues';
import Research from '../screen/Research';
import Leaderboard from '../screen/Leaderboard';
import Profile from '../screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constant/Color';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={'home'} size={25} color={focused ? Colors.BLUE : Colors.GREY } />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={'trophy'} size={25} color={focused ? Colors.BLUE : Colors.GREY} />
          ),
        }}
      />
      <Tab.Screen
        name="Reasearch"
        component={Research}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={'search'} size={25} color={focused ? Colors.BLUE : Colors.GREY} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={'podium'} size={25} color={focused ? Colors.BLUE : Colors.GREY} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name={'person'} size={25} color={focused ? Colors.BLUE : Colors.GREY} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
