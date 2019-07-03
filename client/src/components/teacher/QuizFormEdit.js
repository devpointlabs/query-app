import React, { useState, useEffect, } from 'react'
import {Link,} from "react-router-dom";
import { Form, } from "semantic-ui-react"
import axios from 'axios'
import TeacherHome from './TeacherHome';

const QuizFormEdit = (props) => {
 const [name, setName] = useState("");

 useEffect(() => {
  axios.get("/api/quizzes")
  .then( res => {
    setName(res.data.name)
  })
}, [])

  const handleSubmit = (e, history) => {
    e.preventDefault();
    axios.put(`/api/quizzes/${props.id}`,{ name })
    .then( e => {
      setName(e.data.name)
     // it works, but after clicking submit it manually needs to refresh the page.
     // needs a fix to load the page after submit
      
    })
    }

  const handleChange = (e) => {
    setName( e.target.value);
  }

  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Input
      placeholder="New Quiz Name"
      value={name}
      onChange={handleChange}
      />
    <Form.Button color="purple">Submit</Form.Button>
    </Form>
    </>
  )
}

export default QuizFormEdit;
