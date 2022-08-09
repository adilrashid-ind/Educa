import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import logo from '../Assets/images/logo.png';
import color from '../styles/color';
import {RadioButton, TextInput} from 'react-native-paper';

export default function SignUp({navigation}) {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={{backgroundColor: 'white', flexDirection: 'column'}}>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <Image source={logo} />
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.textOne}>Hi Let's Make {'\n'} Journey With Us</Text>
      </View>
      <ScrollView
        style={{
          marginTop: 20,
          padding: 20,
          elevation: 4,

          height: '100%',

          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: color.primary,
            fontWeight: '600',
            marginTop: 20,
          }}>
          Register
        </Text>
        <TextInput
          placeholder="christine.angela123"
          label="Username/Email"
          mode="flat"
          style={{backgroundColor: 'white', marginTop: 10}}
          activeOutlineColor="red"
          outlineColor="red"
          activeUnderlineColor="black"
          underlineColor="gray"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="********"
          label="Password"
          mode="flat"
          style={{backgroundColor: 'white'}}
          activeOutlineColor="red"
          outlineColor="red"
          activeUnderlineColor="black"
          secureTextEntry={true}
          underlineColor="gray"
          right={<TextInput.Icon name="eye" />}
        />
        <TextInput
          placeholder="9658375094"
          label="Phone Number"
          mode="flat"
          style={{backgroundColor: 'white', marginTop: 10}}
          activeOutlineColor="red"
          outlineColor="red"
          activeUnderlineColor="black"
          underlineColor="gray"
          keyboardType="number-pad"
        />

        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 20,
            }}>
            Register As a ?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color={color.secondary}
              />
              <Text style={{padding: 7, color: 'gray', fontSize: 16}}>
                Student
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color={color.secondary}
              />
              <Text style={{padding: 7, color: 'gray', fontSize: 16}}>
                Teacher
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign: 'center', color: 'white'}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('signin')}>
          <Text style={{textAlign: 'center'}}>
            have an account?{' '}
            <Text
              style={{
                color: color.secondary,
              }}>
              Login
            </Text>{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.secondary,
    padding: 10,
    margin: 20,
    marginTop: 30,
    borderRadius: 5,
  },
  textOne: {
    textAlign: 'center',
    color: color.primary,
    fontSize: 20,
    fontWeight: '600',
  },
});
