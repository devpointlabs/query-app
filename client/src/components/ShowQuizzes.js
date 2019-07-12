import React, {useState, useEffect, } from 'react';
import { Container, Button, Card, Segment, Icon, Grid, } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TakeQuiz from './TakeQuiz'
import {AuthConsumer} from '../providers/AuthProvider'




const ShowQuizzes = (props) => {
    const [ quizzes, setQuizzes ] = useState([])
    const [showForm, setShowForm] = useState(false);

    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            
            setQuizzes(res.data);
          })
      }, [])

      const handleDelete = (id) => {
        axios.delete(`/api/quizzes/${id}`)
        .then ( res => {
          setQuizzes(quizzes.filter( q => q.id !== id))
        })
      }

      const createSubmission = (id) => {
        axios.post(`/api/quizzes/${id}/submissions`, {user_id: props.auth.user.id, quiz_id: id})
          .then( res => { 
            props.push(`/quizzes/${id}/questions/${res.data.id}`)
          })
      }

      const renderQuizzes = () => (
        
        
        <>   
          <Card.Group itemsPerRow={3}> 
           { quizzes.map( quiz => (
                <Card key={quiz.id}>
                <Card.Content>
                    <Card.Header> {quiz.name} </Card.Header>
                </Card.Content>
               
                <Button onClick={() => createSubmission(quiz.id)} style={{backgroundColor: "#4F1A9E", color: "white",}}>
                    Take Quiz
                </Button>
             {props.auth.user.role === 'teacher' ? 
            <Button class="ui icon button" color="red" icon="trash" onClick={() => handleDelete(quiz.id)}></Button>
            :null}
             </Card> 
           ))} 
                </Card.Group> 
          
        
          <br />
          <br />
          <br />

          </>
        
      )


    return (
        <>

    {props.auth.user.role === "student" ?
    <div>
    {renderQuizzes()}
    </div> 
    :null}

        </>
    )
}

const ConnectedShowQuizzes = (props) => (
  <AuthConsumer>
    {auth =>
      <ShowQuizzes {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedShowQuizzes;
