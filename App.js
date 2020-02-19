/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';


export default function App() {
  return (
    
     <View style={styles.screen}>
       <Header title="Guess a number" />
       <GameScreen />

     </View>
    
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1
  }
});