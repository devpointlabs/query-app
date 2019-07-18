import React from 'react';
import QuizList from "./QuizList";
import MainForm from "./MainForm";
import Quiz from "./Quiz";
import axios from "axios";
import { Container, Header, Card } from "semantic-ui-react";


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
      <Container> 
          <Card.Group itemsPerRow={1}>
   { this.state.quizzes.map(quiz => (
            <Card >

              <Card.Content extra>
                <br />
                <Quiz 
        id={quiz.id}
       key={quiz.id} {...quiz}
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

    // <>
    //   <Container> 
    //     <Card.Group itemsPerRow={4}>
    //  {this.state.quizzes.map( quiz => 
    //  <Quiz 

    //   key={quiz.id} {...quiz}
    //   editQuiz={this.editQuiz}
    //   deleteQuiz={this.deleteQuiz} />)
    //  }
    //         </Card.Group>
    //      </Container>
    //      <br />
    //      <br />
    //      <br />
    //    </>
    // )

    // }

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

export default TeacherShowQuizzes;

