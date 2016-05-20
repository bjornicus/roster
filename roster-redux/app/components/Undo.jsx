import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const Undo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(ActionCreators.undo())
      }}>
        <button type="submit">Undo </button>
      </form>
    </div>
  );
}

export default connect()(Undo);
