import React from "react";
import withNames from "../containers/withNames";
import withAge from "../containers/withAge";
const Info = (props) => {
  return (
    <>
      <div>{props.myName}</div>
      <div>{props.myAge}</div>
      <div>{props.location}</div>
    </>
  );
};

// export default withNames(withAge(Name))
export default withAge(withNames(Info));
