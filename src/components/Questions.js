// @flow
import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';

import * as Api from '../api';
import Question from './Question';
import Modal from './Modal';

type State = {
  questions: (?string)[],
  userAnswers: { [key: number]: boolean },
  startDate: ?number,
  isModalVisible: boolean,
  loading: boolean,
};

class Questions extends PureComponent<{}, State> {
  state = {
    questions: [],
    userAnswers: {},
    startDate: null,
    isModalVisible: false,
    loading: false,
  };

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { questions, isModalVisible, userAnswers, startDate, loading } = this.state;

    if (loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading questions...</Text>
        </View>
      );
    }

    return (
      <>
        <FlatList
          data={questions}
          keyExtractor={(item, index) => String(index)}
          extraData={questions}
          renderItem={({ item, index }) => (
            <Question data={item} questionKey={index} onUserAnswer={this._handleUserAnswer} />
          )}
        />
        {isModalVisible && startDate && (
          <Modal userAnswers={userAnswers} startDate={startDate} onPlayAgain={this._onPlayAgain} />
        )}
      </>
    );
  }

  _handleUserAnswer = userAnswer => {
    const newUserAnswers = {
      ...this.state.userAnswers,
      ...userAnswer,
    };

    this.setState({ userAnswers: newUserAnswers });

    // open modal if user answered all the 10 questions
    if (Object.keys(newUserAnswers).length === 10) {
      this.setState({ isModalVisible: true });
    }
  };

  _fetchData = async () => {
    try {
      this.setState({ loading: true });
      const questions = await Api.fetchQuestions();
      this.setState({
        questions: questions.data.results,
        startDate: Date.now(),
        loading: false,
      });
    } catch (err) {
      alert('Oops, something went wrong');
    }
  };

  _onPlayAgain = async () => {
    this.setState({
      questions: [],
      isModalVisible: false,
      userAnswers: {},
      loading: true,
    });

    this._fetchData();
  };
}

export default Questions;
