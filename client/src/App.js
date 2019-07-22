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
import TeacherShowQuizzes from './components/teacher/TeacherShowQuizzes'
import Choice from './components/Choice';
import Quiz from './components/teacher/Quiz';
import ShowQuestion from './components/ShowQuestion';


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/quizzes/:id/submissions/:submission_id" component={TakeQuiz} />
          <AdminRoute exact path="/quizzes/:id/question_form" component={QuestionForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quizzes/:quiz_id/show_answer" component={ShowAnswer} />
          <Route exact path="/questions/:id/show_teacher_answer" component={ShowTeacherChoices} />
          <Route exact path="/api/quizzes" component={TeacherShowQuizzes} />
          <Route exact path="/api/quizzes/:id/questions/edit" component={EditQuestion} />
          <Route exact path="/choice/:choice_id/submission_choices" component={SubmissionChoices} />
          <Route exact path="/api/quizzes/:id/questions" component={ShowQuestion} />
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
