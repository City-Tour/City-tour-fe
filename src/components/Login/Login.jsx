import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Header
} from "semantic-ui-react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Segment placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Header textAlign="center" size="large">
            Login to your account
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
          <input 
              type="email" 
              placeholder="Email" 
              name="Email" 
              />
          <input 
              type="text" 
              placeholder="Password" 
              name="Password" />
              </Form.Field>
            <Button type="submit" content="Login" primary />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Header textAlign="center" size="large">
            Sign Up for City Tour Account for Free
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <input 
              type="text" 
              placeholder="First name" 
              name="First name"
              
              />
              <input 
              type="text" 
              placeholder="Last name" 
              name="Last name" 
              />
              <input 
              type="text" 
              placeholder="Password" 
              name="Password" />
              <input 
              type="email" 
              placeholder="Email" 
              name="Email" 
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
};

export default Login;
