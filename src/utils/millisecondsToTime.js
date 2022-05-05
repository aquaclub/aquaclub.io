const millisecondsToTime = (milliseconds) => {
  let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  return `${days}d:${hours < 10 ? `0${hours}` : hours}h:${
    minutes < 10 ? `0${minutes}` : minutes
  }m:${seconds < 10 ? `0${seconds}` : seconds}s`;
};

export default millisecondsToTime;
