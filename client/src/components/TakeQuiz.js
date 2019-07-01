import React, {useState, useEffect, } from 'react';
import { Header, Segment, List, Button, Container, Input, Radio, Card, Divider,   } from 'semantic-ui-react';
import axios from 'axios';
import Choice from './Choice';


const TakeQuiz = (props) => {
    
    const [ questions, setQuestions ] = useState([])
    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
          })
      }, [])

      const renderQuestions = () => {
        {questions.map( q =>
           <Card.Group itemsPerRow={4}>
          <Card key={q.id}>
            <Card.Content>
              <Divider />
              <Card.Header>
                { q.name }
              </Card.Header>
            </Card.Content>
          </Card>
      </Card.Group>
        )}
    return (
        <>
    <div>
    {renderQuestions()}
    </div>
        </>
    )
}
}
export default TakeQuiz;