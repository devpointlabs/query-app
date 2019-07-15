import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Button, } from "semantic-ui-react"




const ShowStudentCorrectAnswer = (props) => {
    const [answers, setAnswers] = useState([])
    const [grade, setGrade] = useState(false)
    const [toggleSubmit, setToggleSubmit] = useState(false)
    

    useEffect( () => {  
    
        axios.get(`/api/questions/${props.match.params.question_id}/choices/`, { answer: answers,})
        .then( res => {
            console.log(res.data)
            setAnswers(res.data)
        })
    }, [])

        const makeGrade = () => {
            setGrade(!grade)
            
        }

      const handleSubmit = (e) => {

          props.updateGrade(grade)

            alert("This was submitted as " + grade )
        } 
        const changeSubmit = () => {
            setToggleSubmit(!toggleSubmit)
        }    
        // const renderAnswer = () => {

    //     return answers.map( answer => ( 
    //       <Card key={answer.id}>
    //         <h1>
    //             Answers/choices
    //         </h1>
    //       <Card.Header>{answer.answer}</Card.Header>
    //        
    //       <Button onClick={makeGrade}>{grade == false ? "true" : "false" }</Button>
    //     </Card>) )
    //   }

    return (
        <> 
        {console.log("child: ", grade)}

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
        
        </>


    )
}

export default ShowStudentCorrectAnswer;