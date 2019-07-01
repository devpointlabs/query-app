import React, {useState, } from 'react';
import { Header, Container, Table, Card, Grid, Segment, Image,   } from 'semantic-ui-react';
import ShowQuizzes from './ShowQuizzes'
import TakeQuiz from './TakeQuiz'

const Home = () => {
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
          <Header as='h1' style={{color: "white", textAlign: "center", }}> Test Your Knowledge</Header>
          <br />
          <br />
          <br />
          
         </Grid.Column>
        <Grid.Column>
      <div>
      <ShowQuizzes />
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