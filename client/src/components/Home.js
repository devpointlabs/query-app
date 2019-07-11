import React, {useState, } from 'react';
import { Header, Container, Table, Card, Grid, Segment, Image,   } from 'semantic-ui-react';
import ShowQuizzes from './ShowQuizzes'
import TakeQuiz from './TakeQuiz'

const Home = (props) => {
  

  
  return (
    <>
    <div style={{display: "flex"}}>
    <Image src="https://www.devpointlabs.com/static/media/Beaker-purple.c898b23f.png" style={{width: "100px", height: "100px"}}/>
    <Header as='h1'> DevPoint Labs</Header>
    </div>
      <Grid divided="vertically"> 
      
        <Grid.Row columns={2}>
          <Grid.Column style={{backgroundColor: "#4F1A9E",}}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Header as='h1' style={{color: "white", textAlign: "center", }}> Test Your Knowledge</Header>
          <br />
          <br />
          <Header as="h3" style={{color: "white", textAlign: "center",}}> Your quizzes help DevPoint Labs understand how we are teaching.</Header>
          <Header as="h4" style={{color: "white", textAlign: "center",}}> Every effort you put into these quizzes will help us guide you and the cohort better.</Header>
          <br />
          
         </Grid.Column>
        <Grid.Column>
      <div>
      <ShowQuizzes push={props.history.push} />
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