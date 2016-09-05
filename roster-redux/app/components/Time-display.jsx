import React, { PropTypes } from 'react';
import { Label } from 'react-bootstrap';
import formatTime from '../time-format';

export default ({ time, clockStyle }) => {
  let input;
  return (
      <Label className={'clock ' + clockStyle}>{formatTime(time)}</Label>
  );
}