import React from "react";
import { Grid, Image, Header, Segment, Divider, Button } from "semantic-ui-react";
import nashville from '../assets/nashville.jpg'
import sansFrancisco from '../assets/losangeles.jpg'
import austin from '../assets/boston.jpg'
import "./landing.scss";

const cities = [
  '',
  nashville,
  sansFrancisco,
  austin
  
]
const Landing = props => (
  <>
    <section className="cities">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
          <Segment className='city'>
          <Image src={cities[1]} alt='city pics' className='city-image'/>
            <Header size="huge">
              New York City
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/boston.jpg")} className='city-image'/>
            <Header size="huge">
              Boston
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/losangeles.jpg")} className='city-image'/>
            <Header size="huge">
              Austin
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/nashville.jpg")} className='city-image'/>
            <Header size="huge">
              Nashville
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/boston.jpg")} className='city-image'/>
            <Header size="huge">
              Boston
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column>
          <Segment className='city'>
          <Image src={require("../assets/losangeles.jpg")} className='city-image'/>
            <Header size="huge">
             Austin
            </Header>
              Explore NYC like a true New Yorker. This tour includes food and places to visit.              <Divider section />
              <Header as="h3">Created by: City Tour Team</Header>
              <Button size ="massive" color='blue'>View Packages</Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  </>
);

export default Landing;
