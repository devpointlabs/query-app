import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [correctAnswer, setCorrectAnswer] = useState('')
    

   
        const handleSubmit = (e) => {
            
            props.updateCorrectAnswer(correctAnswer)
            
        }
        
        const handleChange = (e) => {
            e.preventDefault();
        setCorrectAnswer( e.target.value)
    }



    return (
        <>
    
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='Correct Answer'
                
                value={correctAnswer}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default AnswerA; 
