import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container } from 'semantic-ui-react';
import StudentChoiceForm from './StudentChoiceForm'
import EditQuestion from './teacher/EditQuestion'
import { Link, } from 'react-router-dom'
import axios from 'axios';
import Question from "./Question"
import {AuthConsumer} from '../providers/AuthProvider'
import CorrectToggle from "./CorrectToggle"

const ShowQuestion = (props) => {
    const [question, setQuestion] = useState({})

    useEffect( (id) => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions${id}`, { question })
        .then( res => {
            setQuestion(res.data)
        })
    }, [])

    const handleDelete = (id) => {
      axios.delete(`/api/quizzes/${props.match.params.id}/questions/${id}`)
        .then( res => {
          setCorrect(correct.filter( q => q.id !== id))
        })
    }


    const toggleClick = () => {
      setToggle(!toggle)
    }

    const renderCorrect = (c) => {
      if (props.auth.user.role == 'teacher' && toggle == true) {
       return <CorrectToggle id={c.id} correct={c.correct_answer} />
      } else if (props.auth.user.role == 'student' && toggle == true) { 
        return <StudentChoiceForm id={props.match.params.id}
         submission_id={props.match.params.submission_id}
         question_id={c.id}
          push={props.history.push}/>
        } else {
          return null
      }

    }

    const renderQuestion = () => {
      return questions.map( c => (
        <>
        <Container>
          <Segment key={c.id}>
            <Card.Group>
              <Card>
              <Card.Content>
                  <Card.Header>Question: {c.name} </Card.Header>
              </Card.Content>
                <Button 
                  style={{backgroundColor: "#7e6bc4", color: "white",}} 
                  onClick={toggleClick}
                  // onClick={showQuestion}
                  >
                  {toggle == true ? "Close" : "Answer"}
                  
                
                </Button>
              { props.auth.user.role == 'teacher' ?
                  <Button  color="red" icon="trash" onClick={() => handleDelete(c.id)}></Button>
              : null }
              { props.auth.user.role == 'teacher' ?
                  <Link to={{
                    pathname: `/api/quizzes/${props.match.params.id}/questions/edit`,
                    state: { question_id: c.id }
                  }}>
                  <Button  color="gray" icon="pencil" ></Button>
                  </Link>
              : null }
          {renderCorrect(c)}
          </Card>
          </Card.Group>
          </Segment>
          </Container>  
        </>   
      ))}




    return (
      <>
      {renderQuestion()}
      </>

    )

}

export default ShowQuestion;
