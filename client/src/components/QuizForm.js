import React, { useState, useEffect, } from 'react'
import { Form, Button, } from "semantic-ui-react"
import axios from 'axios'


const QuizForm = (props) => {
 const [name, setName] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();
    axios.post(`/api/quizzes/${props.match.params.id}`, { quiz: { name, } })
    .then( res => {
      setName(res.data)
    })



 }

 const handleChange = (e) => {
   setName( e.target.value);

   

 }


   return(

     <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        placeholder="quiz"
        label="quiz"
        value={name}
        onChange={handleChange}
          />

      <Form.Button color="purple">Submit</Form.Button>
      </Form>
      


     </>

   )

}

export default QuizForm;
