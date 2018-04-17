import React, { Component } from 'react';
import PlayerList from './Player-list'
import AddPlayer from './Add-player'
import Undo from './Undo'
import GameClock from './Game-clock'
// import logo from '../logo.svg';
import '../App.css';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <Grid id="content">
          <Row>
            <Col xs={9}><GameClock /></Col>
            <Col xs={3}><Undo /></Col>
          </Row>
          <Row>
            <AddPlayer />
          </Row>
          <Row>
            <PlayerList heading="Playing" playerFilter={p => p.isPlaying} />
            <PlayerList heading="Substitutes" playerFilter={p => !p.isPlaying} />
          </Row>
        </Grid>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Roster</h1>
      //   </header>
      //   <div className="App-intro">
          
      //   </div>
      // </div>
    );
  }
}

export default App;
