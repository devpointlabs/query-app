import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerD = (props) => {
    const [answerD, setAnswerD] = useState('')

   
        const handleSubmit = (e) => {
           
            e.preventDefault();
        props.updateAnswerD(answerD)
    }

    const handleChange = (e) => {
        setAnswerD( e.target.value)
    }



    return (
        <>
        {console.log("child component", AnswerD)}
            <Form onSubmit={handleSubmit} >
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
