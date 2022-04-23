import React from "react";

const withAge = (Component) => (props) => {
  return <Component {...props} myAge={27} />;
};

export default withAge;
