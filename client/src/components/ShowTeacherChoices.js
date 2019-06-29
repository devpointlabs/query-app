
//TODO: eventually break up the show answer component into answer and 
// question prop but i cant get around to conflicting axios calls


import React, {useEffect, useState, } from "react"
import {Card, Form, } from "semantic-ui-react"
import axios from "axios"
import ShowAnswer from "./ShowAnswer";

const ShowTeacherChoices = (props) => {
    const [answers, setAnswers] = useState([])

    useEffect( () => {
        axios.get(`/api/questions/${props.match.params.id}/choices`, { answers })
        .then( res => {
            setAnswers(res.data)
        })
        .catch( err => {
          
        })
    }, [])

    const renderAnswer = () => {
        return answers.map( answer => ( <Card key={answer.id}>
          <Card.Header>{answer.answer}</Card.Header>
        </Card>) )
      }


      return ( 
        <>test
        
          {renderAnswer()}
        </>
        )
}

export default ShowTeacherChoices;