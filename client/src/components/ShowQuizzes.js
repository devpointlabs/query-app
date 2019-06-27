import React, {useState, useEffect, } from 'react';
<<<<<<< HEAD
import {Card, Header,} from 'semantic-ui-react';
=======
import {Card, Header, Segment, List} from 'semantic-ui-react';
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
import axios from 'axios';



<<<<<<< HEAD
const ShowQuizzes = () => {

    const [ quiz, setQuiz ] = useState("")
=======
const ShowQuizzes = (props) => {
    
    const [ quizzes, setQuizzes ] = useState([])
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
<<<<<<< HEAD
            setQuiz(res.data);
=======
            setQuizzes(res.data);
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
          })
      }, [])

      const renderQuizzes = () => {
        return quizzes.map( quiz => (
<<<<<<< HEAD
            <Card.Group>
            <Card key={quiz.id}>
=======
          <Segment key={quiz.id}>
            <Card.Group>
            <Card>
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
              <Card.Content>
                <Card.Header> {quiz.name} </Card.Header>
                {/* <Card.Description> {quiz.description} </Card.Description> */}
              </Card.Content>
            </Card>
          </Card.Group>
<<<<<<< HEAD
        ))
      }


=======
          </Segment>
        ))
      }
    
    
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
    return (
        <>
        {renderQuizzes()}
        </>
    )
}

<<<<<<< HEAD
export default ShowQuizzes;
=======
export default ShowQuizzes;
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
