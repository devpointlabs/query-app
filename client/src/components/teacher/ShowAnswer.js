import React, {useEffect, useState, } from "react"
import {Card, Button, Segment, Form, } from "semantic-ui-react"
import axios from "axios"

import { AuthConsumer, } from '../../providers/AuthProvider'
import ShowTeacherChoices from './ShowTeacherChoices'
import ShowStudentCorrectAnswer from './ShowStudentCorrectAnswer'



const ShowAnswer = (props, id) => {
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState([])
  
  
  

  useEffect( () => {  
      axios.get(`/api/show_grades/${props.match.params.quiz_id}`, { answer: answers,})
      .then( res => {
          setAnswers(res.data)
      })
  }, [])




   


  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
  }
  
  const autoGrade = (id, choice_id, correct) => {
  
    if (props.answer.answer === props.answer.correct_answer) {
        axios.put(`/api/questions/${id}/choices/${choice_id}`, { correct: true, }) 
    } else {
      return null
    }
  }
  
  const sendGrade = (grade, comment, id, choice_id, sub_id) => {
    let params = { correct: grade, comment: comment, submission_id: sub_id }
    
    axios.put(`/api/questions/${id}/choices/${choice_id}`, params)
    

  }

  const renderAnswer = () => {

      return answers.map( answer => ( 
        
        <ShowStudentCorrectAnswer sendGrade={sendGrade} autoGrade={autoGrade} answer={answer} { ...props} key={id} />
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
          
          
          {console.log(answers)}
         
          
            
      </>
      )
      

}

const ConnectedShowAnswer = (props) => (
  <AuthConsumer>
    { auth => 
    <ShowAnswer { ...props } auth={auth} />
    }

  </AuthConsumer>
)

export default ConnectedShowAnswer;
