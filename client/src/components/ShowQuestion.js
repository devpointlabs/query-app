import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card,  } from "semantic-ui-react"

const ShowQuestion = (props) => {
    const [name, setName] = useState({})

    useEffect( (id) => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions${id}`, { name })
        .then( res => {
            setName(res.data)
        })
    }, [])

    const renderQuestion = () => {
      props.name.map( question =>
      <Card key={question.id}>
      <Card.Header>#{question.id} {question.name}</Card.Header>
      </Card>)

    }




    return (
      <>test</>

    )

}

export default ShowQuestion;
