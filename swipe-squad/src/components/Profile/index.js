import React from "react";
// import "./style.css";

function Profile(props) {
    return (
      <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
        >
  
      </div>
    );
  }

export default Profile;
