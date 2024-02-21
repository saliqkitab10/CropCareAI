// CameraScreen.js

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ClickPictureProps = NativeStackScreenProps<
  RootStackParamList,
  'ClickPicture'
>;
const ClickPicture = ({navigation}: ClickPictureProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Click Picture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatBotContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chatbot')}
          style={styles.chatBotbutton}>
          <Text>Chat Bot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5BCBA',
  },
  buttonContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 150,
    backgroundColor: 'green',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
  chatBotContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  chatBotbutton: {
    height: 90,
    width: 90,
    borderRadius: 45,
    margin: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClickPicture;
