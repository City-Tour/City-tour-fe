import React, { useContext } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Contexts/AuthContext'

const AddPackage = () => {
  const { user } = useContext(AuthContext)
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = data => {
    data.price = parseInt(data.price)
    data.creator_id = user
    if(data.city_id === "Nashville"){
        data.city_id = 1
    }
    else if(data.city_id === "San Francisco"){
        data.city_id = 2
    }
    else{
        data.city_id = 3
    }
    console.log(data)
    axiosWithAuth().post('/packages',data)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
  }
  return (
    <section className="add-package">
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
                <select name="type" ref={register({ required: true })}>
                  <option value="One Day Package">One Day Package</option>
                  <option value=" Two Day Package"> Two Day Package</option>
                  <option value=" Weekend"> Weekend</option>
                </select>
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
                <select name="city_id" ref={register({ required: true })}>
                  <option value="Nashville">Nashville</option>
                  <option value=" San Francisco"> San Francisco</option>
                  <option value=" Austin"> Austin</option>
                </select>
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </section>
  )
}

export default AddPackage
