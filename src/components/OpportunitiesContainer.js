import React, { Component } from 'react'

class OpportunitiesContainer extends Component {
  render() {
    return (
      <div>
        <section className="opportunity-display">
          <section className="opportunity-container">
            <h2>School Name Here</h2>
            <section className="opportunity-info">
              <p>Department:</p>
              <p>Date:</p>
              <p>Time:</p>
              <p>School District:</p>
            </section>
            <button className="select-opp">Sign Me Up!</button>
          </section>
          <section className="opportunity-container">
            <h2>School Name Here</h2>
            <section className="opportunity-info">
              <p>Department:</p>
              <p>Date:</p>
              <p>Time:</p>
              <p>School District:</p>
            </section>
            <button className="select-opp">Sign Me Up!</button>
          </section>
        </section>
        {/* <h2>{this.props.schoolName}</h2>
          <p>{this.props.department}</p>
          <p>{this.props.date}</p>
          <p>{this.props.time}</p>
          <p>{this.props.schoolDistrict}</p> */}
      </div>
    )
  }
}

export default OpportunitiesContainer
