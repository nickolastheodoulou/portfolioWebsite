 import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Tools</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div className="bars">
              <ul className="skills">{
                resumeData.skills && resumeData.skills.map((item) => {
                  return(
                    <li>
                      <span style={{width: `${item.experience}`}} className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      <br/><br/>
                      <p style={{textAlign: 'right', color:'black'}}>{item.experience}</p>
                    </li>
                  )
                })
              }</ul>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span><br /></span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        <p>
                          {item.Achievements1}
                        </p>
                        <p>
                          {item.Achievements2}
                        </p>
                        <p>
                          {item.Achievements3}
                        </p>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>



        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span><br /></span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


      </section>
    );
  }
}
