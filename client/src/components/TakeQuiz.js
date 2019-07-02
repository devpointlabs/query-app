import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container } from 'semantic-ui-react';
import StudentChoiceForm from './StudentChoiceForm'
import EditQuestion from './teacher/EditQuestion'
import { Link, } from 'react-router-dom'
import axios from 'axios';


const ShowQuestions = (props) => {
    
    const [ questions, setQuestions ] = useState([])
    const [toggle, setToggle] = useState(false)



    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
            console.log(res.data)
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

      
     
      const renderQuestions = () => {
        return questions.map( questions => (
          <>
          <Container>
            <Segment key={questions.id}>
                <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header> {questions.name} </Card.Header>
                    {/* <Card.Description> {questions.description} </Card.Description> */}
                </Card.Content>
                <Button style={{backgroundColor: "#4F1A9E", color: "white",}} onClick={toggleClick}>answer</Button>
                <Button  color="red" icon="trash" onClick={() => handleDelete(questions.id)}></Button>
                <Link to={{
                  pathname: `/api/quizzes/${props.match.params.id}/questions/edit`,
                  state: { question_id: questions.id }
                  }}>
                <Button  color="gray" icon="pencil" ></Button>
                </Link>
            { toggle  ? <StudentChoiceForm /> : null  }
                
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
        {console.log(questions)}
        <Link textAlign="center" to={`/quizzes/${props.match.params.id}/question_form`}>
          <Button>add a question</Button>
        </Link>

    {renderQuestions()}
       
        </>
    )
}

export default ShowQuestions;



























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