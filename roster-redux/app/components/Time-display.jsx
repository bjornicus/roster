import React, { PropTypes } from 'react';
import { Label } from 'react-bootstrap';
import formatTime from '../time-format';

export default ({ time }) => {
  let input;
  return (
      <Label className='clock'>{formatTime(time)}</Label>
  );
}