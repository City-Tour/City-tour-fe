import React from "react";
import {withRouter} from 'react-router-dom'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header
} from "semantic-ui-react";
import { useForm } from "react-hook-form";

const Login = props => {
  const { handleSubmit, register, errors } = useForm();
  // const onLoginSubmit = data => console.log(data);
  const onLoginSubmit = data => {
    
    axiosWithAuth()
    .post('/login', data)
    .then(res => {
      console.log(res.data);
        localStorage.setItem('token', res.data.token);
        // props.history.push('/packages')

    })
    .catch(err => console.log(err))
   }
  



  
  return (
    <Segment placeholder>
      <Grid columns={1} relaxed="very" stackable>
        <Grid.Column>
          <Header textAlign="center" size="large">
            Login to your account
          </Header>
          <Form onSubmit={handleSubmit(onLoginSubmit)}>
            <Form.Field>
          <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              ref={register({required: true, maxLength: 80})}
              />
          <input 
              type="password" 
              placeholder="Password" 
              name="password"
              ref={register({required: true, maxLength: 80})} />
              </Form.Field>
            <Button type="submit" content="Login" primary />
          </Form>
          <Header textAlign="center" size="small">If you don't have an account, make an account for free</Header>
          <Button onClick={()=>props.history.push('/signup')}>Sign Up!</Button>
        </Grid.Column>
    </Grid>
    </Segment>
  );
};

export default withRouter(Login);
