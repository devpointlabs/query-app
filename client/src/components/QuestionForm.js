import React, { useState, useEffect, } from 'react'
import { Form, Button, } from "semantic-ui-react"


const QuestionForm = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault

    console.log("handleSubmit")
  }

  const handleChange = (e) => {


  }


    return(

      <>
      <Form onSubmit={handleSubmit}>
      <Form.Input
      placeholder="question"
      label="question"
      value={question}
      onchange={handleChange}
       />

      <Form.Button>submit</Form.Button>
      </Form>



      </>

    )

}

export default QuestionForm;
