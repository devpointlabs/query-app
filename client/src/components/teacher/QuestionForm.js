import React, { useState, useEffect, } from 'react'
import { Form, Dropdown, Button } from "semantic-ui-react"
import axios from 'axios'
import { Link, } from "react-router-dom";
import WrongAnswers from './MultipleChoice'
import TrueFalse from './TrueFalse'
import FillInTheBlank from './FillInTheBlank';


const QuestionForm = (props) => {

 const [questionType, setQuestionType] = useState('multiple choice')

  
  const handleQuestionType = (e) => {
    setQuestionType(e.target.innerText)
  }
      const type =  ( 
        [
          { key: 1, text: 'true/false', value: 1 },
          { key: 2, text: 'multiple choice', value: 2 },
          { key: 3, text: 'fill in the blank', value: 3 },
        ]
      )


const dropDown = () => {
  return (
    <Dropdown
      placeholder='select a type of question'
      selection
      options={type}
      onChange={handleQuestionType}
    />
  )
}


   return (

     <>
     <Button Button style={{backgroundColor: "#494ca2", color:"white"}}
          as={Link} 
          to={"/quizzes"} > Back</Button>
              <h3>Question Type</h3>
              {dropDown()}
         
            {questionType == 'fill in the blank' ? <FillInTheBlank { ...props }/> : null }
            {questionType == 'multiple choice' ? <WrongAnswers  {...props } /> : null }
            {questionType == 'true/false' ? <TrueFalse { ...props } /> : null }

          
     </>

   )

}

export default QuestionForm;
