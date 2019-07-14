import React from 'react';
import QuizList from "./QuizList";
import MainForm from "./MainForm";
import axios from "axios";
import { Container, Card, Segment, Button, Header, Icon, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class TeacherShowQuizzes extends React.Component {
  state = { quizzes: [], };

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

  renderQuizzes = () => {
    return this.state.quizzes.map( quiz => <QuizList  quizzes={this.state.quizzes}
      editQuiz={this.editQuiz}
      deleteQuiz={this.deleteQuiz} />);
  };
  
  render() {
        return (
<>
          {/* <Container> 
              <Card.Group itemsPerRow={3}> */}
              { this.renderQuizzes() }
                   
        {/* <Button style={{backgroundColor: "#8186d5", color:"white"}} 
                         as={Link} 
                       to={`/quizzes/${quiz.id}/questions/`} 
                         class="ui violet basic button"
                         onClick={() => createSubmission(quiz.id)}>  
                   View
                 </Button> */}
{/* <Link textAlign="center" to={`/quizzes/${quiz.id}/question_form`}>
                   <Button style={{backgroundColor: "#494ca2", color:"white"}} >add a question</Button>
               
             
        </Link>  */}
        ))} 

           {/* </Card.Group>
       </Container> */}
       <br />
       <br />
       <br />
       </>
        )
       }
  //  render() {
//     return (
//       <Container style={{ padding: "30px 0", }}>
//         <Header as="h1" textAlign="center">Quizzes</Header>
//         <hr />
//         <br />
//         {/* <MainForm addQuiz={this.addQuiz} /> */}
//         <br />
//         <br />
//         <QuizList
//           quizzes={this.state.quizzes}
//           editQuiz={this.editQuiz}
//           deleteQuiz={this.deleteQuiz}
//         />
//       </Container>
//     );
//   }
// };


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
//                 <Button style={{backgroundColor: "#8186d5", color:"white"}} 
//                         as={Link} 
//                       to={`/quizzes/${quiz.id}/questions/`} 
//                         class="ui violet basic button"
//                         onClick={() => createSubmission(quiz.id)}>  
//                   View
//                 </Button>
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
// render() {

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <Card.Group>
//         {renderQuizzes()}
//       </Card.Group>
//     </>
  
} 


export default TeacherShowQuizzes;
