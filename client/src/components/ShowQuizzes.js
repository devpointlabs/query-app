import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {Card, Header, Segment, List, Button, } from 'semantic-ui-react';
import QuizForm from "./QuizForm";


const ShowQuizzes = (props) => {
    
    const [ quizzes, setQuizzes ] = useState([])
    const [showForm, setShowForm] = useState(false);

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            setQuizzes(res.data);
          })
      }, [])

      const renderQuizzes = () => {
        return quizzes.map( quiz => (
          <Segment key={quiz.id}>
            <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header> {quiz.name} </Card.Header>
                {/* <Card.Description> {quiz.description} </Card.Description> */}
              </Card.Content>
            </Card>
          </Card.Group>
          </Segment>
        ))
      }
    
    
    return (
      <>
        <Header as="h1">My Quizzes</Header>
        <br />
        { showForm && 
          <QuizForm 
            toggleForm={setShowForm} 
            add={ quiz => setQuizzes([...quizzes, quiz])} 
          /> 
        }
        <Button onClick={ () => setShowForm(!showForm) }>
          { showForm ? "Close Form" : "Show Form"}
        </Button>
        <br />
        <List>
          {renderQuizzes()}
        </List>
        
        
      </>
    )
}

export default ShowQuizzes;