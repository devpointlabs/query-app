import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List} from 'semantic-ui-react';
import axios from 'axios';



const ShowQuizzes = (props) => {
    
    const [ quizzes, setQuizzes ] = useState([])

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
        {renderQuizzes()}
        </>
    )
}

export default ShowQuizzes;
