import React from "react";
import { Header, Form, Button, Grid, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

class MainForm extends React.Component {
  state = { name: "", };

  componentDidMount() {
    if (this.props.id) {
      this.setState({ name: this.props.name })
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.editQuiz({ id: this.props.id, ...this.state, });
      this.props.toggleEdit();
    } else {
      this.props.addQuiz(this.state.name);
    }
    this.setState({ name: "", });
  }

  render() {
    return (
      <>
      
        <div className="center-screen">
      <Button basic color='violet'
          as={Link} 
          to={"/"} > Back</Button>
          
      <br />
       <br />
       <br />
       <Grid className="center-grid">
      <Form onSubmit={this.handleSubmit}>
      <br />
        <Header as="h3">
          { this.props.id ? "Edit Quiz" : "Create a New Quiz"}
        </Header>
        <Form.Group>
          <Form.Input
            placeholder="Quiz Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Button style={{backgroundColor: "#494ca2", color:"white"}}>Submit</Form.Button>
        </Form.Group>
        <br />

      </Form>
      </Grid>
      </div>
      </>
    )
  }
}

export default MainForm;