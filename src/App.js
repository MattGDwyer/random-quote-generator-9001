import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container id="quote-box">
      <Row>
        <Col id="text">The Quote Goes Here!</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col id="author">Author</Col>
      </Row>
      <Row>
        <Col><a id="tweet-quote">Tweet This!</a></Col>
        <Col id="new-quote">
        <Button variant="primary">New Quote</Button>{' '}

        </Col>
      </Row>
    </Container>
      </header>
    </div>
  );
}

export default App;

// {/* <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> */}
