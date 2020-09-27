import React, { Component } from 'react';


export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const divStyle = {
      position: 'absolute',
      left: '50%',
      marginLeft: '-50px',
      display:"block"
    };
    return (
      <section id="contact">
        <div style={divStyle}>

          <h4>Contact Details</h4>
          <p className="address">
            <span>{resumeData.name}</span>
            <br></br>
            <span>{resumeData.address}
            </span>
            <br></br>
            <span>
              <a href="mailto:nickolastheodoulou@hotmail.com?subject=Question From Portfolio Website">Email Me Here</a>
            </span>
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>

      </section>

    );
  }
}