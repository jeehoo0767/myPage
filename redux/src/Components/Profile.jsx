import React from "react";

const Profile = (props) => {
  return (
    <>
      <strong>{props.username}</strong> <span>{props.name}</span>
    </>
  );
};

export default Profile;
