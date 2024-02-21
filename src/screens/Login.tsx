import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// navigation

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Please enter your mobile number</Text>
      <TextInput style={styles.input} placeholder="+91"></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate('ClickPicture')}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5BCBA',
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'green',
    height: 40,
    width: 200,
    margin: 3,
  },
  smallText: {
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'green',
    height: 40,
    width: 200,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  loginButtonText: {
    color: 'white',
  },
});
