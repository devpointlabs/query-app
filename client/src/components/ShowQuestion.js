import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { card, } from "semantic-ui-react"

const ShowQuestion = (props) => {
    const [name, setName] = useState({})

    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`, { name })
        .then( res => {
            setName(res.data)
        })
    }, [])

    const renderQuestion = () => {
      props.name.map( name =>
      <Card key={name.id}>
      <Card.Header>{name.name}</Card.Header>
      </Card>)

    }




    return (
      <>
      {renderQuestion()}


      </>

    )

}

export default ShowQuestion;
