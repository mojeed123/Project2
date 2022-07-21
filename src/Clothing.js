import React, {useState} from 'react'
import {Row,Container,Card,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Components.json";
import List from "./ListClothes"
import {useRef} from 'react';
import {Form,Button} from 'react-bootstrap';



function Clothing() {
  const ref = useRef(null);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const Handler = () => {

  }
    return (
        <div className='clo'>
           <Container>
      <Form className="searc">
        <h3>Search</h3>
                <Form.Group className="mb-3" controlId="Search">
                  <Row className="search-input">
                    <Col >
                      <Form.Control
                        type="Text"
                        placeholder="Search"
                        onChange={inputHandler}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
        <Row>
        <List input={inputText} />
         
        </Row>
      </Container>

            
                {/* <Container>
                <Row>
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
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/64721543_a1?wid=559&hei=559&fmt=png-alpha

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
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/13864802_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Yeezy Hoodie</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/73101970_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>shirt 1 </Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              </Row>
              </Container>
              <Container>
            <Row>
              
              
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/73817100_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Nike Tee</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/75270310_a1?wid=559&hei=559&fmt=png-alpha"/>
                <Card.Body>
                  <Card.Title>plain tee</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/74009760_om1?wid=559&hei=559&fmt=png-alpha"/>
                <Card.Body>
                  <Card.Title>Adidas</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/7977652_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Womens Nike Swoosh Jacket</Card.Title>
                  <Card.Text>
                    <p>$130</p>
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              </Row>
              </Container>

              <Container>

              <Row>


              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/79776001_om1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Womens Nike Sharp Jacket</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
              
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/47606992_a1?wid=559&hei=559&fmt=png-alpha" />
                <Card.Body>
                  <Card.Title>Mens Iconcic T7 Puma Jacket</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              <Col>
                  <Card>
                <Card.Img variant="top" src="https://images.footlocker.com/is/image/EBFL2/48691760_om1?wid=559&hei=559&fmt=png-alpha
" />
                <Card.Body>
                  <Card.Title>Mens Adidas Jacket</Card.Title>
                  <Card.Text>
                    $130
                    <p>4.5 out of 5</p>
                  </Card.Text>
                
                </Card.Body>
              </Card>
             
              </Col>
              

        </Row>  
        </Container>
         */}
            
            
        </div>
    )
}

export default Clothing