import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TextInput} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import color from '../styles/color';
import Payment from './Payment';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();

function MyTabs({navigation}) {
  const [data, setData] = React.useState('');
  const [token, setToken] = React.useState('');
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor={color.secondary}
      style={{backgroundColor: 'white'}}
      labelStyle={{fontSize: 12}}
      inactiveColor="#4F4F4F"
      shifting
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
      }}
      barStyle={{
        height: 70,
        borderWidth: 0.5,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'transparent',
        overflow: 'hidden',
        marginTop: 0,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="payment"
        component={Payment}
        options={{
          tabBarLabel: 'Payment',

          tabBarIcon: ({color}) => (
            <Icon name="mirror-rectangle" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <TextInput.Icon
              name="account-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
