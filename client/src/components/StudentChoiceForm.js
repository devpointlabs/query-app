import React, {useState, useEffect, } from 'react'
import { Form, } from "semantic-ui-react"
import axios from 'axios'

const StudentChoiceForm = (props) => {
    const [answer, setAnswer] = useState([])

    

    const handleSubmit = (e, history) => {
        e.preventDefault()
        
         axios.post(`/api/questions/${props.match.params.id}/choices`)
         .then( res => {
             debugger
         })
    
    }
    
    
    const handleChange = (e) => {
        setAnswer( e.target.value)
        console.log('handleChange')
    }

    return (
        <>

        <Form onSubmit={handleSubmit}>
            <Form.Input 
                placeholder="answer"
                value={answer}
                onChange={handleChange}
            
            />
            <Form.Button style={{backgroundColor: "#4F1A9E", color: "white",}}>Submit</Form.Button>
        </Form>

        </>
    )
}

export default StudentChoiceForm;
