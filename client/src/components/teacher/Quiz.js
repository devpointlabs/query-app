import React from "react"
import { Segment, Button, Header, Icon, } from "semantic-ui-react"
import MainForm from "./MainForm";

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
          <Button basic icon color="purple" onClick={this.toggleEdit}> 
            <Icon name="edit outline" />
          </Button>
          <Button basic icon color="purple" floated="right" onClick={() => this.props.deleteQuiz(this.props.id)}> 
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