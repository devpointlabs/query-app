import React, { useState} from 'react'
import { Form, Radio, } from 'semantic-ui-react'
import axios from 'axios'
import QuestionForm from './QuestionForm';

const WrongAnswers = () => {
    const [answerA, setanswerA] = useState([])
    const [answerB, setanswerB] = useState([])
    const [answerC, setanswerC] = useState([])
    const [answerD, setanswerD] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])


    // set the axios call to send all the wrong data to wrong_answer no matter the state. 

    //make button click so that when clicked the input field becomes correctanswer 
    
    const handleAnswerAChange = (e) => {
        setanswerA( e.target.value )
      }

      const handleAnswerBChange = (e) => {
        setanswerB( e.target.value )
      }

      const handleAnswerCChange = (e) => {
        setanswerC( e.target.value )
      }

      const handleAnswerDChange = (e) => {
        setanswerD( e.target.value )
      }

       const handleCorrectAnswer = (e) => {
         setCorrectAnswer( e.target.value )
       }

      // switch (true) (
      //   case 1
      //   break;
      // )
     


    return (
        <>
        <Form.Input 
          placeholder='A'
          label="A"
          value={answerA}
          onChange={handleAnswerAChange}
          />
        
        <Form.Input 
          placeholder='B'
          label="B"
          value={answerB}
          onChange={handleAnswerBChange}
          />

        <Form.Input 
          placeholder='C'
          label="C"
          value={answerC}
          onChange={handleAnswerCChange}
          />

        <Form.Input 
          placeholder='D'
          label="D"
          value={answerD}
          onChange={handleAnswerDChange}
          />

        {/* <Form.Input 
          placeholder='Correct Answer'
          label="Correct Answer"
          value={correctAnswer}
          onChange={handleCorrectAnswer}
        /> */}

        <Radio
              label='true'
              name='true'

              // onChange={handleCorrectAnswer()}
              />
     


        </>

    )

}

export default WrongAnswers;