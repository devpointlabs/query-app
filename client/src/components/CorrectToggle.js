import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card } from "semantic-ui-react"

const CorrectToggle = (props) => {

    return ( 
        
        <Card key={props.id} >
            <Card.Header>{props.correct}</Card.Header>
          </Card>
    )

}

export default CorrectToggle;