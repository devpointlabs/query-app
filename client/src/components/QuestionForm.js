import React, { useState, useEffect, } from 'react'
import { Form, Button, } from "semantic-ui-react"


const QuestionForm = () => {
<<<<<<< HEAD
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  const handleChange = (e) => {
    setQuestion( e.target.value)

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

=======
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
 const [question, setQuestion] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault()


 }

 const handleChange = (e) => {
   setQuestion( e.target.value)

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

<<<<<<< HEAD
export default QuestionForm;
=======
export default QuestionForm;
>>>>>>> 9486450e2810a8293c39485b434b21271cd3a0ed
