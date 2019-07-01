import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container } from 'semantic-ui-react';
import axios from 'axios';


const ShowQuestions = (props) => {
    
    const [ questions, setQuestions ] = useState([])
    const [ quizzes, setQuizzes ] = useState([])


    useEffect( () => {
        axios.get("/api/quizzes")
          .then( res => {
            setQuizzes(res.data);
          })
      }, [])  


    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
          })
      }, [])

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