import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerC = (props) => {
    const [answerC, setAnswerC] = useState([])

   
        const handleSubmit = (e) => {
            
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { answerC, } )
            .then( res => {
                setAnswerC( res.data )   
            })
    }

    const handleChange = (e) => {
        setAnswerC( e.target.value)
    }



    return (
        <>
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
