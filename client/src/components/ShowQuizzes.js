import React, {useState, useEffect, } from 'react';
import {Card, Header,} from 'semantic-ui-react';
import axios from 'axios';



const ShowQuizzes = () => {
    
    const [ quiz, setQuiz ] = useState("")

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            setQuiz(res.data);
          })
      }, [])
    
      const renderQuizzes = () => {
        return quizzes.map( quiz => (
            <Card.Group>
            <Card key={quiz.id}>
              <Card.Content>
                <Card.Header> {quiz.name} </Card.Header>
                {/* <Card.Description> {quiz.description} </Card.Description> */}
              </Card.Content>
            </Card>
          </Card.Group>
        ))
      }
    
    
    return (
        <>
        {renderQuizzes()}
        </>
    )
}

export default ShowQuizzes;