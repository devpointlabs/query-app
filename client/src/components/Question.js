import React from "react"
import {Card, Button} from "semantic-ui-react"

class Question extends React.Component {


render() {
  const {c} = this.props
  return(
    <>
   
<Card.Content>
<Card.Header> Question: {c.name} </Card.Header>
</Card.Content>
<Button 
style={{backgroundColor: "#7e6bc4", color: "white",}} 
onClick={this.props.toggleClick}
// onClick={showQuestion}
>
{this.props.toggle == true ? "Close" : "Answer"}


</Button>
<Button onClick={this.props.next}>Next</Button>
 </>
  )
}
}

export default Question