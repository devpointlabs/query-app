import React, {useState, } from 'react';
import { Header, Container, Table, Card, Grid, Segment, Image, Icon, Button } from 'semantic-ui-react';
import ShowQuizzes from './ShowQuizzes'
import TakeQuiz from './TakeQuiz'
import {Link,} from 'react-router-dom';
import {AuthConsumer} from '../providers/AuthProvider'
import TeacherShowQuizzes from './teacher/TeacherShowQuizzes'
import QuizForm from './teacher/QuizForm'

const Home = (props) => {

  const [togglequiz, setTogglequiz] = useState(false)

  const toggle = () => {
    setTogglequiz( !togglequiz)
    console.log(toggle)
  }
  

  
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
            > Query
            </Header>
      { props.auth.user.role == 'student' ? 
      <div style={{display: 'flex', justifyContent: "space-evenly"}}>
        <div>
          <Icon 
              size="huge" 
              name='pencil alternate' 
              circular 
              style={{color: '#7e6bc4'}}
              />
          <Header style={{textAlign: 'center'}} as='h2'> learn </Header>
          <br />
        </div>
        <div>
          <Icon 
              name="book" 
              size="huge"  
              circular
              style={{color: '#7e6bc4'}}
              />
          <Header style={{textAlign: 'center'}} as='h2'> study </Header>
          <br />
        </div>
        <div>
          <Icon 
              name="line graph" 
              size="huge"  
              circular
              style={{color: '#7e6bc4'}}
              />
          <Header style={{textAlign: 'center'}} as='h2'> grow </Header>
        </div>
      </div>
      : null}
      
      { props.auth.user.role == 'teacher' ?
          <div>
             {togglequiz == true ? <QuizForm {...props} push={props.history.push } /> : null}
              
                <Button onClick={toggle} style={{backgroundColor: "#7e6bc4", color: "white", justifyContent: 'center'}}
                centered size='massive'
                 > 
                {togglequiz == true ? 'Close' : 'Create Quiz'}
                </Button>
                  <Link to={"/quizzes/new"}>
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