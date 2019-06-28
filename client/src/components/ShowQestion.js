import React, { useState, useEffect, } from 'react'
import axios from 'axios'

const ShowQuestion = () => {
    const [name, setName] = useState([])

    useEffect( () => {
        axios.get(`/api/quizzes/${props.match.params.id}/questions`, { name })
        .then( res => {
            setName(res.data)
        })
    }, [])





}

export default ShowQuestion;
