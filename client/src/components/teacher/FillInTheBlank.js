import React, { useState, } from "react"
import { Form, Grid, } from 'semantic-ui-react'
import axios from "axios"
import {Link,} from 'react-router-dom';


const FillInTheBlank = (props) => {

    const [name, setName] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')

     const handleSubmit = () => {
        axios.post(`/api/quizzes/${props.match.params.id}/questions`,
         { name,
           correct_answer: correctAnswer,
          question_type: "fill in the blank" })
         .then( res => {
          props.history.push(`/api/quizzes/${props.match.params.id}/questions`)
      })
    }

    const handleQuestionChange = (e) => {
       setName( e.target.value)
    }

    const handleAnswersChange = (e) => {
        setCorrectAnswer( e.target.value)
        console.log('handleAnswerChange')
    }

    
    
    return (
    <>
      <Grid className="center-grid">
        <Grid.Row>
          <h3>Write your question below:</h3>
        </Grid.Row>
          <Form onSubmit={handleSubmit}>
        <Grid.Row>
          <Form.Input
          placeholder="question"
          style={{width: "500px"}}
          value={name}
          onChange={handleQuestionChange}
          />
            </Grid.Row>
            <br />
            <Grid.Row>
            <br />
              <h3>Write the correct answer:</h3>
            </Grid.Row>
          <Form.Input 
          placeholder="correct answer"
          style={{width: "500px"}}
          value={correctAnswer}
          onChange={handleAnswersChange}
          />
          <Grid.Row>
          {/* <Link to={`/api/quizzes/${props.match.params.id}/questions`}>  */}
          <Form.Button style={{backgroundColor: "#4F1A9F", color:"white"}}>Submit</Form.Button>
          {/* </Link> */}
          </Grid.Row>
          <br />
        </Form>
        
      </Grid>
    </>
    )  
}

export default FillInTheBlank;