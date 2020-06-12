import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="row">
              <div className="columns contact-details">
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
            </div>
          </aside>
        </div>
      </section>
    );
  }
}