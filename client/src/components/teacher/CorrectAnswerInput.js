import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [correctAnswer, setCorrectAnswer] = useState('')
    

   
        const handleSubmit = (e) => {
            
            e.preventDefault();
            props.updateCorrectAnswer(correctAnswer)
          
    }

    const handleChange = (e) => {
        setCorrectAnswer( e.target.value)
    }



    return (
        <>
        {console.log("child Component", correctAnswer)}
            <Form onSubmit={handleSubmit} >
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
