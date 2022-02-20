const millisecondsToTime = milliseconds => {
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  let seconds = Math.floor((milliseconds / 1000) % 60);

  hours = hours ? (hours < 10 ? '0' + hours : hours) : '00';
  minutes = minutes ? (minutes < 10 ? '0' + minutes : minutes) : '00';
  seconds = seconds ? (seconds < 10 ? '0' + seconds : seconds) : '00';

  return `${hours}:${minutes}:${seconds}`;
};

export default millisecondsToTime;
