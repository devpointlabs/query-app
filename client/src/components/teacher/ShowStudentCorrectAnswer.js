import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Button, } from "semantic-ui-react"




const ShowStudentCorrectAnswer = (props) => {
    const [answers, setAnswers] = useState([])
    const [grade, setGrade] = useState(false)
    const [toggleSubmit, setToggleSubmit] = useState(false)
    

    

        const makeGrade = () => {
            setGrade(!grade)
            
        }

      const handleSubmit = (e) => {

          props.sendGrade(grade, props.answer.question_id, props.answer.choice_id, props.answer.submission_id)

            alert("This was submitted as " + grade )
        } 
        const changeSubmit = () => {
            setToggleSubmit(!toggleSubmit)
        }    

    return (
        <> 
        {console.log("child: ", grade)}
        {console.log("child component", props.answer.submission_id)}

        <Card.Group>
            <Card>

    
          <Card.Content>question: {props.answer.name}</Card.Content>

          <Card.Content>Correct answer: {props.answer.correct_answer}</Card.Content>
          <hr />
          <Card.Content>Student: {props.answer.user_name}</Card.Content>
          <Card.Content>student's answer: {props.answer.answer}</Card.Content>
          <Card.Meta>{grade == false ? "marked wrong" : "marked correct" }</Card.Meta>
           
          <Button onClick={makeGrade}>{grade == false ? "Wrong" : "Correct" }</Button>
            <Button onClick={handleSubmit} >Submit</Button>
            </Card>
        </Card.Group>
        
        </>


    )
}

export default ShowStudentCorrectAnswer;