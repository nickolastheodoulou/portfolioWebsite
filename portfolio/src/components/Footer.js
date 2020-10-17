import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name}> 
                    <a href={item.url}>
                      <FontAwesomeIcon icon={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
        <p style={{color:"white"}}>Nick Theodoulou ©2020</p>
    </footer>
    );
  }
}