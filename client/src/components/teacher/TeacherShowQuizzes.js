import React, {useState, useEffect} from 'react';
import Quiz from "./Quiz";
import axios from "axios";
import { Container, Header, Card, } from "semantic-ui-react";
import {AuthConsumer} from '../../providers/AuthProvider'

const TeacherShowQuizzes = (props) => {
  const [ quizzes, setQuizzes ] = useState([])

  useEffect( () => {
      axios.get("/api/quizzes")
        .then( res => {
          
          setQuizzes(res.data);
        })
    }, [])

    useEffect( () => {
      axios.get("/api/quizzes/:quiz_id/questions")
        .then( res => {
          
          setQuizzes(res.data);
        })
    }, [])


  
 
  const addQuiz = (name) => {
    axios.post('/api/quizzes', {name})
    .then(res => {
      const { quizzes, } = this.state;
      this.setState({ quizzes: [...quizzes, res.data], });
    })
  }

  const editQuiz = (quiz) => {
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

  const deleteQuiz = (id) => {
    axios.delete(`/api/quizzes/${id}`)
    .then ( res => {
      setQuizzes(quizzes.filter( q => q.id !== id))
    })
  }

  

  

  const renderQuizzes = () => {
    return(
      <>
        <Container> 
          <Card.Group itemsPerRow={2}>
          { quizzes.map( quiz => (
              <Card>
                <Card.Content>
                 <Card.Header> 
                   <div>
                    <Header as="h2">{quiz.name}</Header>
                   </div>
                 </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <br />
                  <Quiz 
                    key={quiz.id}
                    quiz_id={quiz.id}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
      
                     />
    
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

    return (
      <>
       <br />
       <br />
       <br />
       <Card.Group>
          {renderQuizzes()}
       </Card.Group>
     </>
    )
}

const ConnectedTeacherShowQuizzes = (props) => (
  <AuthConsumer>
    {auth =>
      <TeacherShowQuizzes {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedTeacherShowQuizzes;


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
