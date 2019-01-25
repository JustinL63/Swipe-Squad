import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>About</li>
      <li onClick={close}>Chat</li>
    </ul>
  </div>
);
