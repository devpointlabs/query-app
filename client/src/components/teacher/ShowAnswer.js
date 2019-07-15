import React, {useEffect, useState, } from "react"
import {Card, Button, Segment, } from "semantic-ui-react"
import axios from "axios"

import ShowTeacherChoices from './ShowTeacherChoices'



const ShowAnswer = (props, id) => {
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState([])
  const [grade, setGrade] = useState(false)

  useEffect( () => {  
    
      axios.get(`/api/questions/${props.match.params.question_id}/choices`, { answer: answers,})
      .then( res => {
          setAnswers(res.data)
      })
  }, [])

  const makeGrade = () => {
    setGrade(!grade)
  }

  const renderAnswer = () => {

      return answers.map( answer => ( 
        <Card key={answer.id}>
          <h1>
              Answers/choices
          </h1>
        <Card.Header>{answer.answer}</Card.Header>
         
        <Button onClick={makeGrade}>{grade == false ? "true" : "false" }</Button>
      </Card>) )
    }

    //if student gets the answer right then it adds that to the correct column of choice model or it displays incorrect

  


    return ( 
      <>
          <ShowTeacherChoices { ...props } />
          {console.log(grade)}
          
        {console.log(answers)}
          {renderAnswer()}
      </>
      )


  

}

export default ShowAnswer;
