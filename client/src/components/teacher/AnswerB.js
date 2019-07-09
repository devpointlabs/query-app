import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerB = (props) => {
    const [answerB, setAnswerB] = useState('')

   
        const handleSubmit = (e) => {
           
            e.preventDefault();
         props.updateAnswerB(answerB)
    }

    const handleChange = (e) => {
        setAnswerB( e.target.value)
    }



    return (
        <>
        {console.log("childComponent", answerB)}
            <Form onSubmit={handleSubmit} >
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
