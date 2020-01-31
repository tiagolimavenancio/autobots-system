import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from './navigation';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">      
      <Navigation />
      <Container>
        <Row>
          <Col md={12}>
              <div className='wrapper'>
                <Routes />
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
