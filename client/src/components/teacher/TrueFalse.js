import React, { useState, useEffect,  } from 'react'
import { Form, Radio } from 'semantic-ui-react';

const TrueFalse = () => {
    const [question, setQuestion] = useState([])
    const [correct, setCorrect] = useState(true)

    const handleChange = () => {
        
    }

    const handleSubmit = () => {
        debugger
    }

    const handleQuestionChange = () => {
        debugger
    }

    const toggleTrueFalse = () => {
        setCorrect( !correct)
    }
    
    return ( 
        <>
        <Form onSubmit={handleSubmit}>

        
          <Form.Input
          placeholder="question"
          label="question"
          value={question}
          onChange={handleQuestionChange}
          />

            <Form.Button onClick={toggleTrueFalse} >{ correct == true ? 'true' : 'false' }</Form.Button>
            
        </Form>
         </>
    )
}

export default TrueFalse; 