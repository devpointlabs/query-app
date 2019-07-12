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

  const renderQuizzes = () => (
    <>
        <Container> 
            <Card.Group itemsPerRow={3}>
     { quizzes.map(quiz => (
              <Card key={quiz.id}>
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
                  <Button style={{backgroundColor: "#494ca2", color:"white"}} 
                          onClick={ () => setShowForm(!showForm) }>
                    { showForm ? "Close" : "Edit name" }
                  </Button>
                  <Button style={{backgroundColor: "#8186d5", color:"white"}} 
                          as={Link} 
                          to={`/quizzes/${quiz.id}`} 
                          class="ui violet basic button">  
                    View
                  </Button>
                  <Button style={{backgroundColor: "#c6cbef", color:"white"}}
                          class="ui violet basic button" onClick={() => deleteQuiz(quiz.id)}> 
                    <Icon name="trash"/> 
                  </Button>
                    <hr />
                   
                  <Link textAlign="center" to={`/quizzes/${quiz.id}/question_form`}>
                    <Button style={{backgroundColor: "#494ca2", color:"white"}} >add a question</Button>
                  </Link>
                </Card.Content>
              </Card> 
         ))} 
            </Card.Group>
        </Container>
        <br />
        <br />
        <br />
      </>
    
  )
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
