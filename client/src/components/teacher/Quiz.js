import React from "react"
import { Segment, Button, Header, Icon, } from "semantic-ui-react"
import MainForm from "./MainForm";
import axios from "axios";
import { Link, } from "react-router-dom";

class Quiz extends React.Component {
  state = { editing: false, };
  
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };

  createSubmission = (id, props) => {
    axios.post(`/api/quizzes/${id}/submissions`, {user_id: this.auth.user.id, quiz_id: id})
      .then( res => { 
        this.history.push(`/quizzes/${id}/questions/${res.data.id}`)
      })
  }



  render() {
    return (
      <Segment style={styles.segment}>
        {
          this.state.editing ?
            <MainForm
              {...this.props}
              editQuiz={this.props.editQuiz}
              toggleEdit={this.toggleEdit}
            />
          :
            <div>
              <Header as="h2">{this.props.name}</Header>
            </div>
        }
        <div>
          <Link textAlign="center" to={`/quizzes/${this.props.id}/question_form`}>
            <Button style={{backgroundColor: "#494ca2", color:"white"}} >add a question</Button>
          </Link>
          <Button style={{backgroundColor: "#8186d5", color:"white"}} 
          as={Link} 
          to={`/quizzes/${this.props.id}/questions/${this.props.id}`} 
          class="ui violet basic button"
          onClick={() => this.props.createSubmission(this.props.id)}>  
            View
          </Button>
          <Button Button style={{backgroundColor: "#494ca2", color:"white"}} onClick={this.toggleEdit}> 
            <Icon name="edit outline" />
          </Button>
          <Button Button style={{backgroundColor: "#494ca2", color:"white"}}  onClick={() => this.props.deleteQuiz(this.props.id)}> 
            <Icon name="trash alternate outline" />
          </Button>
        </div>
      </Segment>
    )
  }
};

const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default Quiz;