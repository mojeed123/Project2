
import React from 'react'

import {Row,Col,Container,Card} from 'react-bootstrap'

function Puma() {
    return (
        <div>
            <Container>
                <Row>

               
            <Col>
                  <Card>
                <Card.Img className='casual1'  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIl4XMwu82DRzDu0gfRF16AM5Lt5ombRGCwtznHiG65ahyTpmqXwW-l1u4cqPlMa_KY8&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Puma Suede</Card.Title>
                  <Card.Text>
                    $80
                    <p>Rating: 4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual2' variant="top" src="https://images.footlocker.com/is/image/EBFL2/28054399_a1?wid=520&hei=520&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Puma Cali</Card.Title>
                  <Card.Text>
                  $200
                  <p>Rating: 5 out of 5</p>
                  </Card.Text>
                 
                </Card.Body>
              </Card>
              </Col>
              <Col>
                  <Card>
                <Card.Img className='casual2' variant="top" src="https://images.footlocker.com/is/image/EBFL2/41374915_a1?wid=500&hei=500&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Puma Suede</Card.Title>
                  <Card.Text>
                  $200
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

export default Puma
