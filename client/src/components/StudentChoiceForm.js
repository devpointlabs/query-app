import React, {useState, useEffect, } from 'react';
import { Form, } from "semantic-ui-react";
import axios from 'axios';
import ShowAnswer from './teacher/ShowAnswer';


const StudentChoiceForm = (props) => {
    const [answer, setAnswer] = useState([])
    
  
    

    const handleSubmit = (e) => {
        e.preventDefault()

         axios.post(`/api/questions/${props.question_id}/choices`,  { answer, })
         .then( res => {
             setAnswer(res.data)
         })
         .catch( res => {
             console.log(res)
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
