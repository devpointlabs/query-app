import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import QuestionForm from './components/teacher/QuestionForm';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import TeacherHome from './components/teacher/TeacherHome';
import Choice from './components/Choice';
import QuizForm from './components/teacher/QuizForm';
import ShowTeacherChoices from './components/ShowTeacherChoices'
import TakeQuiz from './components/TakeQuiz';
import ShowAnswer from './components/teacher/ShowAnswer'
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
          <ProtectedRoute exact path="/quizzes/:id/show_answer" component={ShowAnswer} />
          <ProtectedRoute exact path="/questions/:id/show_teacher_answer" component={ShowTeacherChoices} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/quizzes/:id/questions" component={TakeQuiz} />
          <Route exact path="/quizzes/:id/choice" component={Choice} />
          <Route exact path="/quizzes/new" component={QuizForm} />
          <Route exact path="/teacherhome" component={TeacherHome} />
          <Route component={NoMatch} />

        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
