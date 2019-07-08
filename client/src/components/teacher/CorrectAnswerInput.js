import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerA = (props) => {
    const [correctAnswer, setCorrectAnswer] = useState([])

   
        const handleSubmit = (e) => {
            debugger
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { correctAnswer, } )
            .then( res => {
                setCorrectAnswer( res.data )   
            })
    }

    const handleChange = (e) => {
        setCorrectAnswer( e.target.value)
    }



    return (
        <>
            <Form onSubmit={handleSubmit} >
              <Form.Input 
                placeholder='Correct Answer'
                
                value={correctAnswer}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default AnswerA; 
