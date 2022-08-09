import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import color from '../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const wWidth = Dimensions.get('window').width;

export default function CardOne(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',

        marginRight: 15,
        borderRadius: 10,
      }}>
      <Image
        source={props.image}
        style={{
          height: 130,
          width: wWidth * 0.42,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          padding: 3,
          color: 'black',
          marginTop: 10,
          fontSize: 16,
          fontWeight: '600',
        }}>
        {props.title}
      </Text>
      <Text style={{width: wWidth * 0.42, padding: 3, color: '#181818'}}>
        {props.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <Text>12 lessons</Text>
        <Text>
          <Icon name="clock-outline" />
          12h 20m
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
