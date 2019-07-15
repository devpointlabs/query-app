import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Button, } from "semantic-ui-react"
const ShowStudentCorrectAnswer = (props) => {
    const [answers, setAnswers] = useState([])
    const [grade, setGrade] = useState(false)

    useEffect( () => {  
    
        axios.get(`/api/questions/${props.match.params.question_id}/choices/`, { answer: answers,})
        .then( res => {
            console.log(res.data)
            setAnswers(res.data)
        })
    }, [])

    const makeGrade = () => {
        setGrade(!grade )
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

        <Card>
            <h1>
                Answers/choices
            </h1>
          <Card.Header>{props.answer.answer}</Card.Header>
           
          <Button onClick={makeGrade}>{grade == false ? "correct" : "wrong" }</Button>
        </Card>
        
        </>


    )
}

export default ShowStudentCorrectAnswer;