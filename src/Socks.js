import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'




function Socks() {
    return (
        <div>
            <Container>
                <Row>
                  <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/93170801_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Adidas Socks</Card.Title>
                  <Card.Text>
                    <p>$30</p>
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/92574010_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Ankle Socks</Card.Title>
                  <Card.Text>
                    $10
                    
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/42064601_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Socks</Card.Title>
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
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/9251672_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Jordan Socks</Card.Title>
                  <Card.Text>
                    <p>$10</p>
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/92526551_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Grey Converse Socks</Card.Title>
                  <Card.Text>
                    $15
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/92102992_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Black Plain Socks</Card.Title>
                  <Card.Text>
                    $10
                   
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

export default Socks
