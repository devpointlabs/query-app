import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerD = (props) => {
    const [answerD, setAnswerD] = useState('')

   
        const handleSubmit = (e) => {
           
            props.updateAnswerD(answerD)
        }
        
        const handleChange = (e) => {
            e.preventDefault();
        setAnswerD( e.target.value)
    }



    return (
        <>
        
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='D'
                
                value={answerD}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default AnswerD; 
