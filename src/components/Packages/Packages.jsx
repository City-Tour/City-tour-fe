import React from "react";

import "./Packages.scss";
import { withRouter } from "react-router-dom";

const Packages = () => {
  return (
    <>
      <div>
        <h1>Package Name</h1>
      </div>
      <div className="suggestions-container">
        <div className="suggestion">
          <div className="category-header">
            <h2>Food</h2>
          </div>
          <div className="category-container">
            <div className="category-suggestion">
              <div className="top-half">
                <h3>Butcher Town Hall</h3>
              </div>

              <div className="bottom-half">
                <a href="https://www.butchertownhall.com">
                  butchertownhall.com
                </a>
                <p>
                  Restaurant Description. This Could be very long so maybe try
                  and write an extremely painfully long run on sentence to try
                  and emulte the feeling of a long sentence and maybe we will
                  get an idea of how long the sentence or description might be.
                </p>
                <a href="https://www.google.com/maps/dir//butcher+town+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88646703ae8d5811:0xe6537aa47c217248?sa=X&ved=2ahUKEwj3ltup8ebmAhVGCc0KHYePDWUQ9RcwDHoECAsQEA">
                  Address: 1416 4th Ave N, Nashville, TN 37208
                </a>
              </div>
            </div>
            <div className="category-suggestion">
              <h3>Butcher Town Hall</h3>
              <p>
                Restaurant Description. This Could be very long so maybe try and
                write an extremely painfully long run on sentence to try and
                emulte the feeling of a long sentence and maybe we will get an
                idea of how long the sentence or description might be.
              </p>
              <a href="https://www.butchertownhall.com">www.website.com</a>
              <a href="https://www.google.com/maps/dir//butcher+town+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88646703ae8d5811:0xe6537aa47c217248?sa=X&ved=2ahUKEwj3ltup8ebmAhVGCc0KHYePDWUQ9RcwDHoECAsQEA">
                Address: 1416 4th Ave N, Nashville, TN 37208
              </a>
            </div>
            <div className="category-suggestion">
              <h3>Butcher Town Hall</h3>
              <p>
                Restaurant Description. This Could be very long so maybe try and
                write an extremely painfully long run on sentence to try and
                emulte the feeling of a long sentence and maybe we will get an
                idea of how long the sentence or description might be.
              </p>
              <a href="https://www.butchertownhall.com">www.website.com</a>
              <a href="https://www.google.com/maps/dir//butcher+town+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88646703ae8d5811:0xe6537aa47c217248?sa=X&ved=2ahUKEwj3ltup8ebmAhVGCc0KHYePDWUQ9RcwDHoECAsQEA">
                Address: 1416 4th Ave N, Nashville, TN 37208
              </a>
            </div>
          </div>
        </div>
        <div className="suggestion">
          <div>
            <h2>Attractions</h2>
          </div>
          <div className="category-container">
            <div className="category-suggestion">
              <h3>Butcher Town Hall</h3>
              <p>
                Restaurant Description. This Could be very long so maybe try and
                write an extremely painfully long run on sentence to try and
                emulte the feeling of a long sentence and maybe we will get an
                idea of how long the sentence or description might be.
              </p>
              <a href="https://www.butchertownhall.com">www.website.com</a>
              <a href="https://www.google.com/maps/dir//butcher+town+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88646703ae8d5811:0xe6537aa47c217248?sa=X&ved=2ahUKEwj3ltup8ebmAhVGCc0KHYePDWUQ9RcwDHoECAsQEA">
                Address: 1416 4th Ave N, Nashville, TN 37208
              </a>
            </div>
            <div className="category-suggestion">
              <h3>Butcher Town Hall</h3>
              <p>
                Restaurant Description. This Could be very long so maybe try and
                write an extremely painfully long run on sentence to try and
                emulte the feeling of a long sentence and maybe we will get an
                idea of how long the sentence or description might be.
              </p>
              <a href="https://www.butchertownhall.com">www.website.com</a>
              <a href="https://www.google.com/maps/dir//butcher+town+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88646703ae8d5811:0xe6537aa47c217248?sa=X&ved=2ahUKEwj3ltup8ebmAhVGCc0KHYePDWUQ9RcwDHoECAsQEA">
                Address: 1416 4th Ave N, Nashville, TN 37208
              </a>
            </div>
          </div>
        </div>
        <div className="suggestion">
          <h2>Entertainment</h2>
        </div>
      </div>
    </>
  );
};

export default withRouter(Packages);
