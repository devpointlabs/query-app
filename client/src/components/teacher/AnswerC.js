import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerC = (props) => {
    const [answerC, setAnswerC] = useState('')

   
        const handleSubmit = (e) => {
            props.updateAnswerC(answerC)
        }
        
        const handleChange = (e) => {
            e.preventDefault();
        setAnswerC( e.target.value)
    }



    return (
        <>
        
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='C'
                value={answerC}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default AnswerC; 
