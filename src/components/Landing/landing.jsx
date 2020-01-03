import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Image, h2, Segment, Divider, Button } from "semantic-ui-react";
import nashville from "../assets/nashville.jpg";
import sanFrancisco from "../assets/SF.png";
import austin from "../assets/austin.jpg";
import "./landing.scss";

const cities = ["", nashville, sanFrancisco, austin];

//Dynamic Render will require useEffect to fetch latest list of cities on render
//Save list to useState and render, it will re-trigger render on component loads

//Each City button for view packages will use history props to swtich CityPage component by passing city_id as params

const Landing = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://citytour2020.herokuapp.com/cities");
      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <section className="cities">
        {data.map(c => (
          <div key={c.city_id} className="city-container">
            <div className="city">
              <Image
                src={cities[c.city_id]}
                alt="city pics"
                className="city-image"
              />
              <h2>{c.city_name}</h2>
              {c.description}
              <h4>Created by: City Tour Team</h4>
              <Button size="massive" color="blue">
                <Link className="button-text" to={`/${c.city_id}`}>
                  View {c.city_name} Packages
                </Link>
              </Button>
            </div>
          </div>
        ))}

        {/* <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Segment className="city">
                <Image src={cities[1]} alt="city pics" className="city-image" />
                <h2>New York City</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="city">
                <Image
                  src={require("../assets/boston.jpg")}
                  className="city-image"
                />
                <h2>Boston</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="city">
                <Image
                  src={require("../assets/losangeles.jpg")}
                  className="city-image"
                />
                <h2>Austin</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Segment className="city">
                <Image
                  src={require("../assets/nashville.jpg")}
                  className="city-image"
                />
                <h2>Nashville</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="city">
                <Image
                  src={require("../assets/boston.jpg")}
                  className="city-image"
                />
                <h2>Boston</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="city">
                <Image
                  src={require("../assets/losangeles.jpg")}
                  className="city-image"
                />
                <h2>Austin</h2>
                Explore NYC like a true New Yorker. This tour includes food and
                places to visit. <Divider section />
                <h4>Created by: City Tour Team</h4>
                <Button size="massive" color="blue">
                  View Packages
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </section>
    </>
  );
};

export default Landing;
