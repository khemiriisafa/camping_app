import React from "react";

function Carditem({ logo, title, paragraph }) {
  return (
    <div className="c-item">
      <img src={logo} alt="" width="150px" />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default Carditem;
