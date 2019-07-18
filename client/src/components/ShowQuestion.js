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
  const [questions, setQuestions] = useState([])
  const [correct, setCorrect] = useState([])
  const [toggle, setToggle] = useState(false)
  const [number, setNumber] = useState(0)
  const [question, setQuestion] = useState("hi")

  useEffect( () => {  
    axios.get(`/api/quizzes/${props.match.params.quiz_id}/questions`)
    .then( res => {
        setQuestions(res.data)
    })
}, [])

const toggleClick = () => {
  setToggle(!toggle)
}

const handleDelete = (id) => {
  axios.delete(`/api/quizzes/${props.match.params.id}/questions/${id}`)
    .then( res => {
      setCorrect(correct.filter( q => q.id !== id))
    })
}

const renderQuestions = () => {
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
           
                <Button  color="red" icon="trash" onClick={() => handleDelete(c.id)}></Button>
         
      
                <Link to={{
                  pathname: `/api/quizzes/${props.match.params.id}/questions/edit`,
                  state: { question_id: c.id }
                }}>
                <Button  color="gray" icon="pencil" ></Button>
                </Link>
            
            </Card>
          </Card.Group>
        </Segment>
      </Container>
      <br />
      <br />
      <br />

      </>
    ))
  }


return (
<>
    <Link textAlign="center" to={`/quizzes/${props.match.params.id}/question_form`}>
      <Button>add a question</Button>
    </Link>

  <Link textAlign="center" to={`/quizzes/${props.match.params.id}/show_answer`}>
  <Button>Grade Answers</Button>
</Link>
{renderQuestions()}

  </>
)

}

export default ShowQuestion;
