import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

const Undo = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(ActionCreators.undo())
      }}>
        <button className="btn btn-primary" type="submit">Undo </button>
      </form>
    </div>
  );
}

export default connect()(Undo);
