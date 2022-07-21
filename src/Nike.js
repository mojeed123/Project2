import React from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'

function Nike() {
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
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Nike Air Force 1</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZinGI61q7WKMCczx106vOPHtWRjczq4DvQ&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Nike slides</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/74889141_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Hoodie</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
                </Row>
                <Container>
                  <Row>
                <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/7977131_om1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Crew Hoodie</Card.Title>
                  <Card.Text>
                    $60
                   
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual1'  variant="top" src="https://images.footlocker.com/is/image/EBFL2/4100964_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Air Force 1 High</Card.Title>
                  <Card.Text>
                  $190
                  <p>Rating: 5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual2' variant="top" src="https://images.footlocker.com/is/image/EBFL2/41632044_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike air max 270</Card.Title>
                  <Card.Text>
                  $100
                  <p>Rating: 4 out of 5 </p>
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

export default Nike