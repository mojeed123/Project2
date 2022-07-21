import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Col, Container,Row} from 'react-bootstrap'


function womens() {
    return (
        <div className="up">
            <Container>
                <Row>

                
                <Col>
                <img className="ty"    src="https://images.footlocker.com/is/image/EBFL2/52342100_a1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/shoes"><Button className= "red" variant="primary" type="submit">shop shoes</Button></Link>
                </Col>
                
                  <Col>  
                <img className="ty"   src="https://images.footlocker.com/is/image/EBFL2/79536628_om1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/clothing"><Button className= "red" variant="primary" type="submit">shop clothing</Button></Link>
                </Col>
                
                <Col>
                <img className="ty"   src="https://images.footlocker.com/is/image/EBFL2/9359240_a1?wid=520&hei=520&fmt=png-alpha"></img>
                <Link to="/accessories"><Button className= "red" variant="primary" type="submit">shop accessories</Button></Link>
                </Col>
                
                </Row>
             </Container>
            
        </div>
    )
}

export default womens