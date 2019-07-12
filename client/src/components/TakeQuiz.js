import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container } from 'semantic-ui-react';
import StudentChoiceForm from './StudentChoiceForm'
import ShowQuestion from './ShowQuestion'
import EditQuestion from './teacher/EditQuestion'
import { Link, } from 'react-router-dom'
import axios from 'axios';
import {AuthConsumer} from '../providers/AuthProvider'




const ShowQuestions = (props, id,) => {
    
    const [ questions, setQuestions ] = useState([])
    const [toggle, setToggle] = useState(false)



    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
          })
      }, [])

      const toggleClick = () => {
        setToggle( !toggle)
      }

      const handleDelete = (id) => {
        axios.delete(`/api/quizzes/${props.match.params.id}/questions/${id}`)
          .then( res => {
            setQuestions(questions.filter( q => q.id !== id))
          })
      }

    //  const array = questions.map()
      
     
      const renderQuestions = () => {
        return questions.map( questions => (
          <>
          <Container>
            <Segment key={questions.id}>
              <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header>Question: {questions.name} </Card.Header>
                </Card.Content>
                <Button style={{backgroundColor: "#4F1A9E", color: "white",}} onClick={toggleClick}>answer</Button>
                { props.auth.user.role == 'teacher' ?
                    <Button  color="red" icon="trash" onClick={() => handleDelete(questions.id)}></Button>
                : null }
                { props.auth.user.role == 'teacher' ?
                    <Link to={{
                      pathname: `/api/quizzes/${props.match.params.id}/questions/edit`,
                      state: { question_id: questions.id }
                    }}>
                    <Button  color="gray" icon="pencil" ></Button>
                    </Link>
                : null }
            { toggle  ? <StudentChoiceForm question_id={props.match.params.id} push={props.history.push}/> : null  }
                
                </Card>
              </Card.Group>
            </Segment>
          </Container>
          <br />
          <br />
          <br />

          </>
        )).splice()
      }
    
    return (
      <>
      { props.auth.user.role == 'teacher' ?
          <Link textAlign="center" to={`/quizzes/${id}/question_form`}>
            <Button>add a question</Button>
          </Link>
        :
        null  
      }
      { props.auth.user.role == 'teacher' ?
        <Link textAlign="center" to={`/quizzes/${props.match.params.id}/show_answer`}>
        <Button>show answers</Button>
      </Link>
      : null }
      
        {console.log(questions)}

    {renderQuestions()}
    
        </>
    )
}

const ConnectedShowQuestions = (props) => (
  <AuthConsumer>
    {auth =>
      <ShowQuestions {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedShowQuestions;



























// const Takequestions = (props) => {
    
//     const [ name, setName ] = useState({})

//     useEffect( () => {
//         axios.get(`/api/questions/${props.match.params.id}/questions`, {name})
//           .then( res => {
//             setName(res.data);
//           })
//       }, [])

//     const renderName = () => {
        
//       return name.map( n => (
//           <>
//             <Segment key={n.id}>
//                 <Card.Group>
//                 <Card>
//                 <Card.Content>
//                     <Card.Header> {n.name} </Card.Header>
//                     {/* <Card.Description> {question.description} </Card.Description> */}
//                 </Card.Content>
//                 </Card>
//             </Card.Group>
//             </Segment>
//           <br />
//           <br />
//           <br />

//           </>
//        ) )
    
//     }
//         return (
//         <>
//         {renderName()}
//         </>
//         )
        

// }

// export default Takequestions;