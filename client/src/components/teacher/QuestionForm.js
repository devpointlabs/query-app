import React, { useState, } from 'react'
import { Card, Dropdown, Button, Grid, } from "semantic-ui-react"
import { Link, } from "react-router-dom";
import WrongAnswers from './MultipleChoice'
import TrueFalse from './TrueFalse'
import FillInTheBlank from './FillInTheBlank';

import '../../index.css'

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
     <br />
     <div className="center-screen">
     <Grid >
     <Grid.Row>
     
      <Button basic color='violet'
        as={Link} 
        to={"/quizzes"} > Back
      </Button>
      </Grid.Row>
      <Grid.Row>
      <h2 className="question-type">Question Type:</h2>
      
      {dropDown()} 
      </Grid.Row>
     
     
     
      
     
         
        
        {questionType == 'fill in the blank' ? <FillInTheBlank { ...props }/> : null }
        
        {questionType == 'multiple choice' ? <WrongAnswers  {...props } /> : null }
       
        {questionType == 'true/false' ? <TrueFalse { ...props } /> : null }  
        
        </Grid>
        </div>
        
       
        
        
        
     </>
   )

   
}

export default QuestionForm;
