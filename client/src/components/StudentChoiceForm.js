import React, {useState, useEffect, } from 'react';
import { Form, Button, Grid, } from "semantic-ui-react";
import axios from 'axios';
import ShowAnswer from './teacher/ShowAnswer';
import { Link, } from 'react-router-dom';
import { AuthConsumer } from "../providers/AuthProvider"


const StudentChoiceForm = (props) => {
    const [choice, setChoice] = useState([])
    const [answer, setAnswer] = useState([])
    
    

    const handleSubmit = (e) => {
    console.log(answer)
        e.preventDefault()
         axios.post(`/api/questions/${props.question_id}/submission/${props.submission_id}/choices`, {answer})
         .then( res => {
             debugger
            props.auth.autoGrade(props.question_id, res.data.id, res.data.answer, props.correct_answer)
         })
         alert("Answer Submitted")
         props.next()
         setAnswer("")
         
    }
    // axios.post(`/api/quizzes/${id}/submissions`, {user_id: props.auth.user.id, quiz_id: id})
    //       .then( res => { 
    //         props.push(`/quizzes/${id}/submissions/${res.data.id}`)
    //       })
    //   }
    
    const handleChange = (e) => {
        setAnswer( e.target.value)
       
    }

    return (
        <>
           
        <Grid >
            
        <Form>
        <Grid.Row>
            <h5>Type your answer below:</h5>
            <Form.Input 
                placeholder="answer"
                value={answer}
                onChange={handleChange}
            />
            </Grid.Row>
            <Grid.Row>
            <br />
            <Button onClick={handleSubmit} style={{backgroundColor: "#2d248a", color: "white",}} >Submit</Button>
            </Grid.Row>
        </Form> 
        </Grid>
        </>
    )
    }

             const ConnectedStudentChoiceForm  = (props) => ( 
    
       
            <AuthConsumer>
                { 
                 auth =>  
                 <StudentChoiceForm { ...props } 
                 auth={auth} 
                 /> 
                 }
            </AuthConsumer>
       
   
)


export default ConnectedStudentChoiceForm