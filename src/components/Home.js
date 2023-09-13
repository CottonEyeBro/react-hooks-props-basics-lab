import React from "react";

function Home( {user: {color, name, city}}) {
  //console.log(color)
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
