import React, { useState, } from "react"
import { Form, } from 'semantic-ui-react'
import axios from "axios"


const FillInTheBlank = () => {

    const [question, setQuestion] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])

     const handleSubmit = () => {
        console.log("handleSumbit")
    }

    const handleQuestionChange = (e) => {
       setQuestion( e.target.value)
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
          value={question}
          onChange={handleQuestionChange}
          />

          <Form.Input 
          placeholder="correct answer"
          label="correct answer"
          value={correctAnswer}
          onChange={handleAnswersChange}
          />
        

      </Form>
    
    </>
        

        )  
    }

export default FillInTheBlank;