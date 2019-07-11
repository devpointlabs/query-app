import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import AdminRoute from './components/AdminRoute';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import TeacherHome from './components/teacher/TeacherHome';
import MainForm from './components/teacher/MainForm';
import QuizForm from './components/teacher/QuizForm';
import QuizFormEdit from './components/teacher/QuizFormEdit';
import QuestionForm from './components/teacher/QuestionForm';
import EditQuestion from './components/teacher/EditQuestion';
import ShowTeacherChoices from './components/teacher/ShowTeacherChoices'
import SubmissionChoices from './components/teacher/SubmissionChoices';
import ShowAnswer from './components/teacher/ShowAnswer'
import TakeQuiz from './components/TakeQuiz';
import Choice from './components/Choice';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/quizzes/:id/questions" component={TakeQuiz} />
          <AdminRoute exact path="/quizzes/:id/question_form" component={QuestionForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/questions/:id/choices/:id" component={ShowAnswer} />
          <ProtectedRoute exact path="/questions/:id/show_teacher_answer" component={ShowTeacherChoices} />
          <ProtectedRoute exact path="/api/quizzes/:id/questions/edit" component={EditQuestion} />
          <ProtectedRoute exact path="/choice/:choice_id/submission_choices" component={SubmissionChoices} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/quizzes/:id/choice" component={Choice} />
          <Route exact path="/quizzes" component={MainForm} />
          <Route exact path="/quizzes/new" component={QuizForm} />
          <Route exact path="/teacherhome" component={TeacherHome} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;

