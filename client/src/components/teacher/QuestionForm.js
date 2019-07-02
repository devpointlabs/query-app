import React, { useState, useEffect, } from 'react'
import { Form, } from "semantic-ui-react"
import axios from 'axios'


const QuestionForm = (props) => {
 const [name, setName] = useState([]);
 const [correctAnswer, setCorrectAnswer] = useState([])

 const handleSubmit = (e, history) => {
   e.preventDefault();
    axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { name, correct_answer: correctAnswer, } )
    .then( ques => {
      setName(ques.data)
      history.push(`quizzes/${props.history.location.id}/questions`)
      
    })
 }




 const handleQuestionChange = (e) => {
   setName( e.target.value);
 }

 const handleAnswersChange = (e) => {
  setCorrectAnswer( e.target.value);
}



   return(

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

      <Form.Button color="purple">Submit</Form.Button>
      </Form>





     </>

   )

}

export default QuestionForm;