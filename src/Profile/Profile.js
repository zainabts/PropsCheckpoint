import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  //   props.handleName(props.fullname);
  return (
    <>
      <h1>Profile</h1>
      <p>{props.fullname}</p>
      <p>{props.profession}</p>
      <p>{props.bio}</p>
      <img src={props.children} alt="no ssss" />
    </>
  );
};

export default Profile;

Profile.propTypes = {
  fullname: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  children: PropTypes.string,
};
Profile.defaultProps = {
  fullname: "joe doe",
  profession: "dada",
  bio: "ssss",
  children: "https://via.placeholder.com/50",
};
