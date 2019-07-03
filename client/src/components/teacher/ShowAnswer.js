import React, {useEffect, useState, } from "react"
import {Card, Form, } from "semantic-ui-react"
import axios from "axios"

import ShowTeacherChoices from './ShowTeacherChoices'


const ShowAnswer = (props) => {
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState([])

  useEffect( () => {
      axios.get(`/api/questions/${props.match.params.id}/choices`, { answers })
      .then( res => {
          setAnswers(res.data)
      })
      .catch( err => {
        
      })
  }, [])

  const renderAnswer = () => {
      return answers.map( answer => ( <Card key={answer.id}>
        <Card.Header>{answer.answer}</Card.Header>
      </Card>) )
    }

    //if student gets the answer right then it adds that to the correct column of choice model or it displays incorrect

    const getItRight = () => {
      
      switch (true) {
        case answers === correct: 
        setCorrect()
        break;
      }
    }


    return ( 
      <>
          <ShowTeacherChoices { ...props } />
          
      
          <h1>
              Answers/choices
          </h1>
          {renderAnswer()}
      </>
      )


  

}

export default ShowAnswer;
