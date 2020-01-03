import React, {useContext} from 'react'
import { withRouter } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Button, Form, Grid, Segment, h3 } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import {AuthContext} from '../Contexts/AuthContext'
import './Login.scss'
const Login = props => {
  const {user_id} = useContext(AuthContext)
  const { handleSubmit, register, errors } = useForm()
  // const onLoginSubmit = data => console.log(data);
  const onLoginSubmit = data => {
    axiosWithAuth()
      .post('/login', data)
      .then(res => {
        console.log(res.data)
        user_id(res.data.user_id)
        localStorage.setItem('token', res.data.token)
        props.history.push('/packages/add')
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="login">
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <h3>Login to your account</h3>
            <Form onSubmit={handleSubmit(onLoginSubmit)}>
              <Form.Field>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={register({ required: true, maxLength: 80 })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true, maxLength: 80 })}
                />
              </Form.Field>
              <Button type="submit" content="Login" primary />
            </Form>
            <h3>If you don't have an account, make an account for free</h3>
            <Button onClick={() => props.history.push('/signup')}>
              Sign Up!
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </section>
  )
}

export default withRouter(Login)
