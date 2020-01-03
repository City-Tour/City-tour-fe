import React from 'react'
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
    const onSignUpSubmit = data => console.log(data);

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
          name="First name"
          ref={register({required: true, maxLength: 80})}
          />
          <input 
          type="text" 
          placeholder="Last name" 
          name="Last name"
          ref={register({required: true, maxLength: 80})}
          />
          <input 
          type="password" 
          placeholder="Password" 
          name="Password" 
          ref={register({required: true, maxLength: 80})}/>
          <input 
          type="email" 
          placeholder="Email" 
          name="Email"
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