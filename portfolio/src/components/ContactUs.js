import React, { Component } from 'react';
import ContactForm from "./ContactForm";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const divStyle = {
      textAlign: "center"
    };

    const formStyle = {
      position: 'center',
      display:"block",
      maxWidth:"70%",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center"
    };

    return (
      <section id="contact">
        <h2 align={"center"}>Contact Details</h2>
        <br/>
        <div style={formStyle}>
          <ContactForm/>
        </div>

        <div style={divStyle}>

          <p className="address">
            <span>
              Or email me <a href="mailto:nickolastheodoulou@hotmail.com?subject=Question From Portfolio Website">here</a>
            </span>
            <br/>
            <span>
              nickolastheodoulou@hotmail.com
            </span>
            <br/>
            <span>{resumeData.address}
            </span>
          </p>
        </div>
      </section>

    );
  }
}