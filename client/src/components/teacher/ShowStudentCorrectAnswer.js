import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Button, Form,} from "semantic-ui-react"





const ShowStudentCorrectAnswer = (props) => {
    const [grade, setGrade] = useState(false)
    // const [toggleSubmit, setToggleSubmit] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)
    const [teacherComment, setTeacherComment] = useState('')


    useEffect( () => {
        setTeacherComment(props.answer.comment)
        setGrade(props.answer.correct)
    }, [props])
    

    
    const useToggle = () => {
        setToggleForm(!toggleForm)
      }
  


      const handleCommentChange = (e) => {

          setTeacherComment(e.target.value)
      }

      const commentForm = (e) => {
          return <Form onSubmit={handleSubmit}>
              <Form.Input
                label="comment"
                placeholder='comment'
                value={teacherComment} 
                onChange={handleCommentChange}
              />
              <Form.Button>Submit</Form.Button>
          </Form>

         
      }

      const renderGrade = () => {
        if (grade == true) {
            return "Correct"
        } else if (grade == false) {
            return "Wrong"
        } else {
            return "Not Graded"
        }
    }


        const makeGrade = () => {
            setGrade(!grade)
            
        }

        const sendAutoGrade = (e) => {
            debugger
            e.preventDefault()
            props.autoGrade(props.answer.question_id, props.answer.choice_id, props.answer.correct_answer, props.answer.answer)
        }



      const handleSubmit = (e) => {
          e.preventDefault()

          props.sendGrade(grade, teacherComment, props.answer.question_id, props.answer.choice_id, props.answer.submission_id)
          
           
        } 
        // const changeSubmit = () => {
        //     setToggleSubmit(!toggleSubmit)
        // }    

     

        const teacherButtons = () => {
            if ( props.auth.user.role == 'teacher') {

               return <>
                        <Card.Meta>{grade == false ? "marked wrong" : "marked correct" }</Card.Meta>
                         <Button onClick={makeGrade}>{grade == false ? "Wrong" : "Correct" }</Button>
                        <Button onClick={handleSubmit} >Submit</Button>
                        <Button onClick={useToggle}>{toggleForm == true ? "Close" : "Add Comment"}</Button>
                </>
            }
        }

      

  
        // tell students how many write and wrong answers per test 
        // 


    return (
        <> 

        <Card.Group>
          <Card>
            <Card.Content>question: {props.answer.name}</Card.Content>
                <Card.Content>{props.auth.user.role == 'teacher'
                                            ? 
                "your Grade" : "Teachers grade:"} {renderGrade()} 
                </Card.Content>
                    <Card.Content>Correct answer: {props.answer.correct_answer}</Card.Content>
                    <Card.Content>Teachers notes: { teacherComment === null ? "No Comment" : teacherComment} 
                    
                    </Card.Content>
            <hr />
                        
                        <Card.Content>{props.auth.user.role == 'teacher' ? `${props.answer.user_name}'s `
                         : 
                         "Your "} answer:  {props.answer.answer}</Card.Content>
            
                {teacherButtons()}
                {toggleForm == true ? commentForm() : null}
            </Card>
        </Card.Group>
        {console.log(handleSubmit)}
        
        </>


    )
}

export default ShowStudentCorrectAnswer;