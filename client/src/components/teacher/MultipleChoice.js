import React, { useState} from 'react'
import { Form, Radio, Button, Grid, } from 'semantic-ui-react'
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

    const [name, setName] = useState('')
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [answerD, setAnswerD] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`/api/quizzes/${props.match.params.id}/questions`,  { 
            answerA,
             answerB,
              answerC,
               answerD,
                name,
                 correct_answer: correctAnswer,
                 question_type: "multiple choice",
        }    )
        .then( res => {
            
            props.history.push(`/quizzes/${props.match.params.id}/questions/${res.data.id}`)
        })
    }
    
    const updateName = (name) => { 
        setName(name)
    }
    const updateAnswerA = (answerA) => {
        setAnswerA(answerA)
    }

    const updateAnswerB = (answerB) => {
        setAnswerB(answerB)
    }

    const updateAnswerC = (answerC) => {
        setAnswerC(answerC)
    }

    const updateAnswerD = (answerD) => {
        setAnswerD(answerD)
    }

    const updateCorrectAnswer = (correctAnswer) => {
        setCorrectAnswer(correctAnswer)
    }




// then make it so that the outputs are displayed in the same order for the students to answer
//also make the submit work across different components simaltainiously {i know is spelled wrong}

const toggleA = () => {
    setToggleACorrect( !toggleACorrect)
    
}
const makeACorrect = () => {
    if (toggleACorrect == true) { 
        return   <CorrectAnswerInput updateCorrectAnswer={updateCorrectAnswer} { ...props} />
    } else {
        return <AnswerA updateAnswerA={updateAnswerA} { ...props} />
    }
}

const toggleB = () => {
    setToggleBCorrect( !toggleBCorrect)
    
}
const makeBCorrect = () => {
    if (toggleBCorrect == true) { 
        return    <CorrectAnswerInput updateCorrectAnswer={updateCorrectAnswer} { ...props} />
    } else {
        return <AnswerB updateAnswerB={updateAnswerB} { ...props} />
    }
}

const toggleC = () => {
    setToggleCCorrect( !toggleCCorrect)
    
}
const makeCCorrect = () => {
    if (toggleCCorrect == true) { 
        return    <CorrectAnswerInput updateCorrectAnswer={updateCorrectAnswer} { ...props} />
    } else {
        return <AnswerC updateAnswerC={updateAnswerC} { ...props} />
    }
}

const toggleD = () => {
    setToggleDCorrect( !toggleDCorrect)
    
}
const makeDCorrect = () => {
    if (toggleDCorrect == true) { 
        return  <CorrectAnswerInput updateCorrectAnswer={updateCorrectAnswer} { ...props} />
    } else {
        return <AnswerD updateAnswerD={updateAnswerD} { ...props} />
    }
}



return (
    <>
    
    <Grid className="center-grid">
        
        <Grid.Row>
                <h3>Write your question below:</h3>
            </Grid.Row>
            <Grid.Row>
          <QuestionInput  updateName={updateName} { ...props } />
          </Grid.Row>
          <Grid.Row>
        <h4 className="question-type">A)</h4><Button basic color='violet' onClick={toggleA}>{ toggleACorrect == false ? "false" : "true" }</Button>  
            {makeACorrect()}
            </Grid.Row>
            <Grid.Row>
          <h4 className="question-type">B)</h4><Button basic color='violet' onClick={toggleB}>{toggleBCorrect == false ? "false" : "true"}</Button>
            {makeBCorrect()}
            </Grid.Row>
            <Grid.Row>
          <h4 className="question-type">C)</h4><Button basic color='violet' onClick={toggleC}>{ toggleCCorrect == false ? "false" : "true"}</Button>
            {makeCCorrect()}
            </Grid.Row>
            <Grid.Row>
          <h4 className="question-type">D)</h4><Button basic color='violet' onClick={toggleD}>{ toggleDCorrect == false ? "false" : "true" }</Button>
            {makeDCorrect()}
            </Grid.Row>
          

           <Form onSubmit={handleSubmit}>
          <br />
           <Form.Button style={{backgroundColor: "#4F1A9F", color:"white"}}>Submit</Form.Button>
           <br />
         </Form>
    </Grid>
    </>

    )

}

export default MultipleChoice;