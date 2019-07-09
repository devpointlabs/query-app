import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerC = (props) => {
    const [answerC, setAnswerC] = useState('')

   
        const handleSubmit = (e) => {
            
            e.preventDefault();
          props.updateAnswerC(answerC)
    }

    const handleChange = (e) => {
        setAnswerC( e.target.value)
    }



    return (
        <>
        {console.log("child component", answerC )}
            <Form onSubmit={handleSubmit} >
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
