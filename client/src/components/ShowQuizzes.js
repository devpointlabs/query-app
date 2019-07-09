import React, {useState, useEffect, } from 'react';
import { Container, Button, Card, Segment, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TakeQuiz from './TakeQuiz'




const ShowQuizzes = (props) => {
    const [ quizzes, setQuizzes ] = useState([])
    const [showForm, setShowForm] = useState(false);

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            
            setQuizzes(res.data);
          })
      }, [])

      const handleDelete = (id) => {
        axios.delete(`/api/quizzes/${id}`)
        .then ( res => {
          setQuizzes(quizzes.filter( q => q.id !== id))
        })
      }

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
                <Link to={`/quizzes/${quiz.id}/questions`}>
                <Button style={{backgroundColor: "#4F1A9E", color: "white",}}>
                    Take Quiz
                </Button>
                </Link>
            <Button class="ui icon button" color="red" icon="trash" onClick={() => handleDelete(quiz.id)}></Button>
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

export default ShowQuizzes;
