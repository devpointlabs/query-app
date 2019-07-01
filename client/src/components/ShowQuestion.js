import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Divider,  } from "semantic-ui-react"

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
      <Card.Group itemsPerRow={4}>
        { name.map( n =>
          <Card key={n.id}>
            <Card.Content>
              <Divider />
              <Card.Header>
                { n.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      )}
  




    return (
      <>
      {renderQuestion()}
      </>

    )
}
export default ShowQuestion;
