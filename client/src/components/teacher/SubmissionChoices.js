import React, { useState, useEffect } from "react";
import { Card, } from "semantic-ui-react";
import axios from 'axios'
//for correct answers name is confusing 
const SubmissionChoices = (props) =>{
  const [correctAnswer, setCorrectAnswer] = useState([])

  useEffect( () => {
      axios.get(`/api/quizzes/${props.match.params.id}/questions`, { correct_answer: correctAnswer, })
      .then( res => {
          setCorrectAnswer(res.data)
      })
  }, [])

    const renderCorrectAnswers = () => {
        return correctAnswer.map( correct => (
            <Card key={correct.id}>
                <Card.Header>{correct.correct_answer}</Card.Header>
            </Card>
        ))
    }

  return (
      <>
      
      {renderCorrectAnswers()}
      
      </>
  )
}

export default SubmissionChoices;