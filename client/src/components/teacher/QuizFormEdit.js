import React, { useState, useEffect, } from 'react'
import {Link, Redirect, } from "react-router-dom";
import { Form, Button } from "semantic-ui-react"
import axios from 'axios'
import TeacherShowQuizzes from './TeacherShowQuizzes';

const QuizFormEdit = (props) => {
 const [name, setName] = useState("");
 const [ showForm, setShowForm ] = useState(false);

 useEffect(() => {
  axios.get("/api/quizzes")
  .then( res => {
    setName(res.data.name)
  })
}, [])



  const handleSubmit = (e, history) => {
    e.preventDefault()
    
    axios.put(`/api/quizzes/${props.id}`,{ name })
    .then( res => {
      props.updateQuiz(res.data, props.id);

    })

    }

  const handleChange = (e) => {
    setName( e.target.value);

  }

  

  return(
    <>
    <Button Button style={{backgroundColor: "#494ca2", color:"white"}}
          as={Link} 
          to={"/"} > Back</Button>
    <Form onSubmit={handleSubmit} >
      <Form.Input
      placeholder="New Quiz Name"
      value={name}
      onChange={handleChange}
      />
    <Form.Button color="purple" >Submit</Form.Button>
    </Form>
    </>
  )
}

export default QuizFormEdit;
