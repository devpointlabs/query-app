import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, } from 'semantic-ui-react';
import axios from 'axios';


const TakeQuiz = (props) => {
    
    const [ questions, setQuestions ] = useState([])

    // useEffect( (props) => {
    //     axios.get(`/api/quizzes/${props.match.params.id}/questions/${id}`)
    //       .then( res => {
    //         setQuestions(res.data);
    //       })
    //   }, [])

      const renderQuestions = () => {
        return questions.map( question => (
          <Segment key={question.id}>
            <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header> {question.name} </Card.Header>
                {/* <Card.Description> {quiz.description} </Card.Description> */}
              </Card.Content>
            </Card>
          </Card.Group>
          </Segment>
        ))
      }
    
    
    return (
        <>
        {renderQuestions()}
        </>
    )
}

export default TakeQuiz;