import React, {useState, useEffect, } from 'react';
import { Form, Button, } from "semantic-ui-react";
import axios from 'axios';
import ShowAnswer from './teacher/ShowAnswer';
import { Link, } from 'react-router-dom';


const StudentChoiceForm = (props) => {
    const [choice, setChoice] = useState([])
    const [answer, setAnswer] = useState([])
    
    

    const handleSubmit = (e) => {
    console.log(answer)
        e.preventDefault()
         axios.post(`/api/questions/${props.id}/submission/${props.submission_id}/choices`, {answer})
         alert("Answer Submitted")
         props.push('/')
        //  .then( res => {             
        //     setAnswer(res.data)             
        // })
        // .then( res => {
        //     props.history.push(`/questions/${props.question_id}/choices/${res.data.id}`)

        // })
        //  .catch( res => {
        //      console.log(res)
        //  })
    
    }
    
    const handleChange = (e) => {
        setAnswer( e.target.value)
       
    }

    return (
        <>
     
       
        
        <Form>
            <Form.Input 
                placeholder="answer"
                value={answer}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit} style={{backgroundColor: "#2d248a", color: "white",}}>Submit</Button>
          
        </Form>

        </>
    )
}

export default StudentChoiceForm;
