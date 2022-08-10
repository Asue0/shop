import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';
import { useState } from 'react';

function App() {

  let [shoes] = useState(data);
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      <Container>
        <Row>
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );

  function Card(props) {
    return(
        <Col sm>
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="80%"/>
            <h4>props.shoes.title </h4>
            <p>props.shoes.price</p>
        </Col>
    )
  }

}

export default App;
