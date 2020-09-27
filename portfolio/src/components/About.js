import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;


    const profilePic = {
      height:"auto",
      maxWidth: "90%",
      width:"auto"
    }


    return (
      <section id="about" style={{background: "#eeedeb",   overflow: "auto"}}>
        <div className="row item">

          <div className="six columns main-col">
            <h1 style={{color: "black"}}>About Me.</h1>
            <p style={{color: "black"}}>{resumeData.aboutme.paragraph1} </p>
            <p style={{color: "black"}}>{resumeData.aboutme.paragraph2} </p>
            <p style={{color: "black"}}>{resumeData.aboutme.paragraph3} </p>
          </div>

          <div className="six columns main-col">
            <img style={profilePic} src="images/profilepic2.png" alt="Profile"/>
          </div>

        </div>
      </section>
    );
  }
}