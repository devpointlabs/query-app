import React, { useState} from 'react'
import { Form, Radio, } from 'semantic-ui-react'
import axios from 'axios'

import QuestionInput from './QuestionInput'
import AnswerA from './AnswerA'
import AnswerB from './AnswerB'
import AnswerC from './AnswerC'
import AnswerD from './AnswerD'
import CorrectAnswerInput from './CorrectAnswerInput'

const MultipleChoice = (props) => {

    const handleSubmit = (e) => {
       
    
  
}


   

        //make button click so that when clicked the input field becomes correctanswer 

        //make a turnary to render the correct answer input in place of the dummy answer component,

        // then make it so that the outputs are displayed in the same order for the students to answer

        //also make the submit work across different components simaltainiously {i know is spelled wrong}

    return (
        <>
          <h1>Question</h1><QuestionInput { ...props } />

          <h4>A</h4><AnswerA { ...props} />

          <h4>B</h4><AnswerB { ...props} />

          <h4>C</h4><AnswerC { ...props} />

          <h4>D</h4><AnswerD { ...props} />

          <h4>Correct Answer</h4><CorrectAnswerInput { ...props} />

           <Form onSubmit={handleSubmit}>
          <hr />
           <Form.Button color="purple">Submit</Form.Button>
         </Form>
    
        </>

    )

}

export default MultipleChoice;