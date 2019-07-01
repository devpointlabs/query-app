import React, {useState, useEffect, } from 'react';
import { Header, Segment, List, Button, Container, Input, Radio, Card,  } from 'semantic-ui-react';
import axios from 'axios';
import Choice from './Choice';


const ShowQuestions = (props) => {
    
    const [ questions, setQuestions ] = useState([])
    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
          })
      }, [])

      const renderQuestions = () => {
        return questions.map( questions => (
          <>
            <Segment key={questions.id}>
            <p> - {questions.name}</p>
            </Segment>
          <br />
          <br />
          <br />
          </>
        ))
      }

    return (
        <>
    <div>
    {renderQuestions()}
    </div>
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