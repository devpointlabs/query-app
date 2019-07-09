import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const AnswerD = (props) => {
    const [answerD, setAnswerD] = useState([])

   
        const handleSubmit = (e) => {
           
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { answerD, } )
            .then( res => {
                setAnswerD( res.data )   
            })
    }

    const handleChange = (e) => {
        setAnswerD( e.target.value)
    }



    return (
        <>
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
