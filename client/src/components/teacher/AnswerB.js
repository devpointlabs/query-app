import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerB = (props) => {
    const [answerB, setAnswerB] = useState([])

   
        const handleSubmit = (e) => {
           
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { answerB, } )
            .then( res => {
                setAnswerB( res.data )   
            })
    }

    const handleChange = (e) => {
        setAnswerB( e.target.value)
    }



    return (
        <>
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
