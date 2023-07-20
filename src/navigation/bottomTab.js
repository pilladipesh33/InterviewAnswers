import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Leagues from '../screen/Leagues';
import Research from '../screen/Research';
import Leaderboard from '../screen/Leaderboard';
import Profile from '../screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          tabBarIcon: () => (
            <Ionicons name={'home'} size={25} color={'#6231AD'} />
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'trophy'} size={25} color={'#6231AD'} />
          ),
        }}
      />
      <Tab.Screen
        name="Reasearch"
        component={Research}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'search'} size={25} color={'#6231AD'} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'podium'} size={25} color={'#6231AD'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'person'} size={25} color={'#6231AD'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
