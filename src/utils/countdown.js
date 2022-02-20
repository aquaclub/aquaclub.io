import millisecondsToTime from './millisecondsToTime';

const countdown = (milliseconds, selector) => {
  document.querySelector(selector).textContent =
    millisecondsToTime(milliseconds);
};

export default countdown;
