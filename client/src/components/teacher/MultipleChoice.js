import React, { useState} from 'react'
import { Form, Radio, Button, } from 'semantic-ui-react'
import axios from 'axios'


import QuestionInput from './QuestionInput'
import AnswerA from './AnswerA'
import AnswerB from './AnswerB'
import AnswerC from './AnswerC'
import AnswerD from './AnswerD'
import CorrectAnswerInput from './CorrectAnswerInput'

const MultipleChoice = (props) => {
    const [toggleACorrect, setToggleACorrect] = useState(false)
    const [toggleBCorrect, setToggleBCorrect] = useState(false)
    const [toggleCCorrect, setToggleCCorrect] = useState(false)
    const [toggleDCorrect, setToggleDCorrect] = useState(false)


    const handleSubmit = (e) => {
  
}

        
        // then make it so that the outputs are displayed in the same order for the students to answer
        //also make the submit work across different components simaltainiously {i know is spelled wrong}

        const toggleA = () => {
            setToggleACorrect( !toggleACorrect)
            
        }
        const makeACorrect = () => {
            if (toggleACorrect == true) { 
                return   <CorrectAnswerInput { ...props} />
            } else {
                return <AnswerA { ...props} />
            }
        }

        const toggleB = () => {
            setToggleBCorrect( !toggleBCorrect)
            
        }
        const makeBCorrect = () => {
            if (toggleBCorrect == true) { 
                return   <CorrectAnswerInput { ...props} />
            } else {
                return <AnswerB { ...props} />
            }
        }

        const toggleC = () => {
            setToggleCCorrect( !toggleCCorrect)
            
        }
        const makeCCorrect = () => {
            if (toggleCCorrect == true) { 
                return   <CorrectAnswerInput { ...props} />
            } else {
                return <AnswerC { ...props} />
            }
        }

        const toggleD = () => {
            setToggleDCorrect( !toggleDCorrect)
            
        }
        const makeDCorrect = () => {
            if (toggleDCorrect == true) { 
                return   <CorrectAnswerInput { ...props} />
            } else {
                return <AnswerD { ...props} />
            }
        }



    return (
        <>
          <h1>Question</h1><QuestionInput { ...props } />

        <h4>A</h4><Button onClick={toggleA}>{ toggleACorrect == false ? "false" : "true" }</Button>  
            {makeACorrect()}
          

          <h4>B</h4><Button onClick={toggleB}>{toggleBCorrect == false ? "false" : "true"}</Button>
            {makeBCorrect()}

          <h4>C</h4><Button onClick={toggleC}>{ toggleCCorrect == false ? "false" : "true"}</Button>
            {makeCCorrect()}

          <h4>D</h4><Button onClick={toggleD}>{ toggleDCorrect == false ? "false" : "true" }</Button>
            {makeDCorrect()}

          

           <Form onSubmit={handleSubmit}>
          <hr />
           <Form.Button color="purple">Submit</Form.Button>
         </Form>
    
        </>

    )

}

export default MultipleChoice;