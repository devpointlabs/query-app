import React, {useState, useEffect, } from 'react';
import { Container, Card, Segment, Button, Header, Icon, } from 'semantic-ui-react';
import { Link, } from "react-router-dom";
import axios from 'axios';
import QuizFormEdit from './QuizFormEdit'

const TeacherShowQuizzes = (props) => {
  const [ quizzes, setQuizzes ] = useState([])
  const [ showForm, setShowForm ] = useState(false);
  
  useEffect( () => {
    axios.get("/api/quizzes")
      .then( res => {
        setQuizzes(res.data);
    })
  }, []);
  
  const deleteQuiz = (id) => {
    axios.delete(`api/quizzes/${id}`)
      .then(res => {
        let values = (quizzes.filter( quiz => quiz.id !== id ))
        setQuizzes(values)
      });
    renderQuizzes();
  }

  const updateQuiz = (quiz, id) => {
    const allQuizzes = quizzes.map( q => {
      if(q.id === id) {
        return quiz 
      } else {
        return q
      }
    })
    return setQuizzes(allQuizzes)
  }

  const renderQuizzes = () => {
    if(quizzes.length <= 0)
      return <Header as='h2'> - No Quizzes Available -</Header>
    return quizzes.map(quiz => (
      <>
        <Container> 
          <Segment key={quiz.id}>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header> {quiz.name} </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <br />
                  { showForm && 
                    <QuizFormEdit                    
                      updateQuiz={updateQuiz}
                      key={quiz.id}
                      id={quiz.id}                     
                    /> 
                  }
                  <Button onClick={ () => setShowForm(!showForm) }>
                    { showForm ? "Close" : "Edit name" }
                  </Button>
                  <Button as={Link} to={`/quizzes/${quiz.id}`} class="ui violet basic button">  
                    View
                  </Button>
                  <Button class="ui violet basic button" onClick={() => deleteQuiz(quiz.id)}> 
                    <Icon name="trash"/> Delete
                  </Button>

                  <Link textAlign="center" to={`/quizzes/${quiz.id}/question_form`}>
                    <Button>Add Question</Button>
                  </Link>
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
        <br />
        <br />
        <br />
        <Card.Group>
          {renderQuizzes()}
        </Card.Group>
      </>
    )
}

export default TeacherShowQuizzes;
