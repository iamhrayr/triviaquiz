// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Overlay, Button } from 'react-native-elements';
import msToTime from '../utils/msToTime';

type Props = {
  userAnswers: { [key: number]: boolean },
  startDate: number,
  onPlayAgain: () => any,
};

const Modal: React.StatelessFunctionalComponent<Props> = ({
  userAnswers,
  startDate,
  onPlayAgain,
}) => {
  const correctAnswers = Object.values(userAnswers).filter(Boolean);
  const correctCount: number = correctAnswers.length;
  const duration = msToTime(Date.now() - startDate);

  return (
    <Overlay isVisible width="auto" height="auto">
      <View style={styles.container}>
        <Text style={styles.count}>Correct answers: {correctCount} from 10</Text>
        <Text style={styles.timeSpent}>Time spent: {duration}</Text>
        <Button title="Play Again" onPress={onPlayAgain} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  count: {
    fontSize: 20,
    textAlign: 'center',
  },
  timeSpent: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
});

export default React.memo<Props>(Modal);
