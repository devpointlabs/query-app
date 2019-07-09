import React, { useState, useEffect,  } from 'react'
import { Form, Radio } from 'semantic-ui-react';
import axios from 'axios'

const TrueFalse = (props) => {
    const [question, setQuestion] = useState([])
    const [correct, setCorrect] = useState(false)

    const handleChange = () => {
        
    }

    const handleSubmit = (e) => {
       
            e.preventDefault();
           axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { 
               name: question, 
               correct_answer: correct, 
               
            } )
            .then( ques => {
                setQuestion(ques.data)   
            })
            console.log(handleSubmit)
        
        
    }
        //ensure that state doesnt get toggled everytime user toggles true/false
    const handleQuestionChange = (e) => {
       setQuestion(e.target.value)
    }

    const toggleTrueFalse = () => {
        setCorrect( !correct)
        
    }
    
    return ( 
        <>
            <h3>the question is set to {correct == true ? 'true' : "false"}</h3>
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