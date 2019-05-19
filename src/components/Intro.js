// @flow
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';

import appIcon from '../assets/app-icon.png';

type Props = {
  onStartQuiz: () => void,
};

const Intro: React.StatelessFunctionalComponent<Props> = ({ onStartQuiz }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={appIcon} />
      <Text style={styles.text}>Welcome to the Quiz App</Text>
      <Button title="Start Quiz" onPress={onStartQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 22,
    marginVertical: 20,
  },
});

export default React.memo<Props>(Intro);
