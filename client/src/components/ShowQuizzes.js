import React, {useState, useEfffect, } from 'react';
import {Card, Header,} from 'semantic-ui-react';
import axios from 'axios';



const ShowQuizzes = () => {
    
    state = [ quiz, setQuiz ] = useState("")

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            setBlogs(res.data);
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