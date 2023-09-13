import React from "react";
import Links from "./Links";

function About( {bio, links} ) {
console.log(bio)
  if (bio.length > 0) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links links = {links}/>
      </div>
    )
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links links = {links}/>
      </div>
    )
  }
}

export default About;
