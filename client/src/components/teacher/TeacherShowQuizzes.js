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


//  createSubmission = (id) => {
//     axios.post(`/api/quizzes/${id}/submissions`, {user_id: props.auth.user.id, quiz_id: id})
//       .then( res => { 
//         props.history.push(`/quizzes/${id}/questions/${res.data.id}`)
//       })
//   }


  // renderQuizzes = () => (
  //   <>
  //       <Container> 
  //           <Card.Group itemsPerRow={3}>
  //    { quizzes.map(quiz => (
  //             <Card key={quiz.id}>
  //               <Card.Content>
  //                 <Card.Header> {quiz.name} </Card.Header>
  //               </Card.Content>
  //               <Card.Content extra>
  //                 <br />
  //                 { showForm && 
  //                   <QuizFormEdit                    
  //                     updateQuiz={updateQuiz}
  //                     key={quiz.id}
  //                     id={quiz.id}                     
  //                   /> 
  //                 }
  //                 <Button style={{backgroundColor: "#494ca2", color:"white"}} 
  //                         onClick={ () => setShowForm(!showForm) }>
  //                   { showForm ? "Close" : "Edit name" }
  //                 </Button>
                  // <Button style={{backgroundColor: "#8186d5", color:"white"}} 
                  //         as={Link} 
                  //       to={`/quizzes/${quiz.id}/questions/`} 
                  //         class="ui violet basic button"
                  //         onClick={() => createSubmission(quiz.id)}>  
                  //   View
                  // </Button>
  //                 <Button style={{backgroundColor: "#c6cbef", color:"white"}}
  //                         class="ui violet basic button" onClick={() => deleteQuiz(quiz.id)}> 
  //                   <Icon name="trash"/> 
  //                 </Button>
  //                   <hr />
                   
  //                 <Link textAlign="center" to={`/quizzes/${quiz.id}/question_form`}>
  //                   <Button style={{backgroundColor: "#494ca2", color:"white"}} >add a question</Button>
  //                 </Link>
  //               </Card.Content>
  //             </Card> 
  //        ))} 
  //           </Card.Group>
  //       </Container>
  //       <br />
  //       <br />
  //       <br />
  //     </>
    
  // )
