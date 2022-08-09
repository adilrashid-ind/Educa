import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import logo from '../Assets/images/educalogo.png';
import logo from '../Assets/images/logo.png';
import color from '../styles/color';
import {TextInput} from 'react-native-paper';
import SignUp from './SignUp';

export default function SignIn({navigation}) {
  const [showSignUp, setShowSignUp] = React.useState(true);
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{padding: 90, flex: 1}}>
        <Image source={logo} />
      </View>

      <View>
        <View>
          <Text style={styles.textOne}>Welcone Back {'\n'} Please Login</Text>
        </View>
        <View
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
            Login
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
          <TouchableOpacity>
            <Text style={{textAlign: 'right', paddingTop: 10}}>
              Forgot password??
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('bottomtab')}>
            <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('signup')}>
            <Text style={{textAlign: 'center'}}>
              Don't have an account?{' '}
              <Text
                style={{
                  color: color.secondary,
                }}>
                Register
              </Text>{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
