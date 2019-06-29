import React, {useEffect, useState, } from "react"
import {Card, Form, } from "semantic-ui-react"
import axios from "axios"

import ShowTeacherChoices from './ShowTeacherChoices'

const ShowAnswer = (props) => {
  const [answers, setAnswers] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect( () => {
      axios.get(`/api/quizzes/${props.match.params.id}/questions`, { questions })
      .then( res => {
          setQuestions(res.data)
      })
  }, [])

 

   const renderQuestion = () => {
     return questions.map( question => (  <Card key={question.id}>
       <Card.Header>
         {question.name}
       </Card.Header>
     </Card>))
  }


  useEffect( () => {
    axios.get(`/api/questions/${props.match.params.id}/choices`, { answers })
    .then( res => {
        setAnswers(res.data)
    })
    .catch( err => {
      
    })
}, [])

const renderAnswer = () => {
    return answers.map( answer => ( <Card key={answer.id}>
      <Card.Header>{answer.answer}</Card.Header>
    </Card>) )
  }


   


   return ( 
    <>
      <h1>
        Questions
      </h1>
      {renderQuestion()}

      <h1>
        Answers/choices
      </h1>
      {renderAnswer()}
     
    </>
    )



  

}

export default ShowAnswer;
