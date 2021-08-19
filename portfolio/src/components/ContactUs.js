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
        <h2 style={{paddingTop: '10px'}} align={"center"}>Contact Me</h2>
        <br/>
        <div style={formStyle}>
          <ContactForm/>
        </div>
      </section>

    );
  }
}
