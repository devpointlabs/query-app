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
      <Segment key={name.id}>
      <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header> Questions #{name.id} </Card.Header>
          <Card.description> {name.name} </Card.description>
        </Card.Content>
        </Card>
      </Card.Group>
      </Segment>

    }




    return (
      <>
      {renderQuestion()}


      </>

    )

}

export default ShowQuestion;
