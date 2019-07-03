import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, Radio, Image, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', name: '', role: '', password: '', passwordConfirmation: '', };
  
 friendOptions = () => [
    {
      key: 'Student',
      text: 'Student',
      value: "Student",
    },
    {
      key: 'Teacher',
      text: 'Teacher',
      value: "Teacher",
    } ]


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, role, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, name, role, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleChangeRadio = (e, {value}) => {
    this.setState({ role: value, });
  }

  render() {
    const { email, name, role, password, passwordConfirmation, } = this.state;


    return (
      <Segment basic>
       <div style={{display: "flex"}}>
    <Image src="https://www.devpointlabs.com/static/media/Beaker-purple.c898b23f.png" style={{width: "100px", height: "100px"}}/>
    <Header as='h1'> DevPoint Labs</Header>
    </div>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />


          <Form.Input
            label="name"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='name'
            onChange={this.handleChange}
          />

        <Form>
            <Form.Field>
              Select Your Role <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label='Student'
                name='role'
                value='student'
                checked={role === 'student'}
                onChange={this.handleChangeRadio}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Teacher'
                name='role'
                value='teacher'
                checked={role === 'teacher'}
                onChange={this.handleChangeRadio}
              />
            </Form.Field>
      </Form>
           <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          /> 
          <Segment textAlign='center' basic>
            <Button primary type='submit' style={{backgroundColor: "#4F1A9E"}}>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
