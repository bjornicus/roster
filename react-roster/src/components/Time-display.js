import React from 'react';
import { Label } from 'react-bootstrap';
import formatTime from '../time-format';

export default ({ time, clockStyle }) => {
  return (
      <Label className={'clock ' + clockStyle}>{formatTime(time)}</Label>
  );
}