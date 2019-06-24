import React, { Component } from 'react'

class OpportunitiesContainer extends Component {
  render() {
    return (
      <>
        <section className="Oppurtunity-container">
          <h2> School Name Here:</h2>
          <p>Department:</p>
          <p>Time:</p>
          <p>School District:</p>
          {/* <h2>{this.props.schoolName}</h2>
          <p>{this.props.department}</p>
          <p>{this.props.time}</p>
          <p>{this.props.schoolDistrict}</p> */}
        </section>
      </>
    )
  }
}

export default OpportunitiesContainer
