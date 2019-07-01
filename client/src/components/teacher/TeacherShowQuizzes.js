import React, {useState, useEffect, } from 'react';
import { Container, Button, Card, Segment, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import QuizForm from './QuizForm'



const TeacherShowQuizzes = (props) => {
    
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
          <>
          
          <Container>
            
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
          </Container>
          <br />
          <br />
          <br />

          </>
        ))
      }
    
    
    return (
        <>

    {renderQuizzes()}
       
        </>
    )
}

export default TeacherShowQuizzes;
