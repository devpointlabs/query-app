import React, {useState, } from 'react';
import { Header, Container, Table, Card, Grid, Segment, Image, Icon, Button } from 'semantic-ui-react';
import ShowQuizzes from './ShowQuizzes'
import TakeQuiz from './TakeQuiz'
import {Link,} from 'react-router-dom';
import {AuthConsumer} from '../providers/AuthProvider'
import TeacherShowQuizzes from './teacher/TeacherShowQuizzes'

const Home = (props) => {

  return (
    <>
    <div style={{display: "flex"}}>
    <Image src="https://www.devpointlabs.com/static/media/Beaker-purple.c898b23f.png" style={{width: "100px", height: "100px"}}/>
    <Header as='h1'> DevPoint Labs</Header>
    </div>
      
          <br />
          <Container>
          <Header 
          as='h1'
          centered
          textAlign="center"
          inverted
          style={{
          backgroundImage: `url(${"https://www.devpointlabs.com/static/media/launch-present.b2917818.png"})`,
          backgroundSize: 'cover',
          fontSize: '4em',
          fontWeight: 'normal',
          height: '250px'
      }}
            > Test Your Knowledge
            </Header>
      { props.auth.user.role == 'student' ? 
      <div style={{display: 'flex', justifyContent: "space-evenly"}}>
        <div>
          <Icon size="huge" name='pencil alternate' circular />
          <Header style={{textAlign: 'center'}} as='h2'> learn </Header>
          <br />
        </div>
        <div>
          <Icon name="book" size="huge"  circular/>
          <Header style={{textAlign: 'center'}} as='h2'> study </Header>
          <br />
        </div>
        <div>
          <Icon name="line graph" size="huge"  circular/>
          <Header style={{textAlign: 'center'}} as='h2'> grow </Header>
        </div>
      </div>
      : null}
      
      { props.auth.user.role == 'teacher' ?
          <div>
              <Link to={"/quizzes/new"}>
                <Button style={{backgroundColor: "#4F1A9E", color: "white", justifyContent: 'center'}}
                centered size='massive'
                 >                 
                Create a Quiz
                </Button>
              </Link>
         </div>
      : null }
   


      {props.auth.user.role === 'student' ?
      <ShowQuizzes push={props.history.push} />
      : null}

      {props.auth.user.role=== 'teacher' ? 
      <div>
          {TeacherShowQuizzes()}
      </div> 
      :null} 
            </Container>
    </>
  )

}
  
const ConnectedHome = (props) => (
  <AuthConsumer>
    {auth =>
      <Home {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedHome;