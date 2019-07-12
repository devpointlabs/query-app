import React, { useState } from 'react'
import { Form, Button} from "semantic-ui-react"
import axios from "axios"

const QuizForm = (props) => {
  const [quizzes, setQuizzes] = useState([])




 const handleSubmit = (e) => {
   e.preventDefault()
  
   axios.post(`/api/quizzes/`, { name: quizzes })
   .then( res => {
     props.history.push(`/quizzes/${res.data.id}/question_form`)

   })
 }

 const handleChange = (e) => {
   setQuizzes( e.target.value)
 }


 return ( 
   <> 

    <Form onSubmit={handleSubmit}>

      <Form.Input 
      label="create quiz"
      placeholder="quiz"
      value={quizzes}
      onChange={handleChange}
      
      />
        <Form.Button>Submit</Form.Button>
    </Form>
   </>
 )
}

export default QuizForm;
