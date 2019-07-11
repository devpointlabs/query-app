import React, { useState, } from 'react';
import { Header, Container, Grid, Image, Button, } from 'semantic-ui-react';
import TeacherShowQuizzes from './TeacherShowQuizzes'
import {Link} from 'react-router-dom';
import QuizForm from './QuizForm'

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
        <Grid divided="vertically"> 
        <br />
          <Grid.Row columns={2}>
            <Grid.Column style={{backgroundColor: "#4F1A9E",}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Header as='h1' style={{color: "white", textAlign: "center", }}>Test Your Students</Header>
            <br />
            <br />
            <br />  
            </Grid.Column>
            <Grid.Column>
            <div>
              
              {togglequiz == true ? <QuizForm {...props} push={props.history.push } /> : null}
              
                <Button onClick={toggle} style={{backgroundColor: "#4F1A9E", color: "white",}} >                 
                Create a Quiz
                </Button>
             
            </div>
            <div>
              {TeacherShowQuizzes()}
            </div>  
            </Grid.Column>
          </Grid.Row>
        <Container>
        </Container>
      </Grid>
    </>
  )
}
  
export default Home;