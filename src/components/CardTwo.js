import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import img from '../Assets/images/img.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-paper';

const wWidth = Dimensions.get('window').width;

export default function CardTwo() {
  return (
    <TouchableOpacity style={{flexDirection: 'row', marginTop: 20}}>
      <View>
        <Image
          source={img}
          style={{borderRadius: 10, width: wWidth * 0.32, height: 115}}
        />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={{color: '#4F4F4F', fontWeight: '600'}}>Biology</Text>
        <Text
          style={{
            color: '#181818',
            fontWeight: '400',
            fontSize: 16,
            marginTop: 10,
            width: wWidth * 0.54,
          }}>
          The Effects of Temperature on Enzyme Activity and Biology
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#4F4F4F', fontSize: 15}}>
            <Icon name="clock-outline" size={18} /> 1 hour ago
          </Text>
          <Text style={{color: '#4F4F4F', fontSize: 15}}>
            <Icon name="comment-outline" size={18} /> 1234
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
