import React from "react";

function Header(props) {
  const title = props.title || "Hello everyone!!";
  const subtitle = props.subtitle || "Welcome to Tecnotree";

  return (
    <div className="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Header;
