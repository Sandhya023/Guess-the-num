import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
        <View style={styles.imageContainer}>
        <Image 
        fadeDuration={1000}
        // source={require('../assets/success.png')}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6ET1Nu-Qyga_HB1vaAqxP2MrwzOYCaxv2bXIuOMtR1ck9a55Q'}}
        style={styles.image}
        resizeMode="cover" />
        </View>
        <View style={styles.resultContainer}>
          <Text>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> 
          rounds to guess the number {props.roundsNumber} </Text>
          <Text style={styles.highlight}>User Number{props.userNumber}</Text>
          <MainButton onPress={props.onRestart}>NEW GAME </MainButton>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '110%',
    
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    marginHorizontal: 60
  },
  resultContainer: {
    marginHorizontal:30,
    marginVertical: 15
  },
});

export default GameOverScreen;
