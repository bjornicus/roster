import React, { PropTypes } from 'react';

function pad(num, size) {
  let s = '0000' + num;
  return s.substr(s.length - size);
}
function formatTime(time) {
  let m = 0,
    s = 0;
  let newTime = '';

  m = Math.floor(time / 60);
  time = time % 60;
  s = Math.floor(time);

  newTime = pad(m, 2) + ':' + pad(s, 2);
  return newTime;
}

export default ({ time, clockStyle }) => {
  let input;
  return <label className={'clock ' + clockStyle}>{formatTime(time)}</label>;
};
