// @flow
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import shuffle from 'lodash/shuffle';
import entities from 'entities';

type State = {
  selectedAnswer: ?number,
  allAnswers: string[],
};

type Props = {
  data: any,
  questionKey: number,
  onUserAnswer: ({ [key: number]: boolean }) => void,
};

export default class Question extends PureComponent<Props, State> {
  state = {
    selectedAnswer: null,
    allAnswers: [],
  };

  componentDidMount() {
    const { data } = this.props;
    const allAnswers: string[] = shuffle([data.correct_answer, ...data.incorrect_answers]);
    this.setState({ allAnswers });
  }

  render() {
    const { allAnswers, selectedAnswer } = this.state;
    const { data } = this.props;

    return (
      <Card>
        <>
          <Text style={{ marginBottom: 5 }}>{entities.decodeHTML(data.question)}</Text>
          {allAnswers.map((answer, index) => (
            <CheckBox
              onPress={() => this._hndlePressAnswer(index)}
              key={answer}
              title={entities.decodeHTML(answer)}
              checked={index === selectedAnswer}
            />
          ))}
        </>
      </Card>
    );
  }

  _hndlePressAnswer = (index: number) => {
    const { data, questionKey, onUserAnswer } = this.props;
    const { allAnswers } = this.state;

    this.setState({ selectedAnswer: index });
    const isCorrect: boolean = allAnswers[index] === data.correct_answer;
    onUserAnswer({ [questionKey]: isCorrect });
  };
}
