import { Nav, Navbar, Container } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
            <div className="container">
              <div className="row">
                { shoes.map((a, i) => {
                    return(
                      <Card shoes={a} i={i}/>
                    )
                  })}
              </div>
            </div>
          </div>}/>
          <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
        
      </Routes>
    </div>
  );


  function Card(props) {
    return(
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    )
  }
}

export default App;
