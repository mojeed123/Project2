import React from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'

function Adidas() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                  <Card>
                <Card.Img className='casual2'variant="top" src="https://images.footlocker.com/is/image/EBFL2/GY6492_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Adidas NMD</Card.Title>
                  <Card.Text>
                    $130
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
                  </Col>
                
              
              <Col>
                  <Card>
                <Card.Img  variant="top" src="https://images.footlocker.com/is/image/EBFL2/64721543_a1?wid=559&hei=559&fmt=png-alpha

" />
                <Card.Body>
                  <Card.Title>Adidas Hoodie</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://images.footlocker.com/is/image/EBFL2/41944401_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Green Adidas Superstars</Card.Title>
                  <Card.Text>
                    $100
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual2' variant="top" src="https://images.footlocker.com/is/image/EBFL2/79472990_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Adidas Astir</Card.Title>
                  <Card.Text>
                  $70
                  <p>Rating: 5 out of 5</p>
                  </Card.Text>
                 
                </Card.Body>
              </Card>
                  </Col>
                  
                </Row>
                
            </Container>
            
        </div>
    )
}

export default Adidas