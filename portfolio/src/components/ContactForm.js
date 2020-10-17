// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

const labelStyle = {
  display: "inline-block",
  textAlign: "center",
  color:"black"};

const buttonStyle = {
    width: "140px"
  }

  const divStyle = {
    textAlign: "center"
  }

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/meqpoedy"
        method="POST"
      >
        <label style={labelStyle}>Email:</label>
        <input type="email" name="email" />
        <label style={labelStyle}>Message:</label>
        <input type="text" name="message" />
        <div style ={divStyle}>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button style={buttonStyle}>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}