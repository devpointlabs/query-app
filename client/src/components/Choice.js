import React, { setState, useState, useEffect } from "react";
import { Container, Button, Card, Segment, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TakeQuiz from './TakeQuiz'


const Choice = (props) => {
    const [choice, setChoice] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // useEffect( () => {
    //     axios.get(`/api/questions/${props.match.params.id}/choices`)
    //       .then( res => {
    //         setChoice(res.data);
    //       })
    //   }, [])

      const renderChoice = () => {
        return choice.map( c => (
          <>
          
          <Container>
            
            <Segment key={c.id}>
                <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header> {c.name} </Card.Header>
                    {/* <Card.Description> {c.description} </Card.Description> */}
                </Card.Content>
                </Card>
                <Button style={{backgroundColor: "#4F1A9E", color: "white",}} onClick={ <Link to={setChoice} /> } >
                
                    Show Choices
                </Button>
            </Card.Group>
            </Segment>
          </Container>
          <br />
          <br />
          <br />

          </>
        ))
      }
    
    
    return (
        <>
      <h2> hey</h2>
    {renderChoice()}
       
        </>
    )
}


export default Choice;