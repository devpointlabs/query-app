import React, { useState, useEffect, } from 'react'
import { Form, Button, } from "semantic-ui-react"
import axios from 'axios'


const QuestionForm = (props) => {
 const [name, setName] = useState('');

 const handleSubmit = (e, history) => {
   e.preventDefault();
    axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { name, } )
    .then( res => {
      setName(res.data)
      props.history.push("/")
    })
 }


 const handleChange = (e) => {
   setName( e.target.value);
 }



   return(

     <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        placeholder="question"
        label="question"
        value={name}
        onChange={handleChange}
          />

      <Form.Button color="purple">Submit</Form.Button>
      </Form>





     </>

   )

}

export default QuestionForm;
