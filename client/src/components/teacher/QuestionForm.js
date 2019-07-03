import React, { useState, useEffect, } from 'react'
import { Form, Dropdown, } from "semantic-ui-react"
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

const questionType = [
  { key: 1, text: 'true/false', value: 1 },
  { key: 2, text: 'multiple choice', value: 2 },
  { key: 3, text: 'fill in the blank', value: 3 },
]

const questionDropdown = () => (
  <Dropdown
    placeholder='type of question'
    selection
    options={questionType}
  />
)



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

        {questionDropdown()}
        
          





     </>

   )

}

export default QuestionForm;
