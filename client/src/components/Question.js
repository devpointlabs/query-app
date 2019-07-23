import React from "react"
import { Grid, } from "semantic-ui-react"
import axios from "axios"
import StudentChoiceForm from "./StudentChoiceForm"


class Question extends React.Component {
state = {answer: ""}

handleSubmit = (e, answer) => {
 
      e.preventDefault()
       axios.post(`/api/questions/${this.props.question_id}/submission/${this.props.submission_id}/choices`, {answer})
       alert("Answer Submitted")
       this.setState({ answer: "", });
       console.log(answer)
  }
 
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({answer: e.target.value})
     
  }

render() {
  const {c} = this.props
  return(
    <>
   

<Grid.Row><b>Question: &nbsp;</b>{c.name}</Grid.Row>

 <Grid.Row>
 < StudentChoiceForm 
  question_id = {this.props.c.id}
  submission_id = {this.props.submission_id}
  push = {this.props.push}
  next = {this.props.next}
 />
 </Grid.Row>
 
 </>
  )
}
}

export default Question