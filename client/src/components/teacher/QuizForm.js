import React from 'react'
import { Form, Button} from "semantic-ui-react"
import axios from "axios"

class QuizForm extends React.Component{
  state = { name: ''}
  
 render() {
  if (this.props.currentStep !== 1) { 
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="quizName">Quiz Name</label>
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Enter Quiz Name"
        value={this.props.name}
        onChange={this.props.handleChange} 
      />
    </div>
  )
}
}




  // <Form onSubmit={handleSubmit}>
  //   <Form.Input
  //   placeholder="Quiz Name"
  //   label="quiz"
  //   value={name}
  //   onChange={handleChange}
  //   />
  // <Form.Button color="purple" onClick={saveAndContinue}>Submit</Form.Button>
  // </Form>
  // </>
//     )
//   }
// }

export default QuizForm;
