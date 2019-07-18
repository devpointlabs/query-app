import React from 'react';
import Quiz from "./Quiz";
import axios from "axios";

import { Container, Header, Card, Button, } from "semantic-ui-react";


class TeacherShowQuizzes extends React.Component {
  state = { quizzes: [], quiz: []};
  componentDidMount() {
    axios.get("/api/quizzes")
      .then( res => {
        this.setState({ quizzes: res.data, });
      })
      .catch( error => {
        console.log(error);
      })
  }
 
  addQuiz = (name) => {
    axios.post('/api/quizzes', {name})
    .then(res => {
      const { quizzes, } = this.state;
      this.setState({ quizzes: [...quizzes, res.data], });
    })
  }
  editQuiz = (quiz) => {
    axios.put(`/api/quizzes/${quiz.id}`,quiz )
      .then( res => {
        const quizzes = this.state.quizzes.map( m => {
        if (m.id === quiz.id)
          return res.data;
        return m;
        });
        this.setState({ quizzes, });
      })
  }
  deleteQuiz = (id) => {
    axios.delete(`/api/quizzes/${id}`)
      .then( res => {
        const { quizzes, } = this.state;
        this.setState({ quizzes: quizzes.filter(m => m.id !==id), })
      })
  }


  renderQuizzes = (quizzes) => {
    return(
      <>
          <Container style={styles.container}> 
          <Card.Group itemsPerRow={2} >
            { this.state.quizzes.map(quiz => (
              <Card>
                <Card.Content>
                <Card.Header> <div>
              <Header as="h2">{quiz.name}</Header>
            </div></Card.Header>
                 </Card.Content>

                <Card.Content extra>
                  <br />
                  <Quiz 
                    id={quiz.id}
                    key={quiz.id}
                    editQuiz={this.editQuiz}
                    deleteQuiz={this.deleteQuiz} />

                </Card.Content>
              </Card> 
          ))}
  </Card.Group>
        </Container>
        <br />
        <br />
        <br />
      </>
    )
  } 
  render() {
    return (
      <>
       <br />
       <br />
       <br />
       <Card.Group>
          {this.renderQuizzes()}
       </Card.Group>
     </>
    )
  }
}

const styles = {
  segment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default TeacherShowQuizzes;