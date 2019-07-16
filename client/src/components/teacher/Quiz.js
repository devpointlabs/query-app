import React from "react"
import { Segment, Button, Header, Icon, } from "semantic-ui-react"
import MainForm from "./MainForm";
import axios from "axios";
import { Link, } from "react-router-dom";
import {AuthConsumer} from '../../providers/AuthProvider'

class Quiz extends React.Component {
  state = { editing: false, };
  
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, });
  };




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
          <Link 
            textAlign="center" 
            to={`/quizzes/${this.props.id}/question_form`}>
            <Button 
              style={{backgroundColor: "#494ca2", color:"white"}}>See Results</Button>
          </Link>
          <Link 
            textAlign="center" 
            to={`/quizzes/${this.props.id}/question_form`}>
            <Button 
              style={{backgroundColor: "#494ca2", color:"white"}}>Add a question</Button>
          </Link>
          <Button 
            Button style={{backgroundColor: "#494ca2", color:"white"}}
            as={Link} 
            to={`/quizzes/${this.props.id}/questions/${this.props.id}`} 
            >  
            View
          </Button>
          <Button 
            Button style={{backgroundColor: "#494ca2", color:"white"}} 
            onClick={this.toggleEdit}> 
            <Icon name="edit outline" />
          </Button>
          <Button 
            Button style={{backgroundColor: "#494ca2", color:"white"}}  
            onClick={() => this.props.deleteQuiz(this.props.id)}> 
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

const ConnectedQuiz = (props) => (
  <AuthConsumer>
    {auth =>
      <Quiz {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedQuiz;