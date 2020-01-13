import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
  return (<div className="UserOutput">
  <p className="Title">{props.name}</p>
  <p>Above me there is a chess world-champion!</p>
  </div>);
}

export default userOutput;
