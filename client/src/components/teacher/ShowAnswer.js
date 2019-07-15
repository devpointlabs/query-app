import React, {useEffect, useState, } from "react"
import {Card, Button, Segment, } from "semantic-ui-react"
import axios from "axios"

import ShowTeacherChoices from './ShowTeacherChoices'
import ShowStudentCorrectAnswer from './ShowStudentCorrectAnswer'



const ShowAnswer = (props, id) => {
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState([])
  const [grade, setGrade] = useState(false)

  useEffect( () => {  
      axios.get(`/api/show_grades/${props.match.params.quiz_id}`, { answer: answers,})
      .then( res => {
        debugger
          setAnswers(res.data)
      })
  }, [])

  const makeGrade = () => {
    setGrade(!grade )
  }

  const renderAnswer = () => {

      return answers.map( answer => ( 
      <ShowStudentCorrectAnswer answer={answer} { ...props} key={id} />
      )
      ) 
    }

    // if student gets the answer right then it adds that to 
    //the correct column of choice model or it displays incorrect
    // I want the question the correct answer, 
    //and the students answer to display the same line
    // i want the answer to be graded and sent 
    // to the database with the correct and false boolean
    // i want to make the true false toggle only happen for one
  


    return ( 
      <>
          {renderAnswer()}
         
         
          
          
      </>
      )


  

}

export default ShowAnswer;
