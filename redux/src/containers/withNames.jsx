import React from "react";

const withNames = (Component) => (props) => {
  return <Component {...props} myName="박쥐후" />;
};

export default withNames;
