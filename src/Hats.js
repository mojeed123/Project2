import React from 'react'
import {Row,Container,Col,Card} from 'react-bootstrap'

function Hats() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/9358982_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Black Cap</Card.Title>
                  <Card.Text>
                    <p>$30</p>
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93464100_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Bucket Hat</Card.Title>
                  <Card.Text>
                    $55
                    
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/83991592_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>White Cap</Card.Title>
                  <Card.Text>
                    $40
                    
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              

        </Row> 
        
       
       
        <Container>
        <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93194101_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Black New Era Hat</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93805816_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Red Bucket Hat</Card.Title>
                  <Card.Text>
                    $200
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93220755_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Yellow New Era Hat</Card.Title>
                  <Card.Text>
                    $130
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              

        </Row> 
        </Container>   
        </Container>
            
        </div>
    )
}

export default Hats



