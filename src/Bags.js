import React from 'react'
import {Row, Container, Col, Card} from 'react-bootstrap'

function Bags() {
    return (
        <div>
             <Container>
                <Row>
                  <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/96905032_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Bag</Card.Title>
                  <Card.Text>
                    <p>$40</p>
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/9688631_a1?wid=559&hei=559&fmt=png-alpha
" />
                <Card.Body>
                  <Card.Title>Herschels backpack</Card.Title>
                  <Card.Text>
                    $60
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/99540795_a1?wid=559&hei=559&fmt=png-alpha
" />
                <Card.Body>
                  <Card.Title>Vans bag</Card.Title>
                  <Card.Text>
                    $130
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              

        </Row> 
        </Container>   
        </div>
        
    )
}

export default Bags