import React, { Component } from 'react';
import axios from "axios";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";

class MainForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1, 
      name: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  addQuiz = (name) => {
    axios.post("/api/quizzes/", {name})
       .then( res => {
         const { name } = this.state
         this.setState({name: res.data})
       })
      
      
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const { name } = this.state
  }

  _next() {
    const { name } = this.state
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
   {this.addQuiz(name)}
  }
    
  _prev() {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep,
      name: ''
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
    
  }

  renderForm(){
    switch(this.state.currentStep){
      case 1: 
      return <QuizForm 
      currentStep={this.state.currentStep} 
      handleChange={this.handleChange}
      name={this.state.name}
       
    />

      case 2:
        return <QuestionForm
        currentStep={this.state.currentStep} 
        handleChange={this.handleChange}
        name={this.state.name}
      />   
    }
  }
  render() {    
    return (
      
      <React.Fragment>
      <h1>Create a Quiz</h1>
      <p>Step {this.state.currentStep} of 2 </p> 
      <form onSubmit={this.handleSubmit}>
        {this.renderForm()}
        {this.previousButton}
        {this.nextButton}
      </form>
      </React.Fragment>
    )
  }
}

export default MainForm;
