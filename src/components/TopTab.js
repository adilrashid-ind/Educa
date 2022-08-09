import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CardOne from './CardOne';
import card1 from '../Assets/images/card1.png';
import img2 from '../Assets/images/img2.png';
import img3 from '../Assets/images/img3.png';
function HomeScreen() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: 'white',

        padding: 10,
      }}>
      <CardOne
        image={img2}
        title="Mathematics"
        description="HighSchool Algebra ! Help and Review"
      />
      <CardOne
        image={img3}
        title="Mathematics"
        description="HighSchool Algebra ! Help and Review"
      />
      <CardOne
        image={card1}
        title="Mathematics"
        description="HighSchool Algebra ! Help and Review"
      />
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <View style={{height: 320}}>
      <Tab.Navigator>
        <Tab.Screen
          name="Recomended"
          component={HomeScreen}
          options={{tabBarLabel: 'Recomended'}}
        />
        <Tab.Screen name="Algebra" component={SettingsScreen} />
        <Tab.Screen name="Geometry" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
