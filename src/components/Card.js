import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import color from '../styles/color';

const wWidth = Dimensions.get('window').width;

export default function Card(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        elevation: 1,
        marginRight: 15,
        borderRadius: 10,
      }}>
      <Image
        source={props.image}
        style={{
          height: 110,
          width: wWidth * 0.5,
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
      <Text style={{width: wWidth * 0.47, padding: 3, color: '#181818'}}>
        {props.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 5,
          paddingRight: 5,
        }}>
        <ProgressBar
          progress={props.progress}
          color={color.secondary}
          style={{
            height: 6,
            width: wWidth * 0.38,
            borderRadius: 10,
            marginTop: 7,
          }}
        />
        <Text style={{fontSize: 13, color: '#181818'}}>{props.number}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
