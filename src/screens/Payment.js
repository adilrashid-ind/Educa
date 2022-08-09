import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Divider, RadioButton} from 'react-native-paper';
import visa from '../Assets/images/visa.png';
import mastercard from '../Assets/images/mastercard.png';
import paypal from '../Assets/images/paypal.png';
import applePay from '../Assets/images/applepay.png';
import color from '../styles/color';
import PaymentProgress from '../components/PaymentProgress';

export default function Payment() {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 15}}>
      <View>
        <PaymentProgress />
      </View>
      <View style={{marginTop: 20, flex: 1}}>
        <Text style={styles.text}>Payment Method</Text>
        <TouchableOpacity
          onPress={() => setChecked('first')}
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: checked === 'first' ? color.secondary : '#E0E0E0',
            padding: 5,
            borderRadius: 10,

            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="first"
              color={color.secondary}
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />

            <Text
              style={{
                marginTop: 5,
                fontSize: 16,
                color: checked === 'first' ? color.secondary : '#181818',
              }}>
              Credit Card
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={visa} style={{marginRight: 15}} />
            <Image source={mastercard} style={{marginRight: 10}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChecked('second')}
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: checked === 'second' ? color.secondary : '#E0E0E0',
            padding: 5,
            borderRadius: 10,

            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="second"
              color={color.secondary}
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />

            <Text
              style={{
                marginTop: 5,
                fontSize: 16,
                color: checked === 'second' ? color.secondary : '#181818',
              }}>
              PayPal
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={paypal} style={{marginRight: 10}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChecked('third')}
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: checked === 'third' ? color.secondary : '#E0E0E0',
            padding: 5,
            borderRadius: 10,

            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="second"
              color={color.secondary}
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />

            <Text
              style={{
                marginTop: 5,
                fontSize: 16,
                color: checked === 'third' ? color.secondary : '#181818',
              }}>
              Apple Pay
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={applePay} style={{marginRight: 10}} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth: 2,
          borderBottomWidth: 2,
          paddingTop: 20,
          paddingBottom: 20,
          borderColor: '#E0E0E0',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.text2}>Purchase Date</Text>
            <Text style={styles.text3}>01/09/2022</Text>
          </View>
          <View>
            <Text style={styles.text2}>Price</Text>
            <Text style={styles.text3}>$240.00</Text>
          </View>
          <View>
            <Text style={styles.text2}>Discount</Text>
            <Text style={styles.text3}>
              - $120<Text style={{color: color.secondary}}> (50%)</Text>{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          Total Price : $120.00
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: color.secondary,
            padding: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#181818',
    fontSize: 20,
  },
  text2: {
    color: '#181818',
    fontSize: 16,
    fontWeight: '600',
  },
  text3: {
    color: '#181818',
    fontSize: 15,
  },
});
