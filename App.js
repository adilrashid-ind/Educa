import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/screens/BottomNav';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="bottomtab" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
