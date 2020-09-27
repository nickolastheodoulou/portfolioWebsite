import React, { Component } from 'react';
import ContactForm from "./ContactForm";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const divStyle = {
      position: 'absolute',
      left: '50%',
      marginLeft: "-7%",
      display:"block",
      alignContent:"center"
    };

    const formStyle = {
      position: 'center',
      display:"block",
      maxWidth:"70%",
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <section id="contact">
        <br/>
        <h2 align={"center"}>Contact Details</h2>
        <br/>
        <br/>
        <div style={formStyle}>
          <ContactForm/>
        </div>

        <div style={divStyle}>

          <p className="address">
            <span>
              Or email me <a href="mailto:nickolastheodoulou@hotmail.com?subject=Question From Portfolio Website">Here</a>
            </span>
            <br/>
            <span>
              nickolastheodoulou@hotmail.com
            </span>
            <br/>
            <span>{resumeData.address}
            </span>
            <br/>
          </p>
        </div>
        <br/>
        <br/>

      </section>

    );
  }
}