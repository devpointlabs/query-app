import React, { useState, useEffect, } from "react";
import axios from "axios";
import QuizForm from "./QuizForm";
import { List, Header, Segment, Button, } from "semantic-ui-react";

const Student = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect( () => {
    axios.get("/api/quizzes")
      .then( res => setQuizzes(res.data) )
  }, []);

  const renderQuizzes = () => {
    return quizzes.map( quiz =>
      <Segment key={quiz.id}>
        <List.Header as="h3">{ quiz.name }</List.Header>
      </Segment>
    );
  };

  return (
    <>
      <Header as="h1">My Quizzes</Header>
      <br />
      { showForm && 
        <QuizForm 
          toggleForm={setShowForm} 
          add={ quiz => setQuizzes([...quizzes, quiz]) } 
        /> 
      }
      <Button onClick={ () => setShowForm(!showForm) }>
        { showForm ? "Close Form" : "Show Form" }
      </Button>
      <List>
        { renderQuizzes() }
      </List>
    </>
  );
};

export default Student;