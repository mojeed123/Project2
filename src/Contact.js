import React,{useState} from 'react'
import {Form,Button, Container, Row,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const { t } = useTranslation();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
    return (
        
            <div class="p-3 mb-2 bg-primary text-white">
              <div className="vt">
                <Container>
                <select className="lang" onChange={(e) => i18next.changeLanguage(e.target.value)}>
            <option value="en" key="en">
              English
            </option>
            <option value="fr" key="fr">
              Français
            </option>
          </select>

                </Container>
              </div>
              
            
                <Row>
                <Col>
                  <Card>
                  
                
                <Card.Img className="fy"  variant="top" src="https://images.footlocker.com/content/dam/final/footlockercanada/site/backpages/2022/asp/220311-flca-asp-sms-m-asp-v1.jpg" />
                
              </Card>
              
              </Col>

                </Row>
                <div>
           
                <Container className="re">
                  <div>
                <h1>{t("CONTACT US")}</h1>
             <p>{t("QUESTIONS")}</p>
             <p>{t("EMAIL US")}</p>
             <p>{t("EMAIL")}</p>
             <p>{t("PHONE")}</p> 
             
            <p>{t("DATE")}</p>
          
            </div>
            <div>


            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{t("name_email")}</Form.Label>
    <Form.Control type="email" placeholder={t("Email")}
    value={email}
    onChange={(e) => setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>{t("Name")}</Form.Label>
    <Form.Control type="Name" placeholder={t("name_place")}
    value={name}
    onChange={(e) => setName(e.target.value)} 
    />
    </Form.Group>

  
  <Link to="/confirmation"><Button variant="dark" type="submit">
    
  {t("Submit")}
  </Button>
  </Link>
  
</Form>

      
            
        </div>
        </Container>
      
        </div>
        </div>
        
      
       
    )
}
            
            
 

export default Contact
