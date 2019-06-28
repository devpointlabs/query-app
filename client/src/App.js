import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import QuestionForm from './components/QuestionForm';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import TeacherHome from './components/teacher/TeacherHome';
import QuizForm from './components/QuizForm';
import TakeQuiz from './components/TakeQuiz';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/quizzes/:id/question_form" component={QuestionForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/quizzes/:id/take" component={TakeQuiz} />
          <Route exact path="/quizzes/new" component={QuizForm} />
          <Route component={NoMatch} />

        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
