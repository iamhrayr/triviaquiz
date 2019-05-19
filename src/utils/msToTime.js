// @flow
export default (ms: number): string => {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  hours = hours > 0 ? `${hours}h ` : '';
  minutes = minutes > 0 ? `${minutes}min ` : '';
  seconds = seconds > 0 ? `${seconds}sec ` : '';

  return hours + minutes + seconds;
};
