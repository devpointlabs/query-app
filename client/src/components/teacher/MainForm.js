import React, { useState, useEffect,  } from 'react';
import axios from "axios";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";


const MainForm = (props) => {
    const [quiz, setQuiz] = useState([])


    
      axios.post(`api/quizzes/${props.match.params.id}`)
    


    return (
      <>
      
      
      </>
    )
}

export default MainForm;