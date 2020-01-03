import React from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {withRouter} from 'react-router-dom'
import {
    Button,
    Form,
    Grid,
    Segment,
    h2
  } from "semantic-ui-react";
  import { useForm } from "react-hook-form";
import './SignUp.scss'
  const SignUp = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSignUpSubmit = data => {
      axiosWithAuth()
    .post('/register', data)
    .then(res => {
      console.log(res.data);
        
        // props.history.push('/packages')

    })
    .catch(err => console.log(err))
   }
    

      return (
      <section className="signup">    
      <Segment placeholder>
          <Grid columns={1} relaxed="very" stackable>
      <Grid.Column verticalAlign="middle">
      <h2>
        Sign Up for City Tour Account for Free
      </h2>
      <Form onSubmit={handleSubmit(onSignUpSubmit)}>
        <Form.Field>
          <input 
          type="text" 
          placeholder="First name" 
          name="first_name"
          ref={register({required: true, maxLength: 80})}
          />
          <input 
          type="text" 
          placeholder="Last name" 
          name="last_name"
          ref={register({required: true, maxLength: 80})}
          />
          <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          ref={register({required: true, maxLength: 80})}/>
          <input 
          type="email" 
          placeholder="Email" 
          name="email"
          ref={register({required: true, maxLength: 80})} 
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Grid.Column>
  </Grid>
  </Segment>
  </section>  
  );
  }
   
  export default withRouter(SignUp);
  //some code