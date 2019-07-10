import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [answerA, setAnswerA] = useState('')

   
        const handleSubmit = (e) => {
            e.preventDefault();
        props.updateAnswerA(answerA)
    }

    const handleChange = (e) => {
        setAnswerA( e.target.value)
    }





    return (
        <>
            {console.log('child component:', answerA) }
      
            <Form onSubmit={handleSubmit} >
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
