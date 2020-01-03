import React from "react";

import "./Packages.scss";
import { withRouter } from "react-router-dom";

const Packages = props => {
  console.log(props);
  return (
    <>
      <div>
        <h1>Package Name</h1>
      </div>
    </>
  );
};

export default withRouter(Packages);
