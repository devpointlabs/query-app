import React from 'react'
import { Form, Button} from "semantic-ui-react"

class QuizForm extends React.Component{
 
 render() {
  if (this.props.currentStep !== 1) { 
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="quizName">Quiz Name</label>
      <input
        className="form-control"
        id="quizName"
        name="quizName"
        type="text"
        placeholder="Enter Quiz Name"
        value={this.props.quizName}
        onChange={this.props.handleChange} 
      />
    </div>
  )
}
}


  // return(
  //   <Form>
  //     <h1 className="ui centered"> Quiz Name </h1>
  //     <Form.Field>
  //       <input
  //       placeholder="Quiz Name"
  //       onChange={this.props.handleChange('quizName')}
  //       defaultValue={values.name}
  //       />
  //     </Form.Field>
  //     <Button onClick={this.saveAndContinue}> Save and Continue</Button>
  //   </Form>

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
