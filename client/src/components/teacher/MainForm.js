import React from "react";
import { Header, Form,} from "semantic-ui-react";

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
      <Form onSubmit={this.handleSubmit}>
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
          <Form.Button inverted color="purple">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default MainForm;