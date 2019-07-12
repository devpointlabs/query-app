import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerB = (props) => {
    const [answerB, setAnswerB] = useState('')

   
        const handleSubmit = (e) => {
            console.log(handleSubmit)
          
         props.updateAnswerB(answerB)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setAnswerB( e.target.value)
    }



    return (
        <>
      
            <Form onBlur={handleSubmit} >
              <Form.Input 
                placeholder='B'

                
                value={answerB}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default AnswerB; 
