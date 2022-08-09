import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from 'react-native-paper';
import color from '../styles/color';

export default function PaymentProgress() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{alignItems: 'center'}}>
        <Icon name="clipboard-list" size={35} color={color.secondary} />
        <Text style={{textAlign: 'center', color: color.secondary}}>
          Review
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 25, color: color.secondary}}>-------</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon name="wallet" size={35} color={color.secondary} />
        <Text style={{textAlign: 'center', color: color.secondary}}>
          Payment Method
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 25}}>-------</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon name="wallet-membership" size={35} />
        <Text>Payment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
