import React, {useEffect, useState, } from "react"
import {Card, Form, } from "semantic-ui-react"
import axios from "axios"
import ShowAnswer from "./ShowAnswer";

const ShowTeacherChoices = (props) => {
    const [questions, setQuestions] = useState([])

    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`, { questions })
        .then( res => {
            setQuestions(res.data)
        })
    }, [])
    
    
    
     const renderQuestion = () => {
       return questions.map( question => (  <Card key={question.id}>
         <Card.Header>
           {question.name}
         </Card.Header>
       </Card>))
    }
    
    
    
     return ( 
      <>
        <h1>
          Questions
        </h1>
            {renderQuestion()} 
      </>
      )
}

export default ShowTeacherChoices;
