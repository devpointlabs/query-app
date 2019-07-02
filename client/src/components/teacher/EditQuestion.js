import React, {useState, setState, useEffect, } from 'react';
import axios from 'axios'
import {Header, Form, Segment, Button,  } from 'semantic-ui-react';
import QuestionForm from './QuestionForm';





const EditQuestion = (props) => {

  const [name, setName] = useState('');

  useEffect(() => {
    axios.get(`/api/quizzes/${props.match.params.id}/questions/${props.location.state.question_id}`)
    .then( res => {
      setName(res.data.name)
      console.log(res.data.name)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { question_id } = props.location.state
    let params = { name: name, quiz_id: props.match.params.id }
     axios.put(`/api/quizzes/${props.match.params.id}/questions/${question_id}`, params)
     }

  const handleChange = (e) => {
    setName( e.target.value);
  }

return (
      <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Question Name"
          label="question"
          defaultValue={name}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </>
      )
      
    }
export default EditQuestion;