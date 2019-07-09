import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Form, } from 'semantic-ui-react'


const QuestionInput = (props) => {
    const [name, setName] = useState([])

   
        const handleSubmit = (e) => {
            
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { name, } )
            .then( res => {
                setName( res.data )   
            })
    }

    const handleChange = (e) => {
        setName( e.target.value)
    }



    return (
        <>
            <Form onSubmit={handleSubmit} >
              <Form.Input 
                placeholder='Question'
                
                value={name}
                onChange={handleChange}
             />

                
          </Form>
        
        </>
    )


}

export default QuestionInput; 
