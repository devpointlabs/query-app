import React, {useEffect, useState, } from "react"
import {Card, Form, Radio, } from "semantic-ui-react"


import axios from "axios"


const ShowTeacherChoices = (props) => {
    const [questions, setQuestions] = useState([])
    const [correctAnswers, setCorrectAnswer] = useState([])
    const [everything, setEverything] = useState([])
   

    

    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.question_id}/questions`, { 
          name: questions,
         
          
         })
        .then( res => {
            setQuestions(res.data)
        })
    }, [])

    useEffect( () => {
      axios.get(`/api/quizzes/${props.match.params.question_id}/questions/`, { 
        correct_answer: correctAnswers,
      })
      .then( res => {
          setCorrectAnswer(res.data)
      })
  }, [])
    
    
    
     const renderQuestions = () => {
       return questions.map( question => (  <Card key={question.id}>
         <h1>Question</h1>

         <Card.Header>
           
         <pre>
           {question.name}
         </pre>
         </Card.Header>
       </Card>))
    }
    
    const renderCorrect = () => {
      return correctAnswers.map ( correct => (  <Card key={correct.id}>
        <h1>correctAnswers</h1>
        <Card.Header>

          {correct.correct_answer}
        </Card.Header>
      </Card>))
    }
    
    
     return ( 
      <>
      

      {renderQuestions()}
      {renderCorrect()}
      
      </>
      )
}

export default ShowTeacherChoices;
