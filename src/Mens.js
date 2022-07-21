import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Col, Container,Row,card} from 'react-bootstrap'
import './App.css';

function Mens() {
    return (
        <div className="up">
             <Container>
                <Row>

                
                <Col>
                <div>
                <img className="ty"   src="https://images.footlocker.com/is/image/EBFL2/52342100_a1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/shoes"><Button className= "red" variant="primary" type="submit">shop shoes</Button></Link>
                </div>
                </Col>

                
                  <Col>
                  <div>  
                <img className="ty" src="https://images.footlocker.com/is/image/EBFL2/74901910_om1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/clothing"><Button className= "red"  variant="primary" type="submit">shop clothing</Button></Link>
                </div>
                </Col>
                
                <Col>
                <div>
                <img className="ty" src="https://images.footlocker.com/is/image/EBFL2/83991592_a1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/accessories"><Button className= "red"  variant="primary" type="submit">shop accessories</Button></Link>
                </div>
                </Col>
                
                </Row>
             </Container> 
             
             
        </div>
    )
}

export default Mens