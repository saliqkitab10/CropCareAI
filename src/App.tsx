/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Login from './screens/Login';
import ClickPicture from './screens/ClickPicture';
import Chatbot from './screens/Chatbot';

export type RootStackParamList = {
  Login: undefined;
  ClickPicture: undefined;
  Chatbot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'OTP Authentication',
          }}
        />
        <Stack.Screen
          name="ClickPicture"
          component={ClickPicture}
          options={{
            title: 'Click Picture',
          }}
        />
        <Stack.Screen
          name="Chatbot"
          component={Chatbot}
          options={{
            title: 'Chatbot',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
