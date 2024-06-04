import logo from './Imagenes/Logo.png';
import './Styles/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Col, Row } from 'react-bootstrap';
import Usuarios from './Componentes/index.js';
import React from 'react';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
      </header>
      <Row className="justify-content-center">
        <Col sm={10}>
          <Usuarios />
        </Col>
      </Row>
    </div>
  );
}
export default App;
