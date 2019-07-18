import React from "react"
import {Card, Button, Form,} from "semantic-ui-react"
import axios from "axios"

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
   
<Card.Content>
<Card.Header>Question: {c.name} </Card.Header>
</Card.Content>

{/* <Button 
style={{backgroundColor: "#7e6bc4", color: "white",}} 
onClick={this.props.toggleClick}
// onClick={showQuestion}
>
{this.props.toggle == true ? "Close" : "Answer"}


</Button> */}

<Form>
            <Form.Input 
                placeholder="answer"
                value={this.answer}
                onChange={this.handleChange.bind(this)}
            />
            <Button onClick={this.handleSubmit.bind(this)} style={{backgroundColor: "#2d248a", color: "white",}}>Submit</Button>
         
        </Form>

<Button onClick={this.props.next} >Next</Button>
 </>
  )
}
}

export default Question