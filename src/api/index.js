import axios from 'axios';

export const fetchQuestions = () => {
  return axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
};
