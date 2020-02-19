import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard

} from 'react-native';

import Card from '../components/Card';
import Color from '../constants/Color';
import Input from '../components/Input';


const GameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
//    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = InputText => {
        setEnteredValue(InputText.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
    }
  return (
      <TouchableWithoutFeedback onPress={() => 
      {
          Keyboard.dismiss();
          }}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.input} 
        blurOnSubmit 
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType="number-pad"
        maxLenght={2}
        onChangeText={numberInputHandler}
        value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset"
             onPress={resetInputHandler} 
             color={Color.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Color.primary} />
          </View>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  }
});

export default GameScreen;
