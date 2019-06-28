import React, {useState, useEffect, } from 'react';
import {Card, Header, Segment, List, Button, Container, Input, Card } from 'semantic-ui-react';
import axios from 'axios';


const ShowQuestions = (props) => {
    
    const [ questions, setQuestions ] = useState([])
    const [ choice, setChoice ] = useState([])

    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`)
          .then( res => {
            setQuestions(res.data);
          })
      }, [])

    useEffect( () => {
      axios.post(`/api/questions/${props.match.params.id}/choices`)
        .then( res => {
          setChoice(res.data);
        })
    }, [] )

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`/api/questions/${props.match.params.id}/choices`)
        .then( res => {
          choice(res.data);
        })
    }

    const handleChange = (e) => {
      setChoice(e.target.value);
    }
  

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

      const renderAnswerBox = () => {

        return (
          <Input> {handleChange} </Input>
          <Button onClick={handleSubmit}> Submit Answer</Button>
        )
      }
    
    
    return (
        <>
    <div>
    {renderQuestions()}
    </div>
    <br />
    <div>
      {renderAnswerBox()}
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