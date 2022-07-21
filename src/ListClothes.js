import { React, useState } from 'react'
import data from "./Components.json";
import { Row, Container, Card, Col } from "react-bootstrap";
import {useRef} from 'react';


function List(props) {
    const ref = useRef(null);

    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    const hanlde = (event) => {
        console.log(event.currentTarget.id);

    console.log(ref.current.id);
    }
    return (
        <>
        {
            filteredData.map((item) => (
                <Col onClick={hanlde} ref={ref}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <p>{item.cost}</p>
                      <p>{item.subtitle}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
          </>
    )
}

export default List