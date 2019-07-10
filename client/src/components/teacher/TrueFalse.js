import React, { useState, useEffect,  } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react';
import axios from 'axios'

const TrueFalse = (props) => {
    const [question, setQuestion] = useState([])
    const [correct, setCorrect] = useState('')
    const [bool, setBool] = useState('')

    const handleTrueFalseChange = () => {
         setBool(bool === correct)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/quizzes/${props.match.params.id}/questions`,  {
            name: question,
            correct_answer: bool,
        } )
        console.log(handleSubmit)
    }


    const handleQuestionChange = (e) => {
       setQuestion(e.target.value)
    }

    const toggleTrueFalse = () => {
        setCorrect( !correct)
    }

    return (
        <>
        {console.log("correct:", correct)}
        {console.log("bool:", bool)}

        <h3>the question is set to {correct == true ? "false" : "true" }</h3>
        <Button onClick={toggleTrueFalse} >{ correct == true ? "false" : "true" }</Button>
        <Form onSubmit={handleSubmit}>
            {/* the booleans are working but if console logged they are flip flopped */}
            <Form.Input
                placeholder="question"
                label="question"
                value={question}
                onChange={handleQuestionChange}
            />
            <Form.Button onClick={handleTrueFalseChange}>Submit</Form.Button>
        </Form>
         </>
    )
}



export default TrueFalse;
