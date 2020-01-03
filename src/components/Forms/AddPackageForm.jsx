import React, {useContext} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Segment} from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import {AuthContext} from '../Contexts/AuthContext'

const AddPackage = () => {
    const {user} = useContext(AuthContext)
    console.log("User id inside Add Package: ",user)
    const { handleSubmit, register, errors } = useForm()
    const onSubmit = data => {

            data.creator_id = user
            console.log('attached user id',data)
      }
    return (<section className="add-package">
    <Segment placeholder>
      <Grid columns={1} relaxed="very" stackable>
        <Grid.Column verticalAlign="middle">
          <h2>Create a new Tour Package</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <input
                type="text"
                placeholder="Package Name"
                name="name"
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Type of Package"
                name="type"
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Description for your Package"
                name="description"
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                type="number"
                placeholder="Price for the Package"
                name="price"
                ref={register({ required: true, maxLength: 80 })}
                />
      <select name="Choose City" ref={register({ required: true })}>
        <option value="Nashville">Nashville</option>
        <option value=" San Francisco"> San Francisco</option>
        <option value=" Austin"> Austin</option>
      </select>
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  </section>);
}
 
export default AddPackage;