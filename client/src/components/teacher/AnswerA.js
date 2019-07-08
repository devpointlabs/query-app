import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [answerA, setAnswerA] = useState([])

   
        const handleSubmit = (e) => {
            
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { answerA, } )
            .then( res => {
                setAnswerA( res.data )   
            })
    }

    const handleChange = (e) => {
        setAnswerA( e.target.value)
    }





    return (
        <>
      
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
