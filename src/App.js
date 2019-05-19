// @flow
import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import Intro from './components/Intro';
import Questions from './components/Questions';

type State = {
  isQuizStarted: boolean,
};

export default class App extends PureComponent<{}, State> {
  state = {
    isQuizStarted: false,
  };

  render() {
    const { isQuizStarted } = this.state;

    return (
      <ThemeProvider>
        <StatusBar backgroundColor="#4487d6" barStyle="light-content" />

        {!isQuizStarted && <Intro onStartQuiz={this._handleStartQuiz} />}
        {isQuizStarted && <Questions />}
      </ThemeProvider>
    );
  }

  _handleStartQuiz = () => {
    this.setState({ isQuizStarted: true });
  };
}
