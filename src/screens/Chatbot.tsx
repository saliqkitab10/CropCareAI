import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';

// type ChatbotProps = NativeStackScreenProps<RootStackParamList, 'Chatbot'>;
const Chatbot = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containterOne}>
        <Text style={styles.text}>How can I help you today?</Text>
      </View>
      <View style={styles.containterTwo}>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="Message"></TextInput>
        <TouchableOpacity style={styles.enterButton}></TouchableOpacity>
      </View>
    </View>
  );
};

export default Chatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5BCBA',
  },
  containterOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containterTwo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    width: '85%',
    backgroundColor: '#99AAAB',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 25,
    paddingLeft: 10,
    marginLeft: 10,
  },
  enterButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    margin: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 20,
  },
});
