import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [answerA, setAnswerA] = useState('')

   
        const handleSubmit = (e) => {
            props.updateAnswerA(answerA)
        }
        
        const handleChange = (e) => {
            e.preventDefault();
        setAnswerA( e.target.value)
    }





    return (
        <>
           
      
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='A'
              
                value={answerA}
                onChange={handleChange}
             />
          </Form>
        
        </>
    )


}

export default AnswerA; 
