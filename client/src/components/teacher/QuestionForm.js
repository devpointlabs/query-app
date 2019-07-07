import React, { useState, useEffect, } from 'react'
import { Form, Dropdown, } from "semantic-ui-react"
import axios from 'axios'
import WrongAnswers from './MultipleChoice'
import TrueFalse from './TrueFalse'
import FillInTheBlank from './FillInTheBlank';


const QuestionForm = (props) => {

 const [questionType, setQuestionType] = useState('')

  
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
              {dropDown()}
         
            {questionType == 'fill in the blank' ? <FillInTheBlank { ...props }/> : null }
            {questionType == 'multiple choice' ? <WrongAnswers  {...props } /> : null }
            {questionType == 'true/false' ? <TrueFalse { ...props } /> : null }

              <h3>Question Type</h3>
          
     </>

   )

}

export default QuestionForm;
