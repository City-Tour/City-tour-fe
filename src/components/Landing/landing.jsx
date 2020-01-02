import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './landing.scss'
const Landing = () => (
  <>
  INSERT LOGO HERE
  <h1>City Tour</h1>
  <h3>Explore Cities Like Locals</h3>

  <section className="cities">
    CITIES DIV
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='../assets/newyork.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/nashville.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/losangeles.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='../assets/boston.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/nashville.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/boston.jpg' />
        Quis officia consequat pariatur nulla reprehenderit eu nulla veniam cillum.
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </section>

  </>
)

export default Landing
