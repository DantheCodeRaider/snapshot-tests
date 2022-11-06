import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GitHubCard from './components/GitHubCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Github Profile Info:</h1>
      </div>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <GitHubCard />
        </Col>
      </Row>
    </div>
  );
}

export default App

//curl https://api.github.com/users/DantheCodeRaider
