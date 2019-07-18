import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container } from 'semantic-ui-react';
import StudentChoiceForm from './StudentChoiceForm'
import ShowQuestion from './ShowQuestion'
import EditQuestion from './teacher/EditQuestion'
import { Link, } from 'react-router-dom'
import axios from 'axios';
import Question from "./Question"
import {AuthConsumer} from '../providers/AuthProvider'
import CorrectToggle from "./CorrectToggle"
 




const TakeQuiz = (props) => {
    
    const [questions, setQuestions] = useState([])
    const [correct, setCorrect] = useState([])
    const [toggle, setToggle] = useState(false)
    const [number, setNumber] = useState(0)
    const [question, setQuestion] = useState([])

  const next = () => {
    let index = number
  setNumber(index + 1)
  setQuestion(questions[index + 1])
  }

    //   useEffect( () => {  
    //     axios.get(`/api/show_grades/${props.match.params.id}`)
    //     .then( res => {
    //         setCorrect(res.data)
    //     })
    // }, [])

    useEffect( () => {  
      axios.get(`/api/quizzes/${props.match.params.id}/questions`)
      .then( res => {
          setQuestions(res.data)
          setQuestion(res.data[1])
          console.log(res.data[1])
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
      
     
      const renderQuestions = () => {
        if (questions.length > number && props.auth.user.role == 'student') {
        return (
          <>
           <Container>
            <Segment>
              <Card>
                {<Question c={question}  next={next} /> }
                </Card>
            </Segment>
          </Container>
          </>
        )
        }
          else {
        
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
            <br />
            <br />
            <br />
  
            </>
          ))
        }
      }
    
    return (
      <>
      { props.auth.user.role == 'teacher' ?
          <Link textAlign="center" to={`/quizzes/${props.match.params.id}/question_form`}>
            <Button>add a question</Button>
          </Link>
        :
        null  
      }
      { props.auth.user.role == 'teacher' ?
        <Link textAlign="center" to={`/quizzes/${props.match.params.id}/show_answer`}>
        <Button>Grade Answers</Button>
      </Link>
      : null }
      
    {renderQuestions()}
      {console.log(questions)}
    
        </>
    )
}

const ConnectedTakeQuiz = (props) => (
  <AuthConsumer>
    {auth =>
      <TakeQuiz {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedTakeQuiz;



























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