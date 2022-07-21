import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./Components.json"
import { NavDropdown,Container,Row,Col,Dropdown,NavItem,NavLink,Nav,Navbar, Card,Form,Button} from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";



function Navi() {
 

  const { t } = useTranslation();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

 
  
    return (
        <div>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="black">
              <Container>
       
        <Navbar.Brand className='ass'  href="/home">{t("FRY")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='free'  activeKey={window.location.pathname}>

              <Nav.Link href="/home">{t("HOME")}</Nav.Link>
              
              <Nav.Link href="/mens">{t("MENS")}</Nav.Link>
              
              
              
              
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="/shoes"><b>{t("select1")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">  {t("select2")}  </NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">  {t("select3")}   </NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">  {t("select4")}  </NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>{t("select5")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shirt">{t("select6")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hoodies">{t("select7")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/jackets">{t("select8")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>{t("select9")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">{t("select10")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">{t("select11")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Socks">{t("select12")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>{t("select13")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Nike">{t("select14")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Adidas">{t("select15")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Puma">{t("select16")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    </div>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/womens">{t("WOMENS")}</Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="/shoes"><b>{t("select1")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">{t("select2")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">{t("select3")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">{t("select4")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>{t("select5")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/WomenShirt">{t("select19")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/WomenHoodies">{t("select18")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/WomenJackets">{t("select17")}</NavDropdown.Item></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>{t("select9")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">{t("select10")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">{t("select11")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Socks">{t("select12")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>{t("select13")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/nike">{t("select14")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/adidas">{t("select15")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/puma">{t("select16")}</NavDropdown.Item></li>
                      </ul>
                    </div>
                    
                    
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              
              <Nav.Link href="/kids">{t("KIDS")}</Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}/>
                <Dropdown.Menu className="large-dropdown-menu">
                  <div className="dropdown-menu-wrapper">
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-graduation-cap main-theme-color"/></div>
                            <div><NavDropdown.Item href="/shoes"><b>{t("select1")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/running">{t("select2")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/casual">{t("select3")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shoes">{t("select1")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-flask main-theme-color"/></div>
                            <div><NavDropdown.Item href="/clothing"><b>{t("select5")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/shirt">{t("select6")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hoodies">{t("select7")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/jackets">{t("select8")}</NavDropdown.Item></li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-envira main-theme-color"/></div>
                            <div><NavDropdown.Item href="/accessories"><b>{t("select9")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/hats">{t("select10")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/bags">{t("select11")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/Socks">{t("select12")}</NavDropdown.Item></li>
                        
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="dropdown-header">
                          <div className="menu-icon-wrapper">
                            <div><i className="col-2 fa fa-2x fa-microchip main-theme-color"/></div>
                            <div><NavDropdown.Item href="/brands"><b>{t("select13")}</b></NavDropdown.Item></div>
                          </div>
                        </li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/nike">{t("select14")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/adidas">{t("select15")}</NavDropdown.Item></li>
                        <li className="job-sub-tabs"><NavDropdown.Item href="/puma">{t("select16")}</NavDropdown.Item></li>
                      </ul>
                    </div>
                   
                  </div>
                  
                  
                </Dropdown.Menu>
              </Dropdown>
              
              
              
              
               
               <Nav.Link href="/review">{t("REV")}</Nav.Link>
               <Nav.Link href="/Location">{t("Location")}</Nav.Link>
               <Nav.Link href="/contact">{t("CONTA")}</Nav.Link>
               <Nav.Link href="/faq">{"Faq"}</Nav.Link>

              

            </Nav>
            
          </Navbar.Collapse>
          </Container>
        
      </Navbar>

        </div>
    )
}

export default Navi