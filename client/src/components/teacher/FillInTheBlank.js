import React, { useState, } from "react"
import { Form, } from 'semantic-ui-react'
import axios from "axios"


const FillInTheBlank = (props) => {

    const [name, setName] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')

     const handleSubmit = () => {
        axios.post(`/api/quizzes/${props.match.params.id}/questions`,
         { name, correct_answer: correctAnswer })
         .then( res => {
          props.history.push(`/quizzes/${props.match.params.id}/questions/${res.data.id}`)
      })
    }

    const handleQuestionChange = (e) => {
       setName( e.target.value)
    }

    const handleAnswersChange = (e) => {
        setCorrectAnswer( e.target.value)
        console.log('handleAnswerChange')
    }

    
    
     return (
    <>

      
      
        <Form onSubmit={handleSubmit}>
          <Form.Input
          placeholder="question"
          label="question"
          value={name}
          onChange={handleQuestionChange}
          />

          <Form.Input 
          placeholder="correct answer"
          label="correct answer"
          value={correctAnswer}
          onChange={handleAnswersChange}
          />
        
        <Form.Button>submit</Form.Button>
      </Form>
    
    </>
        

        )  
    }

export default FillInTheBlank;