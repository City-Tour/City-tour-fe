import React from "react";
import { Grid, Image, Header, Segment, Divider, Button } from "semantic-ui-react";
import "./landing.scss";
const Landing = props => (
  <>
    <section className="cities">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/newyork.jpg")} className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>Purchase</Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  </>
);

export default Landing;