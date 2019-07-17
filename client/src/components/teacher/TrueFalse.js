import React, { useState, useEffect,  } from 'react'
import { Form, Button, Grid} from 'semantic-ui-react';
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
        .then( res => {
            
            props.history.push(`/quizzes/${props.match.params.id}/questions/${res.data.id}`)
        })    
    }

    const handleQuestionChange = (e) => {
       setQuestion(e.target.value)
    }

    const toggleTrueFalse = () => {
        setCorrect( !correct)
    }

    return (
        <>
        <Grid>
            <Grid.Row>
                <h3 className="true-false-question">The question is set to </h3>
                <Button style={{backgroundColor: "#494ca2", color:"white"}} onClick={toggleTrueFalse} >{ correct == true ? "false" : "true" }</Button>
            </Grid.Row>
            <Grid.Row>
                <h3>Write your question here:</h3>
            </Grid.Row>
            <Grid.Row>
                <Form onSubmit={handleSubmit}>
                {/* the booleans are working but if console logged they are flip flopped */}
                    <Form.Input
                        placeholder="Question"
                        value={question}
                        onChange={handleQuestionChange}
                        style={{width: "800px"}}
                    />
                    <Form.Button style={{backgroundColor: "#494ca2", color:"white"}} onClick={handleTrueFalseChange}>Submit</Form.Button>        
                </Form>
            </Grid.Row>
        </Grid>
        </>
    )
}


export default TrueFalse;
