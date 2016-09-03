import React from 'react';
import PlayerList from './Player-list'
import AddPlayer from './Add-player'
import Undo from './Undo'
import GameClock from './Game-clock'
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <Grid id="content">
        <Row>
          <Col xs={10}><GameClock /></Col>
          <Col xs={2}><Undo /></Col>
        </Row>
        <Row>
          <AddPlayer />
        </Row>
        <Row>
          <PlayerList heading="Playing" playerFilter={ p => p.isPlaying }/>
          <PlayerList heading="Substitutes" playerFilter={ p => !p.isPlaying }/>
        </Row>
      </Grid>
    );
  }
}
