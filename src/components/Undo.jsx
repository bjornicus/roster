import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { Button } from './Button';

const Undo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(ActionCreators.undo());
        }}
      >
        <Button className="btn btn-primary" type="submit">
          Undo{' '}
        </Button>
      </form>
    </div>
  );
};

export default connect()(Undo);
